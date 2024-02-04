const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const Routes = require("./routes/index");
const ApiError = require("./utils/apiError");
const globalError = require("./middleware/errorMidleware");

dotenv.config({
  path: "config.env",
});
const dbConnection = require("./config/database");

const app = express();
const PORT = process.env.PORT || 8000;

// connect with DB
dbConnection();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode : ${process.env.NODE_ENV}`);
}

// Routes
app.use("/api/v1", Routes);

app.all("*", (req, res, next) => {
  next(new ApiError(`can't find this route: ${req.originalUrl}`, 400));
});

app.use(globalError);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection Error :${err.name} | ${err.message}`);
  console.groupCollapsed(() => {
    console.error("shutting down.......");
    process.exit(1);
  });
});
