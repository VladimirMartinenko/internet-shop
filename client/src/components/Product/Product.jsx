import { useParams } from 'react-router-dom';
import { productGetRequest, productGetByIdRequest} from '../../redux/actions/productActionCreators'
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import CONSTANTS from '../../constants';


const Product = () => {
  const {id} = useParams();
  
 
  
 useEffect(() => {
    // requestProducts();
    requestIdProduct(id);
  }, []);
  const requestIdProduct = id => dispatch(productGetByIdRequest(id))
 
 
  const dispatch = useDispatch();
  
  const { products, isLoading, error } = useSelector(state => state.product);
  console.log(products);
  // const info = useSelector(state => state.product.product.ProductInfos);
  // const {ProductInfos} = product;
  // console.log(product.ProductInfos[0]);
  let info = products.ProductInfos;
 

 

  


// console.log(product);

// console.log(info);
  return (
    
    < >
   
    {isLoading && <div>Loading</div>}
    {error && <div>{error.message}</div>}
    {/* <button onClick={() => requestCategorys()}>Load More</button> */}
    {/* <div>{product.product.map(product => (<div><img
          src={CONSTANTS.HTTP_SERVER_URL_images+product.img}
          alt={product.name}></img><div>{product.ProductInfos.map(i=>(<div>{i.title}:{i.description}</div>))}</div></div>))}</div> */}
    <div><div><img
          src={CONSTANTS.HTTP_SERVER_URL_images+products.img}
          alt={products.name}></img><div></div></div></div>
    <div>{info && info.map(i => (
      <div key={i.id}>
       {i.title}:{i.description}
      </div>
    ))}</div> 
  </>
  );
}
// const vvv = [{title:"fsdf",description:"dafe"}];
// const vvv2 = JSON.stringify(vvv);
// console.log(vvv2);
// export default Product;
const mStP= state=>state.products;
const mDtP = (dispatch)=>({requestWorkers:()=>dispatch(productGetByIdRequest())});
export default connect(mStP,mDtP)(Product);
