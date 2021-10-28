const httpStatus = require('http-status')

const ApiError = require('../../utils/api-error')
const { Product } = require('../models')

/**
 * Create a product
 *@param {string} id
 * @param {Object} productBody
 * @returns {Promise<Product>}
 */


const createProduct = async (productBody) => {
    if (await Product.isCodeTaken(productBody.productCode)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Product already taken')
    }
    return Product.create(productBody)
}
const listProduct = async () => {
    const listproduct = await Product.find().limit(5);
    if (listproduct==0) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No Product')
    }
    return listproduct
}
const searchProduct = async (key) => {
    const listproduct = await Product.find({$text: {$search: key}});
    if (listproduct==0) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No Product')
    }
    return listproduct
}
const updateProduct = async (id,productBody) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No Product existed')
    }
    return product.update(productBody)
}
const deleteProduct = async (id,productBody) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No Product deleted')
    }
    return product.remove(productBody)
}



module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    listProduct,
    searchProduct
}
