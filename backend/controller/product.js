import { Product } from '../model/product';

export default class ProductController {
  getProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json({ products });
    } catch (err) {
      console.error('Error fetching all products', err);
      res.status(500).json({ message: 'Error fetching all products' });
    }
  };

  getProductById = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ product });
    } catch (err) {
      console.error('Error fetching product by ID', err);
      res.status(500).json({ message: 'Error fetching product by ID' });
    }
  };
}
