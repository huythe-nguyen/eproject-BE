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

    return Product.create(productBody)
}
const updateProduct = async (id,productBody) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No Product existed')
    }
    return product.update(productBody)
}



module.exports = {
    createProduct,
    updateProduct
}
