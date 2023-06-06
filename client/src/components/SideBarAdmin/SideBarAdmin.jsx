import React from 'react';
import cx from "classnames";
import classes from './SideBarAdmin.module.scss';
import { Link } from 'react-router-dom';

const SideBarAdmin = () => {
  return (
    <nav>
      <ul className={cx(classes.nav)}>
        <li className={cx(classes.list)}>
          <Link to='/'className={cx(classes.link)}>Домашня</Link> 
        </li>
        <li className={cx(classes.list)}>
          <Link to='/admin/section' className={cx(classes.link)}>Розділи</Link>
        </li>
        <li className={cx(classes.list)}>
          <Link to='/admin/category' className={cx(classes.link)}>Підрозділи</Link>
        </li>
        <li className={cx(classes.list)}>
          <Link to='/admin/product'  className={cx(classes.link)}>Товари</Link>
        </li>
        <li className={cx(classes.list)}>
          <Link to='/admin/slider' className={cx(classes.link)}>Слайдер</Link>
        </li>
        <li className={cx(classes.list)}>
          <Link to='/admin/order' className={cx(classes.link)}>Замовлення</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBarAdmin;
