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
            Домашняя
          </Link>
        </li>
        <Section />
        <li className={classes.list}>
          <Link className={classes.link}>О компании</Link>
        </li>
        <li className={classes.list}>
          <Link className={classes.link}>Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideBar
