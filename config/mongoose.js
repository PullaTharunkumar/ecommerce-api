import mongoose from "mongoose";

const url = 'mongodb+srv://Tharunkumar:Tharun@cluster0.ik37pmo.mongodb.net/?retryWrites=true&w=majority'
export const connectToMongooseDB = async () =>{
    await mongoose.connect(url).then((d)=>console.log('Mongoose connect'))
} 