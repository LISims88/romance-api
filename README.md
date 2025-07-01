# Romance API
This is the backend API server for Love Library application. This project was created as part of a project to build a fullstack application. More infomration about this project can be found in the front end repository here 

https://github.com/LISims88/love-library

## 7/1/2025
Project has been updated to include users and includes a dummy user that isn't connected to anything. The API is currently deployed through Vercel with a Supabase Postgres server, it can still be run locally but requires the use of `Postico 2`

How to Run Locally
To run this server, you must have a local deployment of Postgres running.

Clone the project

  `git clone git@github.com:LISims88/romance-api.git`

Go to the project directory

  `cd romance-api`

Install dependencies

  `npm install`

Configure your .env file. You will require:

```
ENVIRONMENT
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_DATABASE
```

Migrate the tables.

  `npm run migrate`
  
Seed the tables.

  `npm run seed`
Start the server

  `npm run start`
  
The server will be running at `localhost:4000`

API Reference

All books
`GET /api/v1/books`
Books Format
```
title: "String",
imgsrc: "String",
author: ["String"],
summary: "String",
genres: ["String"],
average_rating: Number,
number_of_pages: Number,
publication_year: Number
```

All Users
`GET /api/v1/user`
User Format
```
username: "string",
password: "string",
password_confirm: "string",
tbr_list: [],
read_list: []
```


