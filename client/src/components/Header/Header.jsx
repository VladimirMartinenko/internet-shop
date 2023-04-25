import { useSelector,connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthActionCreators from '../../redux/actions/authActionCreators';
import cx from "classnames";
import style from './Header.module.scss';


const Header = () => {
  const { user } = useSelector(state => state.auth);
  const { count } = useSelector(state => state.basket);
  const dispatch = useDispatch();
  

  const logOut = () => {
    
   dispatch( AuthActionCreators.clearUserStore());
   localStorage.clear();
    };

  const controlButtons = (
    <div  >
      {user ? (
        <button className={cx(style.btn)} onClick={()=>{logOut()}}>Logout</button>
      ) : (
        <>
        
          <Link className={cx(style.btn)} to="/registration">Регистрация</Link>
          <Link className={cx(style.btn)} to="/login">Вход</Link>
        </>
      )}
    </div>
  );
  const controlAdmin = (
    <div  >
      {user&&user.role==='admin' ? (
        <Link className={cx(style.btn)} to="/admin">АдминПанель</Link>
      ):(<></>)}
    </div>
  );
  return (
    <header className={cx(style.header)}>
    <Link className={cx(style.textPosition)} to="/">
      <p className={cx(style.text)} >МЕДИМПЛАНТ</p>
    </Link>
    {/* <h2>
      Приветствуемо {user ? `${user.firstName} ${user.lastName}` : 'гость'}
    </h2> */}
    <div className={cx(style.btnPosition)} >
    <div >{controlButtons}</div>
    <div>{controlAdmin}</div>
    {/* <div className={cx(style.position)}> */}
    <Link className={cx(style.position)} to="/basket"  >
    <img  src="/staticImages/basket_12.svg" alt="" />
   <div className={cx(style.numberPosition)}>{count}</div>
   </Link>
    </div>
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
   
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Header);
