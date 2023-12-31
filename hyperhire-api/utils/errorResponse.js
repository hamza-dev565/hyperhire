class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super();

    this.message = Array.isArray(message) ? message : [message];
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorResponse;
