const categoryRouter = require('express').Router();
const categoryController = require('../controllers/category.controller')

categoryRouter.post('/',categoryController.createCategory);
categoryRouter.get('/all',categoryController.findAllCategory);
categoryRouter.get('/',categoryController.findCategoryBySection);
categoryRouter.delete('/:id',categoryController.deleteCategory);
categoryRouter.put('/:id',categoryController.updateCategory);

module.exports = categoryRouter;