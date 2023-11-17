import mongoose from "mongoose";

// Schema for Product Model
export const productSchema = new mongoose.Schema({
        name: String,
        qty: Number,
        // price : Number,
        // description : String,
}, {
        versionKey: false
})