import React from 'react'
import CONSTANTS from '../../constants'
import {
  basketMinus,
  basketPlus,
  basketDelete
} from '../../redux/actions/basketActionCreators'
import { useDispatch, useSelector } from 'react-redux'
import classes from './BasketItems.module.scss'

const BasketItems = () => {
  const { items } = useSelector(state => state.basket)
  const { totalSumm } = useSelector(state => state.basket)
  const dispatch = useDispatch()

  return (
    <>
      {items?.map(i => (
        <div key={i.id} className={classes.containerMain}>
          <img
            className={classes.img}
            src={CONSTANTS.HTTP_SERVER_URL_images + i.img}
            alt={i.name}
          ></img>
          <p className={classes.text}>name : {i.name}</p>
          <div className={classes.containerBtn}>
            <button
              className={classes.btn}
              onClick={() => dispatch(basketPlus(i.id))}
            >
              +
            </button>
          </div>
          <p className={classes.text}>quantity : {i.count}</p>
          <div className={classes.containerBtn}>
            <button
              className={classes.btn}
              onClick={() => dispatch(basketMinus(i.id))}
            >
              -
            </button>
          </div>
          <p className={classes.text}>price : {i.price}</p>
          <p className={classes.text}>subtotal : {i.price * i.count}</p>
          <div className={classes.containerBtn}>
            <button
              className={classes.btn}
              onClick={() => dispatch(basketDelete(i.id))}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
      <p className={classes.text2}>TOTAL : {totalSumm}</p>
    </>
  )
}

export default BasketItems
