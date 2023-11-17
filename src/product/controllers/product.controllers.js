import ProductModel from "../models/product.model.js";

export default class ProductController {
    constructor() {
        this.productModel = new ProductModel()
    }
    // creating New Product
    async createProduct(req, res) {
        try {
            const { name, qty } = req.body
            const product = await this.productModel.addProduct({ name, qty })
            return res.status(201).send({product, message :'New Product Added Successfully'})
        } catch (err) {
            console.log('Error in createProduct function', err);
        }
    }
    // Getting All Products
    async getProducts(req, res) {
        try {
            const pro = await this.productModel.getProducts()
            return res.status(200).send(pro)
        } catch (err) {
            console.log('Error in getProducts function', err);
        }
    }
    // Updating Product Qty
    async updateProduct(req, res) {
        try {
            const { id } = req.params
            const newQty = req.query.number
            const result = await this.productModel.updateProduct(id, newQty)
            return res.status(200).send(result)
        } catch (err) {
            console.log('Error in updateProduct function', err);
        }
    }
    // Deleting Product
    async deleteProduct(req, res) {
        try {
            const message = await this.productModel.deleteProduct(req.params.id)
            return res.send({ message })
        } catch (err) {
            console.log('Error in deleteProduct function', err);
        }
    }
}