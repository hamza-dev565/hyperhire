const httpStatus = require("http-status");
const { ValidationError: SequelizeValidationError } = require("sequelize");

const config = require("../config/appConfig");
const ErrorResponse = require("../utils/errorResponse");
const logger = require("../config/logger");

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  res.locals.errorMessage = err.message;

  const response = {
    success: false,
    statusCode,
    errors: message,

    ...(config.env === "development" && { stack: err.stack }),
  };

  if (config.env === "development") {
    logger.error(err);
  }

  res.status(statusCode).json({ ...response });
};

const errorConverter = (err, req, res, next) => {
  let error = err;
  const statusCode =
    error.statusCode ||
    (error instanceof SequelizeValidationError
      ? httpStatus.BAD_REQUEST
      : httpStatus.INTERNAL_SERVER_ERROR);

  const message = error.message || httpStatus[statusCode];

  if (!(error instanceof ErrorResponse)) {
    error = new ErrorResponse(message, statusCode);
  }

  if (err instanceof SequelizeValidationError) {
    const errorMessages = err.errors.map((errorItem) => errorItem.message);

    return errorHandler(
      new ErrorResponse(errorMessages, statusCode),
      req,
      res,
      next,
    );
  }

  errorHandler(new ErrorResponse(message, statusCode), req, res, next);
};

module.exports = { errorConverter, errorHandler };
