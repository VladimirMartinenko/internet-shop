const sectionRouter = require('express').Router();
const categoryController = require('../controllers/category.controller')

sectionRouter.post('/',categoryController.createCategory);
sectionRouter.get('/',categoryController.findAllCategory);
sectionRouter.delete('/:id',categoryController.deleteCategory);
sectionRouter.put('/:id',categoryController.updateCategory);

module.exports = sectionRouter;