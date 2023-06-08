import { useParams } from 'react-router-dom'
import { productGetByIdRequest } from '../../redux/actions/productActionCreators'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import classes from './Product.module.scss'

import CONSTANTS from '../../constants'
import { basketCreate } from '../../redux/actions/basketActionCreators'

const Product = () => {
  const { id } = useParams()

  useEffect(() => {
    requestIdProduct(id)
  }, [])
  const requestIdProduct = id => dispatch(productGetByIdRequest(id))

  const dispatch = useDispatch()

  const { products, isLoading, error } = useSelector(state => state.product)
  console.log(products)
  let info = products.ProductInfos
  return (
    <div className={cx(classes.mainProduct)}>
      {isLoading && <div>Loading</div>}
      {error &&
        error.map(error => (
          <div className={cx(classes.error)}>{error.message}</div>
        ))}
      <img
        className={classes.img}
        src={CONSTANTS.HTTP_SERVER_URL_images + products.img}
        alt={products.name}
      ></img>
      <div className={classes.conteiner}>
        <h1 className={classes.name}>{products.name}</h1>
        <div>
          {info &&
            info.map(i => (
              <div className={classes.text} key={i.id}>
                {i.title}:{i.description}
              </div>
            ))}
        </div>
      </div>
      <div className={classes.conteiner2}>
        <p className={classes.price}>{products.price}грн.</p>
        <button
          className={cx(classes.btn)}
          onClick={() => dispatch(basketCreate(products))}
        >
          До кошика
        </button>
      </div>
    </div>
  )
}
export default Product
