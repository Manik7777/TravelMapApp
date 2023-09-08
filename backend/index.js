import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import pinRouter from "./routes/pins.js";
import userRouter from "./routes/users.js"

async function manik(){

const app = express();
app.use(express.json());
dotenv.config();
await mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser : true,useUnifiedTopology: true,});
app.use("/manik",pinRouter);
app.use("/manik",userRouter);
app.listen(7777);

}
manik();