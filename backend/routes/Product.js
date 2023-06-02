const productController = require('../controllers/ProductController');
const rangeMiddleware = require('../middleWare/rangeMiddleWare');
const router = require('express').Router();


//get all products
router.get("/", productController.getAllProducts);
//get one product
router.get("/:id", productController.getProduct);
//delete product
router.delete("/:id" ,productController.deleteProduct);
//create product
router.post("/", productController.createProduct);

router.delete("/:id" ,productController.deleteProduct);
//list product
router.post("/list", productController.createListProducts);
//update product
router.put("/:id", productController.updateProduct);

module.exports = router;
