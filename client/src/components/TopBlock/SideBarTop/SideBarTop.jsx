import React, { useState } from 'react'
import classes from './SideBarTop.module.scss'
import Section from '../../Section/Section'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { useSelector } from 'react-redux'

const SideBarTop = ({ active }) => {
  const { section } = useSelector(state => state.section)
  console.log(section.length)

  // const[active,setActive]=useState(false);
  console.log(active)

  // const mainStyles = cx({
  //   [classes.main]: active===false,
  //   [classes.mainActive]: active===true,
  // })
  // const navStyles = cx({
  //   [classes.nav]: active===false,
  //   [classes.navActive]: active===true,
  // })
  // const buttonStyles = cx({
  //   [classes.buttonNotActive]:section.length < 7,
  //   [classes.button]: active===false && section.length >= 7,
  //   [classes.buttonActive]: active===true,
  // })
  // const buttonStyles2 = cx({
  //   [classes.button2]: active===false && section.length >= 7,
  //   [classes.buttonActive2]: active===true,
  // })
  const divStyles = cx({
    [classes.div]: active === true,
    [classes.div2]: active === false
  })
  return (
    <article className={divStyles}>
      <nav className={classes.mainActive}>
        <ul className={classes.navActive}>
          <li className={classes.list}>
            <Link to='/' className={classes.link}>
              Домашня
            </Link>
          </li>
          <Section />
          <li className={classes.list}>
            <Link to='' className={classes.link}>
              Про компанію
            </Link>
          </li>
          <li className={classes.list}>
            <Link to='' className={classes.link}>
              Контакти
            </Link>
          </li>
          {/* <button onClick={()=>setActive(!active)} className={buttonStyles}></button> */}
        </ul>
      </nav>
      {/* <button onClick={()=>setActive(!active)} className={buttonStyles2}></button> */}
    </article>
  )
}

export default SideBarTop
