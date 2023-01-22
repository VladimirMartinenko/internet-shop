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
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AuthActionCreators from './redux/actions/authActionCreators';
import CONSTANTS from './constants';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshToken = localStorage.getItem(CONSTANTS.REFRESH_TOKEN)

    if(refreshToken) {
      dispatch(AuthActionCreators.refreshRequest(refreshToken))
    }
  }, []);
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
      </ul>
    </nav>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <PublicOnlyRoute exact path='/login' component={LoginPage} />
      <PublicOnlyRoute exact path='/registration' component={RegistrationPage} />
      <PublicOnlyRoute exact path='/shop' component={ShopPage} />
      <PublicOnlyRoute exact path='/product/:id' component={ProductPage} />
      <PublicOnlyRoute exact path='/basket' component={BasketPage} />
      <PrivateRoute exact path='/admin' component={AdminPage} />
    </Switch>
  </Router>
  );
}

export default App;
