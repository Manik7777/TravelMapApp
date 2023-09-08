import express  from "express";
import User from '../models/User.js';
import bcrypt from 'bcrypt';


const userRouter = express.Router();

userRouter.post("/register",async (req,res)=>{
    try{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        userName : req.body.userName,
        email : req.body.email,
        password : hashedPassword
    });
    await newUser.save();
    res.status(200).json({message : 'Registered Successfully'});

    }catch(e){
        res.status(500).json({message : 'Oops, Something went wrong !'})
    }
})

userRouter.post("/login",async (req,res)=>{
    try{
        const existingUser = await User.findOne({ userName : req.body.userName});
        if(!existingUser){
            res.status(400).json({message : 'Wrong UserName'});
        }
        const validatePassword = await bcrypt.compare(req.body.password,existingUser.password);
        if(!validatePassword){
            res.status(400).json({message : 'Wrong Password'});
        }
        res.status(200).json({message : `Welcome ${req.body.userName}`});

    }catch(e){
        res.status(500).json({message : 'Oops, Something went wrong !' });
    }
})

export default userRouter;