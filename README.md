# Romance API
This is the backend API server for Love Library application. This project was created as part of a larger project  build a fullstack application. More infomration about this project can be found in the front end repository here 

https://github.com/LISims88/love-library

How to Run Locally
To run this server, you must have a local deployment of Postgres running.

Clone the project

  `git clone git@github.com:LISims88/romance-api.git`

Go to the project directory

  `cd romance-api`

Install dependencies

  `npm install`

Configure your .env file.

Migrate the tables.

  `npm run migrate`
  
Seed the tables.

  `npm run seed`
Start the server

  `npm run start`
  
The server will be running at `localhost:4000`

API Reference
Get all books
  `GET /api/v1/books`

Author
Lydia Sims - @LISims88
