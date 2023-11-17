import { Router } from "express";
import ProductController from "../controllers/product.controllers.js";

const router = Router();
const controller = new ProductController()


// Getting All Products 
router.get('/', (req, res) => controller.getProducts(req, res))
// Creating New Product 
router.post('/create', (req, res) => controller.createProduct(req, res))
// Deleting Product
router.delete('/:id', (req, res) => controller.deleteProduct(req, res))
// Updating Product 
router.post('/:id/update_quantity', (req, res) => controller.updateProduct(req, res))
export default router