const express = require("express");
const CategoryRoute = require("./CategoryRoute");
const subCategoryRoute = require("./SubCategoryRoute");
const BrandRoute = require("./BrandRoute");
const ProductRoute = require("./ProductRoute");

const Routes = express.Router();

Routes.use("/category", CategoryRoute);
Routes.use("/subCategory", subCategoryRoute);
Routes.use("/brand", BrandRoute);
Routes.use("/product", ProductRoute);


module.exports = Routes;
