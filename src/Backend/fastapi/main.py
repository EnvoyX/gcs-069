from fastapi import FastAPI, HTTPException, Depends, status, APIRouter
from typing import Annotated
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from datetime import datetime, timedelta, timezone
from passlib.context import CryptContext
from database import engine, SessionLocal
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from models import User, ContactUs
import models
# import auth
# from auth import get_current_user


# router = APIRouter(
#     prefix="/auth",
#     tags=['auth']
# )
app = FastAPI()
# app.include_router(router)


models.Base.metadata.create_all(bind=engine)
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

origins = "http://localhost:3000"

# router.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,  # allows all origin from the list
#     allow_crendentials=True,
#     allow_methods=["*"], # Allows all methods
#     allow_headers=["*"], # Allows all headers
# )


#Dependancy
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]
bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# JWT secret & algorithm
SECRET_KEY = "zP3A4oMuCaUoz1lUET4n1CkY3xjt2Dgw"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

class CreateUserRequest(BaseModel):
    username: str
    email: str
    password: str
class CreateContactRequest(BaseModel):
    username : str
    email : str
    phone  : str 
    title  : str
    message  : str 
    
class Token(BaseModel):
    access_token : str
    token_type : str
    response : str

def get_user_by_username(db:Session, username: str):
    return db.query(User).filter(User.username == username).first()

def create_user(db: Session, user: CreateUserRequest):
    hashed_password = bcrypt_context.hash(user.password)
    db_user = User(username=user.username, email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    return "complete"

@app.post("/contact")
def create_contact_request( contact: CreateContactRequest, db: Session = Depends(get_db)):
    db_contact_form = ContactUs(username=contact.username, email=contact.email, phone=contact.phone, title=contact.title, message=contact.message)
    db.add(db_contact_form)
    db.commit()
    return "form successfully requested"

@app.post("/signup")
def register_user(user: CreateUserRequest, db: Session = Depends(get_db)):
    db_user = get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    return create_user(db=db, user=user)


# Authenticate User
def authenticate_user(username: str, password: str, db: Session):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user

# Create access token
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp" : expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@app.post("/login")
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorret username or password",
            headers={"WWW-Authenticate" : "Bearer"}
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub" : user.username} , expires_delta=access_token_expires)
    return {"access_token" : access_token, "token_type" : "bearer", "response" : "Login Successfully"}

def verify_token(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=403, detail="Token is invalid or expired")
        return payload
    except JWTError:
        raise HTTPException(status_code=403, detail="Token is invalid or expired")

@app.get('/verify-token/{token}')
async def verify_user_token(token: str):
    verify_token(token=token)
    return {"message" : "Token is valid"}



# Setup with auth.py
# app = FastAPI()
# app.include_router(auth.router)

# models.Base.metadata.create_all(bind=engine)


# # Dependancy
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
        
# db_dependency = Annotated[Session, Depends(get_db)]
# user_dependency = Annotated[dict, Depends(get_current_user)]

# @app.get("/", status_code=status.HTTP_200_OK)
# async def user(user: user_dependency, db: db_dependency):
#     if user is None:
#         raise HTTPException(status_code=401, detail="Authentication Failed")
#     return {"User:" : user}

















