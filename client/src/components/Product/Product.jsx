import { useParams } from 'react-router-dom'
import { productGetByIdRequest } from '../../redux/actions/productActionCreators'
import React, { useEffect, useState } from 'react'
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
import store from '../../redux'
import {
  availableStock,
  cartKey,
  lineCartKey,
  parseSizes,
  productHasSizes
} from '../../utils/productSizes'

const Product = () => {
  const { id } = useParams()
  const [selectedSize, setSelectedSize] = useState('')
  const [sizeError, setSizeError] = useState('')

  useEffect(() => {
    requestIdProduct(id)
  }, [])
  const requestIdProduct = id => dispatch(productGetByIdRequest(id))

  const dispatch = useDispatch()

  const { products, isLoading, error } = useSelector(state => state.product)
  let info = products.ProductInfos
  const sizes = parseSizes(products)
  const hasSizes = productHasSizes(products)

  useEffect(() => {
    setSelectedSize('')
    setSizeError('')
  }, [products && products.id])

  useEffect(() => {
    if (!products || !products.id) {
      return
    }
    trackKlaviyo('Viewed Product', viewedProductPayload(products))
    trackViewedItemKlaviyo(viewedItemPayload(products))
  }, [products && products.id])

  const addToCart = () => {
    if (hasSizes && !selectedSize) {
      setSizeError('Select a size')
      return
    }
    const items = store.getState().basket.items
    const key = cartKey(products, selectedSize || undefined)
    const inCart = items.find(item => lineCartKey(item) === key)
    const stock = availableStock(products, selectedSize || undefined)
    if ((inCart ? inCart.count : 0) >= stock) {
      setSizeError('Not enough stock')
      return
    }
    const line = {
      id: products.id,
      name: products.name,
      price: products.price,
      img: products.img,
      img2: products.img2,
      brand: products.brand,
      quantity: products.quantity,
      sizes: products.sizes,
      size: selectedSize || null,
      cartKey: key
    }
    dispatch(basketCreate(line))
    const nextItems = cartWithAddedItem(items, line)
    const added = nextItems.find(item => lineCartKey(item) === key)
    trackKlaviyo('Added to Cart', addedToCartPayload(added, nextItems))
    setSizeError('')
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
        {info &&
          info.map(i => (
            <div className={classes.text} key={i.id}>
              {i.title}:{i.description}
            </div>
          ))}
      </section>
      <section className={classes.conteiner2}>
        <p className={classes.price}>{products.price} UAH</p>
        {hasSizes && (
          <div className={classes.sizes}>
            {sizes.map(size => (
              <button
                key={size.name}
                type='button'
                disabled={size.quantity <= 0}
                className={cx(
                  classes.sizeBtn,
                  selectedSize === size.name && classes.sizeBtnActive
                )}
                onClick={() => {
                  setSelectedSize(size.name)
                  setSizeError('')
                }}
              >
                {size.name}
              </button>
            ))}
          </div>
        )}
        {sizeError && <p className={classes.sizeError}>{sizeError}</p>}
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
