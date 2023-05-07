const sectionRouter = require('express').Router();
const sectionController = require('../controllers/section.controller')

sectionRouter.post('/',sectionController.createSection);
sectionRouter.get('/',sectionController.findAllSection);
sectionRouter.delete('/:id',sectionController.deleteSection);
sectionRouter.put('/:id',sectionController.updateSection);

module.exports = sectionRouter;