import { useSelector, connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AuthActionCreators from "../../redux/actions/authActionCreators";
import style from "./Header.module.scss";
import Burger from "../MobileMeny/Burger/Burger";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { count } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(AuthActionCreators.clearUserStore());
    localStorage.clear();
  };

  const controlButtons = (
    <div>
      {user ? (
        <button
          className={style.btn2}
          onClick={() => {
            logOut();
          }}
        >
          Вийти
        </button>
      ) : (
        <>
          {/* <Link className={style.btn} to="/registration">
            Реєстрація
          </Link> */}
          <Link className={style.btn} to="/login">
            Вхід
          </Link>
        </>
      )}
    </div>
  );
  const controlAdmin = (
    <>
      {user && user.role === "admin" ? (
        <Link className={style.btn2} to="/admin">
          АдмінПанель
        </Link>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <header>
      <p className={style.h1}>Якісні медичні товари та послуги !</p>
      <section className={style.header}>
        <Burger className={style.burger} />
        <Link className={style.textPosition} to="/">
          <p className={style.text}>МЕДІМПЛАНТ</p>
        </Link>
        <nav className={style.btnPosition}>
          <div className={style.btnPosition2}>
          <div>{controlButtons}</div>
          <div>{controlAdmin}</div>
          </div>
          <Link className={style.position} to="/basket">
            <img
              src="/staticImages/basket_12.svg"
              alt=""
              className={style.img}
            />
            <div className={style.numberPosition}>{count}</div>
          </Link>
        </nav>
      </section>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Header);
