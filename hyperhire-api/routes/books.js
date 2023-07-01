const express = require("express");
const {
  getAllBooks,
  createBook,
  getBookById,
} = require("../controllers/books");
const { multerUploads } = require("../middlewares/multer");
const cloudinaryConfig = require("../config/cloudinaryConfig");

const router = express.Router();

// router.use(protect);
router.get("/", getAllBooks);
router.post("/", multerUploads, cloudinaryConfig, createBook);
router.get("/:id", getBookById);

module.exports = router;
