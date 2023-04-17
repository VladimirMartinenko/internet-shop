const sliderRouter = require('express').Router();
const categoryController = require('../controllers/category.controller')

sliderRouter.post('/',categoryController.createCategory);
sliderRouter.get('/',categoryController.findAllCategory);
sliderRouter.delete('/:id',categoryController.deleteCategory);
sliderRouter.put('/:id',categoryController.updateCategory);

module.exports = sliderRouter;