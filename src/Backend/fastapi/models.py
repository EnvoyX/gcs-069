from sqlalchemy import  Column, Integer, String, Text, BigInteger, VARCHAR
from database import Base
from database import engine

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(VARCHAR(50),  unique=True,nullable=False, index=True )
    email = Column(VARCHAR(100), unique=True,nullable=False, index=True)
    hashed_password = Column(VARCHAR(255), nullable=False)

class ContactUs(Base):
    __tablename__ = "contact_us"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(VARCHAR(100), nullable=False, index=True)
    email = Column(VARCHAR(100), nullable=False, index=True )
    phone = Column(VARCHAR(15), index=True )
    title = Column(VARCHAR(100), index=True )
    message = Column(Text, nullable=False, index=True ) 

# Create the database tables if they don't exist
# Users.metadata.create_all(bind=engine)
# ContactUs.metadata.create_all(bind=engine)