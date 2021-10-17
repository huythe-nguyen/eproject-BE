const express = require('express')
const { authController, productController } = require('../../controllers')
const { authValidation, productValidation } = require('../../validations')

const validate = require('../../../middlewares/validate')

const router = express.Router()

router.post('/add', validate(productValidation.productSchema), productController.addProduct)
router.get('/', productController.listProduct)
router.get('/:id', productController.viewProduct)
router.put('/:id', productController.exitProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router
