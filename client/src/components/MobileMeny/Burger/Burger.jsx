import React from 'react';
import classes from './Burger.module.scss';
import { mobileMenu } from '../../../redux/actions/moboleAction'
import { useDispatch } from 'react-redux';

const Burger = () => {
  const dispatch = useDispatch()
  const requestMobile = options =>
  dispatch(mobileMenu(options))
  return (
    <section className={classes.main} onClick={()=> requestMobile() }>
      <div className={classes.div}/>
      <div className={classes.div} />
      <div className={classes.div} />
    </section>
  );
}

export default Burger;
