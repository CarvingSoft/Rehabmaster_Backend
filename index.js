const express = require('express');
const app = express();  
const cors = require('cors');
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 9000;
const connectDB = require('./config/db');
const userRouter = require ('./Routes/userRouter')
app.use('/api/users',userRouter)
const mongoose = require('mongoose');

connectDB();
async function startServer() {
    try {
      app.listen(PORT, () => {
        console.log(`Server running successfully on port ${PORT}`);
      });
    } catch (error) {
      console.error('Failed to start the server:', error.message);
      process.exit(1);
    }
  }
  
  // Handle unexpected errors
  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
  });
  
  
  // Start the server
  startServer();