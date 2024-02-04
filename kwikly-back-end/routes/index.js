const express = require("express");
const CategoryRoute = require("./CategoryRoute");
const subCategoryRoute = require("./SubCategoryRoute");
const BrandRoute = require("./BrandRoute");

const Routes = express.Router();

Routes.use("/category", CategoryRoute);
Routes.use("/subCategory", subCategoryRoute);
Routes.use("/brand", BrandRoute);

module.exports = Routes;
