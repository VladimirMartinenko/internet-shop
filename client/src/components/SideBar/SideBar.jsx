import React from 'react';
import cx from "classnames";
import classes from './SideBar.module.scss';
// import Category from '../category/Category';
import Section from '../Section/Section';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <nav>
      <ul className={cx(classes.nav)}>
        <li className={cx(classes.list)}>
          <Link to='/'className={cx(classes.link)}>Домашняя</Link>
          
        </li>
        {/* <li  className={cx([classes.list,classes.listCat])}> */}
          {/* <ul className={cx(classes.nav2)}> */}
            <Section/>
          {/* </ul> */}
        {/* </li> */}
        <li className={cx(classes.list)}>
          <Link className={cx(classes.link)}>О компании</Link>
        </li>
        <li className={cx(classes.list)}>
          <Link  className={cx(classes.link)}>Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
