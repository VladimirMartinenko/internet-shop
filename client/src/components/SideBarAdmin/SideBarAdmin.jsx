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
          <Link className={cx(classes.link)}>Секції</Link>
        </li>
        <li className={cx(classes.list)}>
          <Link to='/admin/category' className={cx(classes.link)}>Категорії</Link>
        </li>
        <li className={cx(classes.list)}>
          <Link  className={cx(classes.link)}>Товари</Link>
        </li>
        <li className={cx(classes.list)}>
          <Link  className={cx(classes.link)}>Слайдер</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBarAdmin;
