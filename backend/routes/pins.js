import express  from "express";
import Pin from '../models/Pin.js'


const pinRouter = express.Router();

pinRouter.post("/create/pin",async (req,res)=>{
    const newPin = new Pin(req.body);
    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    }catch(e){
        res.status(500).json({message : 'Oops, Something went wrong !' })
    }
})
pinRouter.get("/all/pins",async (req,res)=>{
    try{
        const allPins = await Pin.find();
        res.status(200).json(allPins);
    }catch(e){
        res.status(500).json({message : 'Oops, Something went wrong !' })
    }
})

export default pinRouter;