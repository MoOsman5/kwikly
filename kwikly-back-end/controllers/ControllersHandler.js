const asyncHandler = require("express-async-handler");
const ApiError = require("../middleware/errorMidleware");
const ApiFeatures = require("../utils/apiFeatures");

//create handler
exports.create = (Model) =>
  asyncHandler(async (req, res) => {
    const createObject = req.body;
    const data = await Model.create(createObject);
    res.status(201).json({ data });
  });

//Get One handler
exports.getOne = (Model, populationOpt) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    let query = Model.findById(id);
    if (populationOpt) {
      query = query.populate(populationOpt);
    }
    const data = await query;

    if (!data) {
      return next(new ApiError(`No ${Model} for this id ${id}`, 404));
    }
    res.status(200).json({ data });
  });

//Get All handler
exports.getAll = (Model, modelName = "") =>
  asyncHandler(async (req, res) => {
    let filter = {};
    if (req.filterObj) {
      filter = req.filterObj;
    }
    const documentsCounts = await Model.countDocuments();
    const apiFeatures = new ApiFeatures(Model.find(filter), req.query)
      .paginate(documentsCounts)
      .filter()
      .search(modelName)
      .limitFields()
      .sort();
    const { mongooseQuery, paginationResult } = apiFeatures;
    const data = await mongooseQuery;
    res.status(200).json({ results: data.length, paginationResult, data });
  });
//update handler
exports.update = (Model) =>
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updateField = req.body;
    const data = await Model.findByIdAndUpdate(id, updateField, {
      new: true,
    });
    if (!data) {
      res.status(404).json({ msg: `No ${Model} with the ID ${id}` });
    }
    res.status(200).json({ data });
  });
//Delete Handler
exports.delete = (Model) =>
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = await Model.findByIdAndDelete(id);
    if (!data) {
      res.status(404).json({ msg: `No ${Model} with the ID ${id}` });
    }
    res.status(200).json({ data, msg: `${Model} has been deleted` });
  });
