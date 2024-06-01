import { Router } from "express";
import productController from "../controllers/productController";

const router = Router();

// 注意修改路由顺序

router.get(
  "/productspages",
  /* 	#swagger.tags = ['Product']
      #swagger.description = '分頁顯示Products'
      #swagger.responses[200] = { 
      schema: [
            {
                  "id": 18,
                  "name": "Product 2",
                  "description": "Description for Product 2",
                  "price": 20.99
            }
      ]} 
   */
  productController.getAllProductsPages
);
router.get(
  "/getallproductcompany",

  productController.getAllProductCompany
);
router.get(
  "/:id",
  /* 	#swagger.tags = ['Product']
        #swagger.description = '取得指定Product' */
  productController.getProductById
);


router.get(
  "/",
  /* 	#swagger.tags = ['Product']
      #swagger.description = '取得所有Product'
      #swagger.responses[200] = { 
      schema: [
      {
            "id": 18,
            "name": "Product 2",
            "description": "Description for Product 2",
            "price": 20.99
      }
      ]} 
  */
  productController.getAllProducts
);

router.post(
  "/",
  /* 	#swagger.tags = ['Product']
      #swagger.description = '新增Product'
      #swagger.auto = true 
      #swagger.parameters['body'] = {
          in: 'body',
          description: 'Some description...',
          required: true,
          schema: {
              $name: 'John Doe',
              $description: 'Description for Product 2',
              $price: 10
          }
      }
      #swagger.responses[200] = { 
      schema: 
      {
          "id": 18,
          "name": "Product 2",
          "description": "Description for Product 2",
          "price": 20.99
      }
      ,
      description: "User registered successfully." } 
      */
  productController.createProduct
);
router.put(
  "/:id",
  /* 	#swagger.tags = ['Product']
        #swagger.description = '更新指定Product' */
  productController.updateProduct
);
router.delete(
  "/:id",
  /* 	#swagger.tags = ['Product']
        #swagger.description = '刪除指定Product' */
  productController.deleteProduct
);

export default router;
