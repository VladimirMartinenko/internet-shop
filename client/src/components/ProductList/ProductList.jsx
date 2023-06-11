import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CONSTANTS from '../../constants'
import { useHistory } from 'react-router-dom'
import { basketCreate } from '../../redux/actions/basketActionCreators'
import cx from 'classnames'
import classes from './ProductList.module.scss'

const ProductList = () => {
  const history = useHistory()
  const { product, isLoading, error } = useSelector(state => state.products)

  const dispatch = useDispatch()
  return (
    <div className={cx(classes.main)}>
      {isLoading && <div>Loading</div>}
      {error &&
        error.map(error => (
          <div className={cx(classes.error)}>{error.message}</div>
        ))}
      {product &&
        product.map(product => (
          <div key={product.id} className={cx(classes.box)}>
            <img
              onClick={() => history.push('/product/' + product.id)}
              src={product.img === undefined ? CONSTANTS.PRODUCT_IMAGE_PATH: CONSTANTS.HTTP_SERVER_URL_images + product.img}
              alt={product.name}
              className={cx(classes.img)}
            ></img>
            <div className={cx(classes.text)}>
              {product.name} {product.price} $
            </div>
            <button
              className={cx(classes.btn)}
              onClick={() => dispatch(basketCreate(product))}
            >
              Купить
            </button>
          </div>
        ))}
    </div>
  )
}
export default ProductList
