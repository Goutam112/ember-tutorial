import express from 'express';
import ProductController from '../controller/product';
import mongoose from 'mongoose';

const router = express.Router();

router.route('/').get(checkValidObjectIdParam('id'), async (req, res) => {
  try {
    await ProductController.getProducts(req, res);
  } catch (err) {
    res.json({
      message: `PRODUCT CONTROLLER <Get all product error>: ${err}`,
    });
  }
});

router.route('/item/:id').get(async (req, res) => {
  try {
    await ProductController.getProductById(req, res);
  } catch (err) {
    res.json({
      message: `PRODUCT CONTROLLER <Get product by id error>: ${err}`,
    });
  }
});

const checkValidObjectIdParam = (paramName) => {
  return (req, res, next) => {
    // Assign null if paramName is not present in req.params
    const objectId = req.params[paramName] || null;

    if (!mongoose.Types.ObjectId.isValid(objectId)) {
      // Return an error if objectId is null or not a valid ObjectId
      return res.status(400).json({
        message: `Invalid or missing ObjectId for parameter '${paramName}'`,
      });
    }

    next();
  };
};
