﻿# ecommerce-api

Hosted URL : GET PRODUCTS : https://ecommerce-api-u47p.onrender.com/products
### setup local system
1. Clone the repository:
 
   ```bash
      https://github.com/PullaTharunkumar/ecommerce-api.git
   ```
2. Install dependencies:
 
   ```bash
      cd issue-tracker
      npm install
   ```
3. Run the application:

    ```bash
    node index.js
    ```
4. Open postman
     - GET ALL PRODUCTS :
         - http://localhost:8080/products/
   - CREATE A NEW PRODUCT :
       - http://localhost:8080/products/create
   - UPDATE THE QUANTITY OF A PRODUCT
       - http://localhost:8080/products/[ID]/update_quantity?number=[QTY]
       - Replace [ID] which you want to update product that Product id
       - Replace [QTY] by which you want to increase or decrease the quantity
   - DELETE A PRODUCT:
       - http://localhost:8080/products/[ID]
       - Replace [ID] which you want to delete product that Product id
