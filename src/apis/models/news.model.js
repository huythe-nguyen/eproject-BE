const { number, date } = require('joi')
const mongoose = require('mongoose')
const validator = require('validator')

const { toJSON, paginate } = require('./plugins')

const newSchema = mongoose.Schema(
    {
        codeTitle: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        starDay: {
            type: Date,
            required: true,
            trim: true
        },
        endDay: {
            type: Date,
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

newSchema.plugin(toJSON)
newSchema.plugin(paginate)


/**
 * @typedef New
 */
const New = mongoose.model('New', newSchema)

module.exports = New
