/* eslint-disable max-len */
const { Client } = require("pg");
const config = require("./config/config.json").development;
const logger = require("./config/logger");

async function setupDatabase() {
  const client = new Client({
    host: config.host,
    port: config.port,
    user: config.username,
    password: config.password,
    database: "postgres",
  });

  try {
    await client.connect();
    logger.info("Connected to PostgreSQL server.");

    // Check if the database already exists
    const dbCheckResult = await client.query(
      `SELECT 1 FROM pg_database WHERE datname='${config.database}';`,
    );

    if (dbCheckResult.rowCount > 0) {
      // Drop the existing database
      await client.query(`DROP DATABASE "${config.database}";`);
      logger.info(`Database "${config.database}" dropped.`);
    }

    // Create the "pix-development" database
    await client.query(`CREATE DATABASE "${config.database}";`);
    logger.info(`Database "${config.database}" created.`);

    // Grant privileges to the user
    await client.query(
      `GRANT ALL PRIVILEGES ON DATABASE "${config.database}" TO "${config.username}";`,
    );
    logger.info(
      `Privileges granted to user "${config.username}" on database "${config.database}".`,
    );

    await client.end();
    logger.info("PostgreSQL connection closed.");
  } catch (error) {
    logger.info(`Error: ${error.message}`);
    await client.end();
  }
}

setupDatabase();
