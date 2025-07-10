import express from 'express';
import dotenv from 'dotenv';
import connectDB from './configs/database.js';
dotenv.config();
const app = express();
app.use(express.json());



app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
connectDB();