import React, { useState } from 'react'
import classes from './SideBar.module.scss'
import Section from '../Section/Section'
import { Link } from 'react-router-dom'
import cx from 'classnames'

const SideBar = () => {

  const[active,setActive]=useState(false);
  console.log(active);

  const mainStyles = cx({
    [classes.main]: active===false,
    [classes.mainActive]: active===true,
  })
  const navStyles = cx({
    [classes.nav]: active===false,
    [classes.navActive]: active===true,
  })
  const buttonStyles = cx({
    [classes.button]: active===false,
    [classes.buttonActive]: active===true,
  })
  return (
    <nav className={mainStyles}>
      <ul className={navStyles}>
        <li className={classes.list}>
          <Link to='/' className={classes.link}>
            Домашня
          </Link>
        </li>
        <Section />
        <li className={classes.list}>
          <Link className={classes.link}>Про компанію</Link>
        </li>
        <li className={classes.list}>
          <Link className={classes.link}>Контакти</Link>
        </li>
        <button onClick={()=>setActive(!active)} className={buttonStyles}></button>
      </ul>
     
    </nav>
  )
}

export default SideBar
