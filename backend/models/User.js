import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    userName: {
    type: String,
    require: true,
    min: 3,
    max: 20,
    unique: true,
    },
    email: {
    type: String,
    require: true,
    min: 5,
    max: 50,
    unique: true,
    },
    password: {
    type: String,
    require: true,
    min: 50,
    unique: true,
    },
},
{timestamps : true});

export default mongoose.model("User",UserSchema);
