const { check } = require("express-validator");
const { validatorMiddleware } = require("../../middleware/validatorMiddleware");

exports.getCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid Category Id"),
  validatorMiddleware,
];
exports.createCategoryValidator = [
  check("categoryName")
    .notEmpty()
    .withMessage("Category Required")
    .isLength({ min: 3 })
    .withMessage("Too short Name")
    .isLength({ max: 32 })
    .withMessage("Too Long Name"),
  validatorMiddleware,
];

exports.updateCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid Category Id"),
  validatorMiddleware,
];
exports.deleteCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid Category Id"),
  validatorMiddleware,
];
