import React, { useState } from 'react'
import classes from './TopBlock.module.scss'
import { useSelector } from 'react-redux'
import BurgerTop from './BurgerTop/BurgerTop'
import SideBarTop from './SideBarTop/SideBarTop'

const TopBlock = ({ change, active }) => {
  // const[active,setActive]=useState(false);
  const handlChange = value => {
    change(value)
  }
  // console.log(activeMain)
  const { categoryById, category, isLoading, error } = useSelector(
    state => state.category
  )
  console.log(categoryById)
  return (
    // <div className={classes.position} onClick={()=>setActive(false)}>
    <section className={classes.main} onClick={e => e.stopPropagation()}>
      <button onClick={() => handlChange(!active)} className={classes.span}>
        <BurgerTop />
        <h1 className={classes.h1}>Меню</h1>
        <SideBarTop active={active} />
      </button>
      <h1 onClick={() => handlChange(false)} className={classes.h2}>
        {categoryById.name}
      </h1>
    </section>
    // </div>
  )
}

export default TopBlock
