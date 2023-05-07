import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { productGetRequest, productGetByIdRequest} from '../../redux/actions/productActionCreators'
import CONSTANTS from '../../constants'
import {useHistory} from 'react-router-dom'
import {basketCreateRequest}from '../../redux/actions/basketActionCreators'
import cx from "classnames";
import classes from './ProductList.module.scss';

const ProductList = () => {
  const history = useHistory();
  const { product, isLoading, error } = useSelector(state => state.products);
  console.log(history);

  const dispatch = useDispatch()
  // console.log(product)
  // useEffect(() => {
  //   // requestProducts();
  //   requestIdProduct();
  // }, [])

  // // const requestProducts = options => dispatch(productGetRequest(options));
  // const requestIdProduct = options => dispatch(productGetByIdRequest(options));
  // // console.log(product)
  // let basketArrayId = [];
  // window.localStorage.setItem('basket', JSON.stringify(basketArrayId))
  return (
    <div className={cx(classes.main)} >
      {isLoading && <div>Loading</div>}
      {error &&error.map(error => (<div className={cx(classes.error)}>{error.message}</div>))}
      {/* <button onClick={() => requestCategorys()}>Load More</button> */}
      {product && product.map(product => (
        <div key={product.id} className={cx(classes.box)} >
          <img onClick={()=> history.push('/product/'+ product.id)}
            src={CONSTANTS.HTTP_SERVER_URL_images+product.img}
            alt={product.name}
            className={cx(classes.img)} 
          ></img>
          <div className={cx(classes.text)}>{product.name} {product.price} $</div>
          <button  className={cx(classes.btn)} onClick={()=> dispatch(basketCreateRequest(product))}>Купить</button>
        </div>
        
      ))}
    </div>
  )
}
// export default Category
// const mStP = state => state.category
// const mDtP = dispatch => ({
//   requestWorkers: () => dispatch(productGetRequest(),productGetByIdRequest())
// })
// export default connect(mStP, mDtP)(ProductList)
export default ProductList;