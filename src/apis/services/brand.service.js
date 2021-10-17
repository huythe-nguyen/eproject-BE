const httpStatus = require('http-status')

const ApiError = require('../../utils/api-error')
const { Brand } = require('../models')

/**
 * Create a brand
 * *@param {string} id
 * @param {Object} brandBody
 * @returns {Promise<Brand>}
 */
const createBrand = async (brandBody) => {
    return Brand.create(brandBody)
}
const updateBrand = async (id,productBody) => {
    const brand = await Brand.findById(id);
    if (!brand) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No brand existed')
    }
    return brand.update(productBody)
}


module.exports = {
    createBrand,
    updateBrand

}
