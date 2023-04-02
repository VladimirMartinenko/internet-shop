import { combineReducers } from 'redux';
import authReducer from './authReducer';
import basketReducer from './basketReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  products: productsReducer,
  product: productReducer,
  basket:basketReducer
});

export default rootReducer;