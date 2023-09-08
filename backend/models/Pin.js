import mongoose from "mongoose";

const PinSchema= new mongoose.Schema({
    userName: {
    type: String,
    require: true,
    min: 3,
    max: 20,
    unique: true,
    },
    title: {
    type: String,
    require: true,
    min: 5,
    max: 50,
    unique: true,
    },
    description: {
    type: String,
    require: true,
    min : 3,
    max: 50,
    },
    rating: {
    type: Number,
    require: true,
    min: 0,
    max : 5,
    },
    latitude : {
    type: Number,
    require: true,
    },
    longitude : {
    type: Number,
    require: true,
    },
},
{timestamps : true});

export default mongoose.model("Pin",PinSchema);
