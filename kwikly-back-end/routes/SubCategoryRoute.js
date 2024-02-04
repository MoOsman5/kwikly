const express = require("express");
const {
  getSubCategories,
  createSubCategory,
  getSingleSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/SubCategoryController");
const {
  getSubCategoryValidator,
  createSubCategoryValidator,
  updateSubCategoryValidator,
  deleteSubCategoryValidator,
} = require("../utils/validators/subCategoryValidator");

const router = express.Router();

// Define routes
router.post("/create",createSubCategoryValidator,createSubCategory);
router.get("/getAll", getSubCategories);
router.get("/getById/:id",getSubCategoryValidator, getSingleSubCategory);
router.put("/update/:id",updateSubCategoryValidator, updateSubCategory);
router.delete("/delete/:id",deleteSubCategoryValidator, deleteSubCategory);

module.exports = router;
