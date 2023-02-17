const dotenv = require('dotenv');
const path = require('path');
const Joi = require('@hapi/joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });
const envVarsSchema = Joi.object()  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    DB_URL: Joi.string().required().description('SQL host'),
    DB_DATABASE: Joi.string().required().description('SQL DATABASE'),
    DB_USER: Joi.string().required().description('SQL Username'),
    DB_PASSWORD: Joi.string().required().description('SQL Password'),
    DB_URL_PROD: Joi.string().required().description('SQL Production host'),
    DB_USER_PROD: Joi.string().required().description('SQL Production Username'),
    DB_PASSWORD_PROD: Joi.string().required().description('SQL Production Password'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  DB: {
    host: envVars.DB_URL,
    database: envVars.DB_DATABASE,
    user: envVars.DB_USER,
    password: envVars.DB_PASSWORD,
  },
  DBprod: {
    host: envVars.DB_URL_PROD,
    user: envVars.DB_USER_PROD,
    password: envVars.DB_PASSWORD_PROD,
  },
};
