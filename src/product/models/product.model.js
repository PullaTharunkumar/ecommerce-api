import mongoose from "mongoose";
import { productSchema } from "./schemas/product.schema.js";

//creating Models from Schema
const productModel = mongoose.model('Product', productSchema)

export default class ProductModel {
    // Creating a new Product
    async addProduct(product) {
        try {
            // Creating Instance of Model
            const newProduct = new productModel(product)
            const result = await newProduct.save();
            return result
        } catch (err) {
            console.log('Error while creating product in the addProduct function', err);
        }
    }
    // updating Product QTY
    async updateProduct(id, newQty) {
        try {
            let product = await productModel.findById(id)
            if (product) {
                newQty = product.qty + parseInt(newQty)
                //checking if we update it newQty will be negative, don't update it 
                if (newQty < 0) {
                    return 'If we update this it will be negative qty'
                }
                product.qty = newQty
                product.save()
                return { product, message: 'updated successfully' }
            }
            return 'There is no such Produt Id'
        } catch (err) {
            console.log('Error while updating product in MongoDB in the updateProduct function', err);
        }
    }
    //Deleting Product
    async deleteProduct(id) {
        try {
            await productModel.deleteOne({ _id: id })
            return 'Product deleted'
        } catch (err) {
            console.log('Error while deleting product in MongoDB in the deleteProduct function', err);
        }
    }
    // Getting all Products
    async getProducts() {
        try {
            const result = await productModel.find()
            return result
        } catch (err) {
            console.log('Error while fetching products from MongoDB int the getProducts function', err);
        }
    }
}