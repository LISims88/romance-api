require("dotenv").config()
const express = require("express");
const knex = require("./knex/knex.js");
const PORT = process.env.PORT || 4000;
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("Welcome to the Romance-API!");
});
app.get("/api/v1/books", async (req, res) => {
  try {
    const books = await knex("books");
    res.json(books);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Error getting books!" });
  }
});

app.listen(PORT, () => {
  console.log(`Romance-API is running on http://localhost:${PORT}`);
});

module.exports = app;