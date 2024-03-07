import express from 'express';
// eslint-disable-next-line no-undef
import { connectDB } from './db';
import { routes } from './routes/product';

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

app.listen(PORT);
