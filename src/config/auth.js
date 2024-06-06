import * as dotenv from 'dotenv';
dotenv.config();

export default {
  SECRET_KEY: process.env.SECRET_KEY,
  expiresIn: "7d",
};
