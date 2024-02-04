const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "config.env",
});

const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;


const dbConnection = () => {
  mongoose
    .connect(DB_URI)
    .then((conn) => {
      console.log(`Connected to ${DB_NAME} database`);
    })
    // .catch((err) => {
    //   console.error("Error connecting to the mongoDb server", err);
    //   process.exit(1);
    // });
};

module.exports=dbConnection
