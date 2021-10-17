const httpStatus = require('http-status')

const ApiError = require('../../utils/api-error')
const { New } = require('../models')

/**
 * Create a new
 * *@param {string} id
 * @param {Object} newBody
 * @returns {Promise<import('../models/news.model').New>}
 */
const createNew = async (newBody) => {
    return New.create(newBody)
}
const updateNew = async (id,newBody) => {
    const news = await New.findById(id);
    if (!news) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No news existed')
    }
    return news.update(newBody)
}
const deleteNew = async (id) => {
    const news = await New.findById(id);
    if (!news) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No news existed')
    }
    return news.remove(newBody)
}


module.exports = {
    createNew,
    updateNew,
    deleteNew

}
