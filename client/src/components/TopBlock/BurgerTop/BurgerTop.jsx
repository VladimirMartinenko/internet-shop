import React from 'react'
import classes from './BurgerTop.module.scss'
import { mobileMenu } from '../../../redux/actions/moboleAction'
import { useDispatch } from 'react-redux'

const BurgerTop = () => {
  // const dispatch = useDispatch()
  // const requestMobile = options =>
  // dispatch(mobileMenu(options))
  return (
    <section className={classes.main}>
      <div className={classes.div} />
      <div className={classes.div} />
      <div className={classes.div} />
    </section>
  )
}

export default BurgerTop
