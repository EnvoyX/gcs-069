# React + Vite + React Router DOM (SPA) + FastAPI (Python) + PostgreSQL(DB)

## Setup and Installation Front-end

```
cd gcs-069
```

```
bun i 
```

```
npm i 
```

```
pnpm i 
```

## Setup and Installation Backend

```
cd gcs-069
```

```
cd ./src/Backend/fastapi
```

Create Python Virtual Environment
```
python -m venv venv 
```

Activate venv
```
.\venv\Scripts\activate     
```

Install requirements
```
pip install -r requirements.txt 
```

run uvicorn (FASTapi)
```
uvicorn main:app --reload   
```

## Setup Database PostgreSQL 17

### Connect Database
Activate database by connecting it through pgAdmin4 PostgreSQL 17 and create new Server or Database

change URL_DATABASE based on your PostgreSQL's username and password in database.py (Backend Folder)

![Screenshot 2025-02-04 225024](https://github.com/user-attachments/assets/6445d330-34d6-47a0-a1a9-2016e2115a75)



### Run query tool to find table

![Screenshot 2025-02-04 224256](https://github.com/user-attachments/assets/09a469d0-ea1c-421d-8351-4f2f07cef144)
```
select * from users
```


![Screenshot 2025-02-04 224306](https://github.com/user-attachments/assets/9d32bc48-daa2-49ae-9603-17f10dcb368a)
```
select * from contact_us
```


## Run Project

```
bun run dev
```

```
npm run dev
```

```
pnpm run dev
```

##
Website ini mengenai web penyewaan van, yang user nya dapat melihat list yang dapat disewa,
dan dapat melihat list van yang akan disewa, dan dapat melihat detail van yang ingin disewa.

