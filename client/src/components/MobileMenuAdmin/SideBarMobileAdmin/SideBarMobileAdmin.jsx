import React from 'react';
import classes from './SideBarMobileAdmin.module.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames'
import { mobileMenu } from '../../../redux/actions/moboleAction';

const SideBarMobileAdmin = () => {
  const dispatch = useDispatch()
  const { menu,level } = useSelector(state => state.mobile);
  console.log(menu);
  const menuStyles = cx( {
    [classes.menu]: menu===false || level===1,
    [classes.menuActive]: menu===true && level===0
  })
  return (
    <main className={menuStyles} onClick={()=>dispatch(mobileMenu())}>
      <div className={classes.blur}/>
      <nav className={classes.content} onClick={e => e.stopPropagation()}>
      <ul className={classes.nav}>
        <li className={classes.list}>
          <Link to='/' className={classes.link}  onClick={()=>dispatch(mobileMenu())}>
            Домашня
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/section' className={classes.link} onClick={()=>dispatch(mobileMenu())}>
            Розділи
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/category' className={classes.link} onClick={()=>dispatch(mobileMenu())}>
            Підрозділи
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/product' className={classes.link} onClick={()=>dispatch(mobileMenu())}>
            Товари
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/slider' className={classes.link} onClick={()=>dispatch(mobileMenu())}>
            Слайдер
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/order' className={classes.link} onClick={()=>dispatch(mobileMenu())}>
            Замовлення
          </Link>
        </li>
      </ul>
      </nav>
      
    </main>
  );
}

export default SideBarMobileAdmin;
