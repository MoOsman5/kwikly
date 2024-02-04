const express = require("express");
const {
  getCategories,
  createCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");
const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require("../utils/validators/categoryValidator");
const SubCategoryRoute = require("./SubCategoryRoute");

const router = express.Router();

// Define routes
router.post("/create", createCategoryValidator, createCategory);
router.get("/getAll", getCategories);
router.get("/getById/:id", getCategoryValidator, getSingleCategory);
router.put("/update/:id", updateCategoryValidator, updateCategory);
router.delete("/delete/:id", deleteCategoryValidator, deleteCategory);
router.use("/:categoryId/subcategories", SubCategoryRoute);

module.exports = router;
