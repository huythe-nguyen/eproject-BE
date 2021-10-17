const httpStatus = require('http-status')
const catchAsync = require('../../utils/catch-async')
const { productService } = require('../services')
const { Product } = require('../models')
const { string } = require('joi')

const addProduct = catchAsync(async (req, res, next) => {
    const product = await productService.createProduct(req.body)
    res.status(httpStatus.CREATED).json({
        success: true,
        product: product
    });
})
const listProduct = catchAsync(async (req, res, next) => {
    const productList = await Product.find()

        if(productList.length==0){
            return res.status(500).json({
                success: false,
                message: 'No employee existed'
            });
        }
        res.json({
            success: true,
            products: productList
        });
})
const viewProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findById(req.params.id)

        if(!product){
            return res.status(500).json({
                success: false,
                message: 'No product existed'
            });
        }
        res.json({
            success: true,
            product: product
        });
})
const exitProduct = catchAsync(async (req, res, next) => {
    const id = req.params.id
    const product = await  productService.updateProduct(id,req.body)
    res.status(httpStatus.OK).json({
        success: true,
        product: product
    });
})
const deleteProduct = catchAsync(async (req, res, next) => {
    Product.findByIdAndRemove(req.params.id).then(product=>{
        if(product){
            return res.status(200).json({
                success: true,
                message: 'The product is deleted!'
            });
        }else{
            return res.status(404).json({
                success: false,
                message: 'product not Found'
            });
        }
    }).catch(error=>{
        return res.status(500).json({
            success: false,
            error: error
        });
    })
})
module.exports = {
    addProduct,
    listProduct,
    viewProduct,
    exitProduct,
    deleteProduct
}
