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
  let info = products.ProductInfos
  return (
    <main className={cx(classes.mainProduct)}>
      {isLoading && <div>Loading</div>}
      {error &&
        error.map(error => (
          <p className={cx(classes.error)}>{error.message}</p>
        ))}
      <img
        className={classes.img}
        src={
          products.img === undefined
            ? CONSTANTS.PRODUCT_IMAGE_PATH
            : CONSTANTS.HTTP_SERVER_URL_images + products.img
        }
        alt={products.name}
      ></img>
      <section className={classes.conteiner}>
        <h1 className={classes.text}>{products.name}</h1>
        {/* <div> */}
        {info &&
          info.map(i => (
            <div className={classes.text} key={i.id}>
              {i.title}:{i.description}
            </div>
          ))}
        {/* </div> */}
      </section>
      <section className={classes.conteiner2}>
        <p className={classes.price}>{products.price}грн.</p>
        <button
          className={cx(classes.btn)}
          onClick={() => dispatch(basketCreate(products))}
        >
          До кошика
        </button>
      </section>
    </main>
  )
}
export default Product
