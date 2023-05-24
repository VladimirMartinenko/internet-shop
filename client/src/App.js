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
import {basketSumRequest} from './redux/actions/basketActionCreators';
import CONSTANTS from './constants';
import { buyerCreateRequest } from './redux/actions/buyerActionCreators';
import { sliderGetRequest } from './redux/actions/sliderActionCreators';
import Admin from './pages/Admin';
import CategoryPage from './pages/CategoryPage/CategoryPage';

function App() {
  // const { user } = useSelector(state => state.auth);
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
   dispatch(basketSumRequest())
  }, [items]);

  useEffect(() => {
   dispatch(sliderGetRequest())
  }, []);
  const dispatch = useDispatch();
  // const { user } = useSelector(state => state.auth);
  // console.log(user);
  // useEffect(() => {
  //   dispatch(buyerCreateRequest(user));

  // }, []);
 
  return (
    <Router>
    {/* <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/registration'>Registration</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
        <li>
          <Link to='/basket'>Basket</Link>
        </li>
        <li>
          <Link to='/orders'>orders</Link>
        </li>
      </ul>
    </nav> */}
    <Switch>
      <Route exact path='/' component={HomePage} />
      <PublicOnlyRoute exact path='/login' component={LoginPage} />
      <PublicOnlyRoute exact path='/registration' component={RegistrationPage} />
      <PublicOnlyRoute exact path='/basket' component={BasketPage} />
      <PublicOnlyRoute exact path='/shop' component={ShopPage} />
      <PublicOnlyRoute exact path='/orders' component={Admin} />
      <PublicOnlyRoute exact path='/product/:id' component={ProductPage} />
      <PublicOnlyRoute exact path='/admin' component={AdminPage} />
      <PublicOnlyRoute exact path='/admin/category' component={CategoryPage} />
    </Switch>
  </Router>
  );
}

export default App;
