import React from 'react'
import classes from './SideBar.module.scss'
import Section from '../Section/Section'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <nav>
      <ul className={classes.nav}>
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
      </ul>
    </nav>
  )
}

export default SideBar
