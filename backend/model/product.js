import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  productName: { type: String, required: true },
  category: { type: String, required: true },
  colors: [{ color: String, image: String }],
  price: { original: Number, current: Number },
  rating: { type: Number, required: true, min: 1, max: 5 },
  description: { type: String, required: true },
  features: [String],
});

const ProductModel = model('product', ProductSchema);
export default ProductModel;
