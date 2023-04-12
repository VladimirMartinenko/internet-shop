import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import PublicOnlyRoute from './components/Routes/PublicOnlyRoute';
import PrivateRoute from './components/Routes/PrivateRoute'
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ShopPage from './pages/ShopPage';
import BasketPage from './pages/BasketPage';
import ProductPage from './pages/ProductPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AuthActionCreators from './redux/actions/authActionCreators';
import {basketSumRequest} from './redux/actions/basketActionCreators';
import CONSTANTS from './constants';
import { buyerCreateRequest } from './redux/actions/buyerActionCreators';
import Admin from './pages/Admin';

function App() {
  // const { user } = useSelector(state => state.auth);
  useEffect(() => {
    const refreshToken = localStorage.getItem(CONSTANTS.REFRESH_TOKEN)

    if(refreshToken) {
      dispatch(AuthActionCreators.refreshRequest(refreshToken))
    }
  }, []);
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.basket);
  useEffect(() => {
    window.localStorage.setItem('basket', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
   dispatch(basketSumRequest())
  }, [items]);
  
  // const { user } = useSelector(state => state.auth);
  // console.log(user);
  // useEffect(() => {
  //   dispatch(buyerCreateRequest(user));

  // }, []);
 
  return (
    <Router>
    <nav>
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
    </nav>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <PublicOnlyRoute exact path='/login' component={LoginPage} />
      <PublicOnlyRoute exact path='/registration' component={RegistrationPage} />
      <PublicOnlyRoute exact path='/basket' component={BasketPage} />
      <PublicOnlyRoute exact path='/shop' component={ShopPage} />
      <PublicOnlyRoute exact path='/orders' component={Admin} />
      <PublicOnlyRoute exact path='/product/:id' component={ProductPage} />
      <PrivateRoute exact path='/admin' component={AdminPage} />
    </Switch>
  </Router>
  );
}

export default App;
