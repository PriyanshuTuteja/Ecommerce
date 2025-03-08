const express = require('express');
const { getALLProducts,createProduct} = require('../Controllers/productControllers');
const router = express.Router();

router.route('/products').get(getALLProducts)
router.route('/product/new').post(createProduct)

module.exports=router;