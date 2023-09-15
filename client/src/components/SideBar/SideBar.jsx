import React, { useState } from 'react'
import classes from './SideBar.module.scss'
import Section from '../Section/Section'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const { section } = useSelector(state => state.section)
  console.log(section.length)

  const [active, setActive] = useState(false)
  console.log(active)

  const mainStyles = cx({
    [classes.main]: active === false,
    [classes.mainActive]: active === true
  })
  const navStyles = cx({
    [classes.nav]: active === false,
    [classes.navActive]: active === true
  })
  const buttonStyles = cx({
    [classes.buttonNotActive]: section.length < 7,
    [classes.button]: active === false && section.length >= 7,
    [classes.buttonActive]: active === true
  })
  const buttonStyles2 = cx({
    [classes.button2]: active === false && section.length >= 7,
    [classes.buttonActive2]: active === true
  })
  // const divStyles = cx({
  //   [classes.div]: active===false ,
  //   [classes.div2]: active===true,
  // })
  return (
    <aside className={classes.div}>
      <nav className={mainStyles}>
        <ul className={navStyles}>
          <li className={classes.list}>
            <Link to='/' className={classes.link}>
              Домашня
            </Link>
          </li>
          <Section />
          <li className={classes.list}>
            <Link to='/' className={classes.link}>Про компанію</Link>
          </li>
          <li className={classes.list}>
            <Link to='/' className={classes.link}>Контакти</Link>
          </li>
          <button
            onClick={() => setActive(!active)}
            className={buttonStyles}
          ></button>
        </ul>
      </nav>
      {/* <button onClick={()=>setActive(!active)} className={buttonStyles2}></button> */}
    </aside>
  )
}

export default SideBar
