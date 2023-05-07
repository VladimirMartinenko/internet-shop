const sliderRouter = require('express').Router();
const sliderController = require('../controllers/slider.controller')

sliderRouter.post('/',sliderController.createSlider);
sliderRouter.get('/',sliderController.findAllSlider);
sliderRouter.delete('/:id',sliderController.deleteSlider);
sliderRouter.put('/:id',sliderController.updateSlider);

module.exports = sliderRouter;