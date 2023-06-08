import React from 'react'
import classes from './SideBarAdmin.module.scss'
import { Link } from 'react-router-dom'

const SideBarAdmin = () => {
  return (
    <nav>
      <ul className={classes.nav}>
        <li className={classes.list}>
          <Link to='/' className={classes.link}>
            Домашня
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/section' className={classes.link}>
            Розділи
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/category' className={classes.link}>
            Підрозділи
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/product' className={classes.link}>
            Товари
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/slider' className={classes.link}>
            Слайдер
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/order' className={classes.link}>
            Замовлення
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideBarAdmin
