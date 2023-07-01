const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../.env") });

const envVarsSchema = Joi.object()
  .keys({
    // ...
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
  },
  SMTP_HOST: envVars.SMTP_HOST,
  SMTP_PORT: envVars.SMTP_PORT,
  SMTP_EMAIL: envVars.SMTP_EMAIL,
  SMTP_PASSWORD: envVars.SMTP_PASSWORD,
  FROM_EMAIL: envVars.FROM_EMAIL,
  FROM_NAME: envVars.FROM_NAME,
};
