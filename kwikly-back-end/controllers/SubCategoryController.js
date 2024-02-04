const SubCategoryModel = require("../models/SubCategoryModel");
const handler = require("./ControllersHandler");

exports.createSubCategory = handler.create(SubCategoryModel);
exports.getSubCategories = handler.getAll(SubCategoryModel);
exports.getSingleSubCategory = handler.getOne(SubCategoryModel);
exports.updateSubCategory = handler.update(SubCategoryModel);
exports.deleteSubCategory = handler.delete(SubCategoryModel);
