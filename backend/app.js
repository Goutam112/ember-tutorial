import express from 'express';
import { connectDB } from './db';
import { productRoutes } from './routes/product';

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
