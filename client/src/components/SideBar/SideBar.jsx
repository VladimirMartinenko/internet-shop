import React from 'react';
import cx from "classnames";
import classes from './SideBar.module.scss';
import Category from '../category/Category';
import Section from '../Section/Section';

const SideBar = () => {
  return (
    <nav>
      <ul className={cx(classes.nav)}>
        <li className={cx(classes.list)}>
          <a href='/'className={cx(classes.link)}>Home</a>
        </li>
        <li  className={cx([classes.list,classes.listCat])}>
          <ul className={cx(classes.nav2)}>
            <Section/>
          </ul>
        </li>
        <li className={cx(classes.list)}>
          <a href="#" className={cx(classes.link)}>About</a>
        </li>
        <li className={cx(classes.list)}>
          <a href="#" className={cx(classes.link)}>contacts</a>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
