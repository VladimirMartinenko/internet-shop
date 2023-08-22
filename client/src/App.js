import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import PublicOnlyRoute from './components/Routes/PublicOnlyRoute';
import PrivateRoute from './components/Routes/PrivateRoute'
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPage from './pages/AdminPage/AdminPage';
import ShopPage from './pages/ShopPage/ShopPage';
import BasketPage from './pages/BasketPage/BasketPage';
import ProductPage from './pages/ProductPage/ProductPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AuthActionCreators from './redux/actions/authActionCreators';
import {basketSum} from './redux/actions/basketActionCreators';
import CONSTANTS from './constants';
import { buyerCreateRequest } from './redux/actions/buyerActionCreators';
import { sliderGetRequest } from './redux/actions/sliderActionCreators';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SectionPage from './pages/SectionPage/SectionPage';
import SliderPage from './pages/SliderPage/SliderPage';
import ProductAdminPage from './pages/ProductAdminPage/ProductAdminPage';
import AdminOrderPage from './pages/AdminOrderPage/AdminOrderPage';

function App() {
  useEffect(() => {
    document.title = "Medimplant";
  }, []);
  
  useEffect(() => {
    const refreshToken = localStorage.getItem(CONSTANTS.REFRESH_TOKEN)

    if(refreshToken) {
      dispatch(AuthActionCreators.refreshRequest(refreshToken))
    }
  }, []);
 
  const { items } = useSelector(state => state.basket);
  useEffect(() => {
    window.localStorage.setItem('basket', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
   dispatch(basketSum())
  }, [items]);

  useEffect(() => {
   dispatch(sliderGetRequest())
  }, []);
  const dispatch = useDispatch();
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <PublicOnlyRoute exact path='/login' component={LoginPage} />
      <PublicOnlyRoute exact path='/registration' component={RegistrationPage} />
      <Route exact path='/basket' component={BasketPage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/product/:id' component={ProductPage} />
      <PrivateRoute exact path='/admin' component={AdminPage} />
      <PrivateRoute exact path='/admin/category' component={CategoryPage} />
      <PrivateRoute exact path='/admin/section' component={SectionPage} />
      <PrivateRoute exact path='/admin/slider' component={SliderPage} />
      <PrivateRoute exact path='/admin/product' component={ProductAdminPage} />
      <PrivateRoute exact path='/admin/order' component={AdminOrderPage} />
    </Switch>
  </Router>
  );
}

export default App;
