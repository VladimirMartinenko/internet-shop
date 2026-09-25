import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CONSTANTS from '../../constants'
import { useHistory } from 'react-router-dom'
import { basketCreate } from '../../redux/actions/basketActionCreators'
import { trackKlaviyo } from '../../utils/klaviyo'
import {
  addedToCartPayload,
  cartWithAddedItem,
  viewedCategoryPayload
} from '../../utils/klaviyoPayloads'
import classes from './ProductList.module.scss'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { productGetByCategoryRequest } from '../../redux/actions/productActionCreators'
import { categoryGetByIdRequest } from '../../redux/actions/categoryAction'
import store from '../../redux'
import { productHasSizes } from '../../utils/productSizes'

const ProductList = () => {
  const { id } = useParams()

  useEffect(() => {
    requestIdCategory(id)
  }, [])
  useEffect(() => {
    requestCategory(id)
  }, [])
  const requestIdCategory = id => dispatch(productGetByCategoryRequest(id))
  const requestCategory = id => dispatch(categoryGetByIdRequest(id))

  const history = useHistory()
  const { product, isLoading, error } = useSelector(state => state.products)
  const { categoryById } = useSelector(state => state.category)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!categoryById || !categoryById.id) {
      return
    }
    trackKlaviyo('Viewed Category', viewedCategoryPayload(categoryById))
  }, [categoryById && categoryById.id])

  const addToCart = addedProduct => {
    const items = store.getState().basket.items
    const line = {
      id: addedProduct.id,
      name: addedProduct.name,
      price: addedProduct.price,
      img: addedProduct.img,
      img2: addedProduct.img2,
      brand: addedProduct.brand,
      quantity: addedProduct.quantity,
      sizes: addedProduct.sizes
    }
    dispatch(basketCreate(line))
    const nextItems = cartWithAddedItem(items, line)
    const added = nextItems.find(item => item.id === addedProduct.id)
    trackKlaviyo('Added to Cart', addedToCartPayload(added, nextItems))
  }
  return (
    <section className={classes.main}>
      {isLoading && <div>Loading</div>}
      {error &&
        error.map(error => <p className={classes.error}>{error.message}</p>)}
      {product &&
        product.map(product => (
          <div key={product.id} className={classes.box}>
            <img
              onClick={() => history.push('/product/' + product.id)}
              src={
                product.img === undefined
                  ? CONSTANTS.PRODUCT_IMAGE_PATH
                  : CONSTANTS.HTTP_SERVER_URL_images + product.img
              }
              alt={product.name}
              className={classes.img}
            ></img>
            <p className={classes.span}>In stock</p>
            <p className={classes.text}>{product.name}</p>
            <p className={classes.price}>{product.price} UAH</p>
            <button
              className={classes.btn}
              onClick={() =>
                productHasSizes(product)
                  ? history.push('/product/' + product.id)
                  : addToCart(product)
              }
            >
              {productHasSizes(product) ? 'Select size' : 'Add to cart'}
            </button>
          </div>
        ))}
    </section>
  )
}
export default ProductList
