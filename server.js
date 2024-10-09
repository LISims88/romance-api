require("dotenv").config();
const express = require("express");
const knex = require("./knex/knex.js");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the Romance-API!");
});

// Get all books
app.get("/api/v1/books", async (req, res) => {
  try {
    const books = await knex("books");
    res.json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error getting books!" });
  }
});

// Add a new book
app.post("/api/v1/books", async (req, res) => {
  try {
    console.log(req.body); // Log request body for debugging
    const book = await knex("books").insert(req.body).returning("*");
    res.json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding book!" });
  }
});

// Get all users
app.get("/api/v1/users", async (req, res) => {
  try {
    const users = await knex("users");
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error getting users!" });
  }
});

// Add a new user
app.post("/api/v1/users", async (req, res) => {
  try {
    console.log(req.body); // Log request body for debugging
    const user = await knex("users").insert(req.body).returning("*");
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding user!" });
  }
});

// Delete a user by ID
app.delete("/api/v1/users/:id", async (req, res) => {
  try {
    const user = await knex("users").where({ id: req.params.id }).del().returning("*");
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error deleting user!" });
  }
});

app.listen(PORT, () => {
  console.log(`Romance-API is running on http://localhost:${PORT}`);
});

module.exports = app;
