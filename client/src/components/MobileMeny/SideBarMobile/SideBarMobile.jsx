import React from 'react';
import classes from './SideBarMobile.module.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SectionMobile from '../SectionMobile/SectionMobile'
import { useSelector } from 'react-redux';
import cx from 'classnames'

const SideBarMobile = () => {
  const { menu,level } = useSelector(state => state.mobile);
  console.log(menu);
  const menuStyles = cx( {
    [classes.menu]: menu===false,
    [classes.menuActive]: menu===true && level===0
  })
  return (
    <div className={menuStyles}>
      <div className={classes.blur}/>
      <div className={classes.content}>
      <ul className={classes.nav}>
        <li className={classes.list}>
          <Link to='/' className={classes.link}>
            Домашня
          </Link>
        </li>
        <SectionMobile />
        <li className={classes.list}>
          <Link className={classes.link}>Про компанію</Link>
        </li>
        <li className={classes.list}>
          <Link className={classes.link}>Контакти</Link>
        </li>
      </ul>
      </div>
      
    </div>
  );
}

export default SideBarMobile;
