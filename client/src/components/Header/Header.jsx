import { useSelector,connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthActionCreators from '../../redux/actions/authActionCreators';
import cx from "classnames";
import classes from './Header.module.scss';

const Header = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  

  const logOut = () => {
    
   dispatch( AuthActionCreators.clearUserStore());
   localStorage.clear();
    };

  const controlButtons = (
    <div className={cx(classes.btn)} >
      {user ? (
        <button onClick={()=>{logOut()}}>Logout</button>
      ) : (
        <>
          <Link to="/registration">Регистрация</Link>
          <Link to="/login">Вход</Link>
        </>
      )}
    </div>
  );
  return (
    <header className={cx(classes.header)}>
    <Link to="/">
      <h1>МЕДИМПЛАНТ</h1>
    </Link>
    <h2>
      Приветствуемо {user ? `${user.firstName} ${user.lastName}` : 'гость'}
    </h2>
    <div>{controlButtons}</div>
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
   
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Header);
