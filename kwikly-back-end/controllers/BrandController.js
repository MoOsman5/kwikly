const BrandModel = require("../models/BrandModel");
const handler = require("./ControllersHandler");

exports.createBrand = handler.create(BrandModel);
exports.getSingleBrand = handler.getOne(BrandModel);
exports.getBrands = handler.getAll(BrandModel);
exports.updateBrand = handler.update(BrandModel);
exports.deleteBrand = handler.delete(BrandModel);
