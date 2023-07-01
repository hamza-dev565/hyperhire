const app = require("./app");
const logger = require("./config/logger");
const sequelize = require("./config/sequelize");
const os = require("os");
const fs = require("fs");
const path = require("path");

sequelize
  .sync({ force: false })
  .then(() => {
    logger.info("Database synced successfully.");
  })
  .catch((error) => {
    logger.info(`Error syncing database: ${error.message}`);
  });

let networkAddress;
const networkInterfaces = os.networkInterfaces();
Object.keys(networkInterfaces).forEach((interfaceName) => {
  const interface = networkInterfaces[interfaceName];
  const isIPv4 = interface.some((details) => details.family === "IPv4");
  if (isIPv4) {
    networkAddress = interface[0].address;
    return false;
  }
});

if (!networkAddress) {
  process.exit(1);
}
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, `${networkAddress}`, () => {
  logger.info(`Server is running on port ${networkAddress} ${PORT}.`);
});

const envPath = path.join(__dirname, "../react-native-assesment/env.js");
fs.writeFileSync(envPath, `export const serverAddress =  "${networkAddress}"`);

const exitHandler = function () {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
    });
  }
};

const unexpectedErrorHandler = function (error) {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
