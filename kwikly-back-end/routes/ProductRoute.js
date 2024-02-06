const express = require("express");
const {
  getProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");
const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require("../utils/validators/categoryValidator");

const router = express.Router();

// Define routes
router.post("/create", createProduct);
router.get("/getAll", getProducts);
router.get("/getById/:id", getSingleProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
