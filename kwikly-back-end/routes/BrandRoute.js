const express = require("express");
const {
  getBrands,
  createBrand,
  getSingleBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/BrandController");
const {
  getBrandValidator,
  createBrandValidator,
  updateBrandValidator,
  deleteBrandValidator,
} = require("../utils/validators/brandValidator");

const router = express.Router();

// Define routes
router.post("/create", createBrandValidator, createBrand);
router.get("/getAll", getBrands);
router.get("/getById/:id", getBrandValidator, getSingleBrand);
router.put("/update/:id", updateBrandValidator, updateBrand);
router.delete("/delete/:id", deleteBrandValidator, deleteBrand);

module.exports = router;
