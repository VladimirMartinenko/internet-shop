import { useParams } from 'react-router-dom'
import { productGetByIdRequest } from '../../redux/actions/productActionCreators'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import classes from './Product.module.scss'

import ProductImageSlider from './ProductImageSlider'
import { basketCreate } from '../../redux/actions/basketActionCreators'
import {
  trackKlaviyo,
  trackViewedItemKlaviyo
} from '../../utils/klaviyo'
import {
  addedToCartPayload,
  cartWithAddedItem,
  viewedItemPayload,
  viewedProductPayload
} from '../../utils/klaviyoPayloads'

const Product = () => {
  const { id } = useParams()

  useEffect(() => {
    requestIdProduct(id)
  }, [])
  const requestIdProduct = id => dispatch(productGetByIdRequest(id))

  const dispatch = useDispatch()

  const { products, isLoading, error } = useSelector(state => state.product)
  const { items } = useSelector(state => state.basket)
  let info = products.ProductInfos

  useEffect(() => {
    if (!products || !products.id) {
      return
    }
    trackKlaviyo('Viewed Product', viewedProductPayload(products))
    trackViewedItemKlaviyo(viewedItemPayload(products))
  }, [products && products.id])

  const addToCart = () => {
    dispatch(basketCreate(products))
    const nextItems = cartWithAddedItem(items, products)
    const added = nextItems.find(item => item.id === products.id)
    trackKlaviyo('Added to Cart', addedToCartPayload(added, nextItems))
  }
  return (
    <main className={cx(classes.mainProduct)}>
      {isLoading && <div>Loading</div>}
      {error &&
        error.map(error => (
          <p className={cx(classes.error)}>{error.message}</p>
        ))}
      <ProductImageSlider product={products} />
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
        <p className={classes.price}>{products.price} UAH</p>
        <button
          className={cx(classes.btn)}
          onClick={addToCart}
        >
          Add to cart
        </button>
      </section>
    </main>
  )
}
export default Product
