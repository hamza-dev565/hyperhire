const compression = require("compression");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const hpp = require("hpp");
const httpStatus = require("http-status");
const mongoSanitize = require("express-mongo-sanitize");
const timeout = require("connect-timeout");
const xss = require("xss-clean");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");


const morgan = require("./config/morgan");
const { errorConverter, errorHandler } = require("./middlewares/error");
const config = require("./config/appConfig");
const routes = require("./routes/index");

const app = express();

if (config.env !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// Prevent http param pollution
app.use(hpp());

// enable cors
app.use(cors());
app.options("*", cors());

app.use(timeout("10s"));
const haltOnTimedout = (req, res, next) => {
  if (!req.timedout) next();
};
app.use(haltOnTimedout);

// v1 api routes
// Sync sequelize models with the database
app.use("/api/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).json({ errors: ["Not Found!"] });
});

// convert error to ErrorResponse, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
