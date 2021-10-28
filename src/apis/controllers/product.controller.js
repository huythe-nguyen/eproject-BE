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
    const productList = await productService.listProduct()
    res.status(httpStatus.OK).json({
        success: true,
        product: productList
    });
})
const searchProduct = catchAsync(async (req, res, next) => {
    const key = new RegExp(req.params.key)
    const productList = await productService.searchProduct(key)
    res.status(httpStatus.OK).json({
        success: true,
        product: productList
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
const deleteProduct = catchAsync(async (req, res) => {
    const id = req.params.id
    const product = await  productService.deleteProduct(id)
    res.status(httpStatus.OK).json({
        success: true,
        message: 'Product is delete'
    });
})
module.exports = {
    addProduct,
    listProduct,
    viewProduct,
    exitProduct,
    deleteProduct,
    searchProduct
}
