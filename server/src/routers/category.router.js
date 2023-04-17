const categoryRouter = require('express').Router();
const categoryController = require('../controllers/category.controller')

categoryRouter.post('/',categoryController.createCategory);
categoryRouter.get('/',categoryController.findAllCategory);
categoryRouter.delete('/:id',categoryController.deleteCategory);
categoryRouter.put('/:id',categoryController.updateCategory);

module.exports = categoryRouter;