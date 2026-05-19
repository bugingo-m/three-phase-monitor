import 'express-async-errors'
import morgan from 'morgan';
import mongoose from 'mongoose';
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import path,{dirname} from 'path'
import { fileURLToPath } from 'url'
import * as dotenv from 'dotenv';
dotenv.config();
import cloudinary from 'cloudinary'
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})


import express from 'express'
const app = express();
import cookieParser from 'cookie-parser';
app.use(cookieParser());

//dirname
const __dirname = dirname(fileURLToPath(import.meta.url))
//authRouter
import authRouter from './routes/authRouter.js'
//userRouter
import userRouter from './routes/userRouter.js'
//auth Middleware
import { authMiddleware } from './middleware/authMiddleware.js';
import { errorHandlerMiddleware } from './middleware/errorMiddleware.js';
//for static assets
app.use(express.static(path.resolve(__dirname,'./public')))
//json
app.use(express.json());
//morgan
app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.send('Hello World');
});

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  //auth routes
app.use('/api/v1/auth',authRouter)
//user routes
app.use('/api/v1/user',authMiddleware,userRouter)
  
  app.use('*',(req,res)=>{
    res.status(404).send('Resource not found')
})
app.use(errorHandlerMiddleware)
  const port = process.env.PORT || 5100;

  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server running on PORT ${port}....`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  