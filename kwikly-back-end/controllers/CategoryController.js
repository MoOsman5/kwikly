const CategoryModel = require("../models/CategoryModel");
const handler = require("./ControllersHandler");

exports.createCategory = handler.create(CategoryModel);
exports.getSingleCategory = handler.getOne(CategoryModel);
exports.getCategories = handler.getAll(CategoryModel);
exports.updateCategory = handler.update(CategoryModel);
exports.deleteCategory = handler.delete(CategoryModel);
