const express = require("express");
const {
  getBrands,
  createBrand,
  getSingleBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/SubCategoryController");
const {
  getSubCategoryValidator,
  createSubCategoryValidator,
  updateSubCategoryValidator,
  deleteSubCategoryValidator,
} = require("../utils/validators/subCategoryValidator");

const router = express.Router();

// Define routes
router.post("/create", createSubCategoryValidator, createBrand);
router.get("/getAll", getBrands);
router.get("/getById/:id", getSubCategoryValidator, getSingleBrand);
router.put("/update/:id", updateSubCategoryValidator, updateBrand);
router.delete("/delete/:id", deleteSubCategoryValidator, deleteBrand);

module.exports = router;
