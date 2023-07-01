const express = require("express");
const books = require("./books");

const router = express.Router();

router.get("/ping", (req, res) => {
  res.send("Server is running.");
});

router.use("/books", books);

module.exports = router;
