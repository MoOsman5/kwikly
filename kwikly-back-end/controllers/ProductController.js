const ProductModel = require("../models/ProductModel");
const handler = require("./ControllersHandler");

exports.createProduct = handler.create(ProductModel);
exports.getSingleProduct = handler.getOne(ProductModel);
exports.getProducts = handler.getAll(ProductModel);
exports.updateProduct = handler.update(ProductModel);
exports.deleteProduct = handler.delete(ProductModel);
