const express = require("express");
const CategoryRoute = require("./CategoryRoute");
const subCategoryRoute = require("./SubCategoryRoute");
const Routes = express.Router();

Routes.use("/category", CategoryRoute);
Routes.use("/subCategory", subCategoryRoute);

module.exports = Routes;
