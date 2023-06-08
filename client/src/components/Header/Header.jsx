import { useSelector, connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import AuthActionCreators from '../../redux/actions/authActionCreators'
import style from './Header.module.scss'

const Header = () => {
  const { user } = useSelector(state => state.auth)
  const { count } = useSelector(state => state.basket)
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(AuthActionCreators.clearUserStore())
    localStorage.clear()
  }

  const controlButtons = (
    <div>
      {user ? (
        <button
          className={style.btn}
          onClick={() => {
            logOut()
          }}
        >
          Вийти
        </button>
      ) : (
        <>
          <Link className={style.btn} to='/registration'>
            Регистрация
          </Link>
          <Link className={style.btn} to='/login'>
            Вход
          </Link>
        </>
      )}
    </div>
  )
  const controlAdmin = (
    <div>
      {user && user.role === 'admin' ? (
        <Link className={style.btn} to='/admin'>
          АдминПанель
        </Link>
      ) : (
        <></>
      )}
    </div>
  )
  return (
    <header className={style.header}>
      <Link className={style.textPosition} to='/'>
        <p className={style.text}>МЕДИМПЛАНТ</p>
      </Link>
      <div className={style.btnPosition}>
        <div>{controlButtons}</div>
        <div>{controlAdmin}</div>
        <Link className={style.position} to='/basket'>
          <img src='/staticImages/basket_12.svg' alt='' />
          <div className={style.numberPosition}>{count}</div>
        </Link>
      </div>
    </header>
  )
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Header)
