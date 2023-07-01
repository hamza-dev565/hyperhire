const httpStatus = require("http-status");
const { Book } = require("../models/index");
const { paginate } = require("../utils/pagination");
const asyncHandler = require("../middlewares/async");
const { dataUri } = require("../middlewares/multer");
const { uploader } = require("cloudinary");

const getAllBooks = asyncHandler(async (req, res) => {
  const { page = 1, pageSize = 10 } = req.query;

  const { paginatedResult, paginationInfo } = await paginate(
    Book,
    page,
    pageSize,
  );

  return res.status(httpStatus.OK).json({
    success: true,
    data: paginatedResult,
    paginationInfo,
  });
});

const createBook = asyncHandler(async (req, res) => {
  const { title, description, discountRate, price } = req.body;
  let image;

  try {
    if (req.file) {
      const file = dataUri(req).content;
      const result = await uploader.upload(file);
      image = result.secure_url;
    }

    const newBook = await Book.create({
      title,
      description,
      discountRate,
      image,
      price,
    });

    return res.status(httpStatus.CREATED).json({
      success: true,
      data: newBook,
    });
  } catch (error) {
    console.error("Error creating book:", error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: "Error creating book",
    });
  }
});

const getBookById = asyncHandler(async (req, res) => {
  const user = await Book.findByPk(req.params.id);

  if (user) {
    return res.status(httpStatus.OK).json({
      success: true,
      data: user,
    });
  }
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    data: { message: "User not found." },
  });
});

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
};
