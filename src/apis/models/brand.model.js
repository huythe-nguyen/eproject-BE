const { number } = require('joi')
const mongoose = require('mongoose')
const validator = require('validator')

const { toJSON, paginate } = require('./plugins')

const brandSchema = mongoose.Schema(
    {
        codeBrand: {
            type: String,
            required: true,
            trim: true,
        },
        nameBrand: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        imgs: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
    }
)

brandSchema.plugin(toJSON)
brandSchema.plugin(paginate)


/**
 * @typedef Brand
 */
const Brand = mongoose.model('Brand', brandSchema)

module.exports = Brand
