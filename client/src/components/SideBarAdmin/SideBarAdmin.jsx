import React from 'react'
import classes from './SideBarAdmin.module.scss'
import { Link } from 'react-router-dom'

const SideBarAdmin = () => {
  return (
    <nav>
      <ul className={classes.nav}>
        <li className={classes.list}>
          <Link to='/' className={classes.link}>
            Home
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/section' className={classes.link}>
            Sections
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/category' className={classes.link}>
            Categories
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/product' className={classes.link}>
            Products
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/slider' className={classes.link}>
            Slider
          </Link>
        </li>
        <li className={classes.list}>
          <Link to='/admin/order' className={classes.link}>
            Orders
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideBarAdmin
