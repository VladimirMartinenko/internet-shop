import { combineReducers } from 'redux';
import authReducer from './authReducer';
import basketReducer from './basketReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import productsReducer from './productsReducer';
import buyerReducer from './buyerReducer';
import buyersReducer from './buyersReducer';
import sectionReducer from './sectionReducer';
import carouselReducer from './carouselReducer';
import sliderReducer from './sliderReducer';
import mobileReducer from './mobileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  products: productsReducer,
  product: productReducer,
  basket:basketReducer,
  buyer:buyerReducer,
  buyers:buyersReducer,
  section:sectionReducer,
  carousel:carouselReducer,
  slider:sliderReducer,
  mobile:mobileReducer
});

export default rootReducer;