import React, { useEffect}  from 'react';
import { connect, useDispatch, useSelector} from 'react-redux'
import {categoryRequest} from '../../redux/actions/categoryAction'
import { productGetRequest,productGetByCategoryRequest } from '../../redux/actions/productActionCreators'
import cx from "classnames";
import classes from './category.module.scss';
import { Link } from 'react-router-dom';


const Category = (props) => {
  const {categoryFilter}=props;
console.log(categoryFilter);
  
  useEffect(() => {
    requestCategorys();
  }, []);
  const dispatch = useDispatch();
// console.log(category)
const { category, isLoading, error } = useSelector(state => state.category);
  
  const requestCategorys = (options) => dispatch(categoryRequest(options));
  // console.log(category);
  const requestProducts = options => dispatch(productGetByCategoryRequest(options))
   return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {/* <button onClick={() => requestCategorys()}>Load More</button> */}
      {/* {category.map((category) => (
        // <div key={category.id}>
          <li className={cx(classes.list)} onClick={() => requestProducts(category.id)} >
            <a href="#" className={cx(classes.link)} >{category.name}</a></li>
        // </div>
      ))} */}
      {categoryFilter?.map((category) => (
        // <div key={category.id}>
          <li className={cx(classes.list)} onClick={() => requestProducts(category.id)} >
            <Link to="/shop" className={cx(classes.link)} >{category.name}</Link></li>
        // </div>
      ))}
    </>
  );
}
export default Category
// const mStP= state=>state.category;
// const mDtP = (dispatch)=>({requestWorkers:()=>dispatch(productGetByCategoryRequest())});
// export default connect(mStP,mDtP)(Category);
