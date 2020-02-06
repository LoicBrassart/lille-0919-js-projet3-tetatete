require("dotenv").config();
const mysql = require("mysql");
const cloudinary = require("cloudinary");
const port = process.env.BACKEND_PORT;

//Jwt & Bcrypt
const JWTSecret = process.env.JWTSECRET;
const saltRound = parseInt(process.env.SALTROUND);

//Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

//Mysql
const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE
});

module.exports = { connection, port, JWTSecret, saltRound, cloudinary };
