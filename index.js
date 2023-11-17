import express from "express";
import { connectToMongooseDB } from "./config/mongoose.js";
import router from "./src/product/routes/product.routes.js";

const server = express()
server.use(express.json())
// Product Routers
server.use('/products', router)
//Server running Port 
server.listen(8080, () => {
    console.log('Server running on port 8080');
    connectToMongooseDB()
})