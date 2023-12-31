import { config } from "dotenv";

config();
export const configs = {
  DB_URI: process.env.DB_URI,
  PORT: process.env.PORT || 5001,
  SECRET_SALT: process.env.SECRET_SALT,
  front_URL: process.env.FRONT_URL || "http://0.0.0.0:3000",

  JWT_ACCESS_SECRET_WORD: process.env.JWT_ACCESS_SECRET_WORD,
  JWT_REFRESH_SECRET_WORD: process.env.JWT_REFRESH_SECRET_WORD,
  JWT_ACTION_SECRET_WORD: process.env.JWT_ACTION_SECRET_WORD,
  JWT_ACTION_FORGOT_PASSWORD_WORD: process.env.JWT_ACTION_FORGOT_PASSWORD_WORD,

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
  NO_REPLY_PASSWORD: process.env.NO_REPLY_PASSWORD,

  AWS_S3_ACCESS_KEY: process.env.AWS_S3_ACCESS_KEY,
  AWS_S3_SECRET_ACCESS_KEY: process.env.AWS_S3_SECRET_ACCESS_KEY,
  AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
  AWS_S3_REGION: process.env.AWS_S3_REGION,
  AWS_S3_URL: process.env.AWS_S3_URL,
};
