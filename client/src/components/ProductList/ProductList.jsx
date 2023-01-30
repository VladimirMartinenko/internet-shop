import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { productGetRequest } from '../../redux/actions/productActionCreators'
import CONSTANTS from '../../constants'
// import cx from "classnames";
// import classes from './category.module.scss';

const ProductList = () => {
  const { product, isLoading, error } = useSelector(state => state.product)

  const dispatch = useDispatch()
  // console.log(product)
  useEffect(() => {
    requestProducts()
  }, [])

  const requestProducts = options => dispatch(productGetRequest(options))
  // console.log(product)
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {/* <button onClick={() => requestCategorys()}>Load More</button> */}
      {product.map(product => (
        <div key={product.id}>
          <img
            src={CONSTANTS.HTTP_SERVER_URL_images+product.img}
            alt={product.name}
          ></img>
        </div>
      ))}
    </div>
  )
}
// export default Category
const mStP = state => state.category
const mDtP = dispatch => ({
  requestWorkers: () => dispatch(productGetRequest())
})
export default connect(mStP, mDtP)(ProductList)
