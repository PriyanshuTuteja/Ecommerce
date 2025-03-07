const express = require('express');
const { getALLProducts } = require('../Controllers/productControllers');
const router = express.Router();

router.route('/products').get(getALLProducts)


module.exports=router;