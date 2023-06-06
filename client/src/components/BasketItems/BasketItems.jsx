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
    <div>
      {items?.map(i => (
        <div key={i.id} className={classes.containerMain}>
          <img
            className={classes.img}
            src={CONSTANTS.HTTP_SERVER_URL_images + i.img}
            alt={i.name}
          ></img>
          <div className={classes.text}>назва : {i.name}</div>
          <div className={classes.containerBtn}>
            <button
              className={classes.btn}
              onClick={() => dispatch(basketPlus(i.id))}
            >
              +
            </button>
          </div>
          <div className={classes.text}>кількість : {i.count}</div>
          <div className={classes.containerBtn}>
            <button
              className={classes.btn}
              onClick={() => dispatch(basketMinus(i.id))}
            >
              -
            </button>
          </div>
          <div className={classes.text}>ціна : {i.price}</div>
          <div className={classes.text}>сума : {i.price * i.count}</div>
          <div className={classes.containerBtn}>
            <button
              className={classes.btn}
              onClick={() => dispatch(basketDelete(i.id))}
            >
              ВИДАЛИТИ
            </button>
          </div>
        </div>
      ))}
      <div className={classes.text2}>ЗАГАЛЬНА СУМА : {totalSumm}</div>
    </div>
  )
}

export default BasketItems
