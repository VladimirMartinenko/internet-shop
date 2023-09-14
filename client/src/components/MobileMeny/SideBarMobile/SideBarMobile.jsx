import React from 'react'
import classes from './SideBarMobile.module.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import SectionMobile from '../SectionMobile/SectionMobile'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import { mobileMenu } from '../../../redux/actions/moboleAction'

const SideBarMobile = () => {
  const dispatch = useDispatch()
  const { menu, level } = useSelector(state => state.mobile)
  console.log(menu)
  const menuStyles = cx({
    [classes.menu]: menu === false || level === 1,
    [classes.menuActive]: menu === true && level === 0
  })
  return (
    <aside className={menuStyles} onClick={() => dispatch(mobileMenu())}>
      <div className={classes.blur} />
      <nav className={classes.content} onClick={e => e.stopPropagation()}>
        <ul className={classes.nav}>
          <li className={classes.list}>
            <Link
              to='/'
              className={classes.link}
              onClick={() => dispatch(mobileMenu())}
            >
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
      </nav>
    </aside>
  )
}

export default SideBarMobile
