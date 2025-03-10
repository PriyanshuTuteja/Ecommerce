const Product = require('../Models/productModel')



// Create new product --Admin
exports.createProduct=async (req,res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}


// Get all products
exports.getALLProducts =async(req,res)    => {
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
}   