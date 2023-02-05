import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { productGetRequest, productGetByIdRequest} from '../../redux/actions/productActionCreators'
import CONSTANTS from '../../constants'
import {useHistory} from 'react-router-dom'
// import cx from "classnames";
// import classes from './category.module.scss';

const ProductList = () => {
  const history = useHistory();
  const { product, isLoading, error } = useSelector(state => state.product)

  const dispatch = useDispatch()
  // console.log(product)
  useEffect(() => {
    requestProducts();
    requestIdProduct();
  }, [])

  const requestProducts = options => dispatch(productGetRequest(options));
  const requestIdProduct = options => dispatch(productGetByIdRequest(options));
  // console.log(product)
  return (
    <div >
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {/* <button onClick={() => requestCategorys()}>Load More</button> */}
      {product.map(product => (
        <div key={product.id} onClick={()=> history.push('/product/'+ product.id)}>
          <img
            src={CONSTANTS.HTTP_SERVER_URL_images+product.img}
            alt={product.name}
            onClick={() => requestIdProduct(product.id)}
          ></img>
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  )
}
// export default Category
const mStP = state => state.category
const mDtP = dispatch => ({
  requestWorkers: () => dispatch(productGetRequest(),productGetByIdRequest())
})
export default connect(mStP, mDtP)(ProductList)
