import React, { useEffect}  from 'react';
import { connect, useDispatch, useSelector} from 'react-redux'
import {categoryRequest} from '../../redux/actions/categoryAction'
import { productGetRequest } from '../../redux/actions/productActionCreators'
import cx from "classnames";
import classes from './category.module.scss';


const Category = () => {

  const { category, isLoading, error } = useSelector(state => state.category);

  const dispatch = useDispatch();
// console.log(category)
  useEffect(() => {
    requestCategorys();
  }, []);
  
  const requestCategorys = (options) => dispatch(categoryRequest(options));
  // console.log(category);
  const requestProducts = options => dispatch(productGetRequest(options))
   return (
    <div>
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {/* <button onClick={() => requestCategorys()}>Load More</button> */}
      {category.map((category) => (
        <div key={category.id}>
          <li className={cx(classes.list)} onClick={() => requestProducts(category.id)} >
            <a href="#" className={cx(classes.link)} >{category.name}</a></li>
        </div>
      ))}
    </div>
  );
}
// export default Category
const mStP= state=>state.category;
const mDtP = (dispatch)=>({requestWorkers:()=>dispatch(productGetRequest())});
export default connect(mStP,mDtP)(Category);
