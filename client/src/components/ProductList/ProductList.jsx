import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CONSTANTS from '../../constants'
import { useHistory } from 'react-router-dom'
import { basketCreate } from '../../redux/actions/basketActionCreators'
import classes from './ProductList.module.scss'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { productGetByCategoryRequest } from '../../redux/actions/productActionCreators'
import { categoryGetByIdRequest } from '../../redux/actions/categoryAction'

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

  const dispatch = useDispatch()
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
            <p className={classes.span}>В наявності</p>
            <p className={classes.text}>{product.name}</p>
            <p className={classes.price}>{product.price} грн.</p>
            <button
              className={classes.btn}
              onClick={() => dispatch(basketCreate(product))}
            >
              До кошика
            </button>
          </div>
        ))}
    </section>
  )
}
export default ProductList
