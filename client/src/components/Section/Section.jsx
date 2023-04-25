import React, { useEffect}  from 'react';
import { connect, useDispatch, useSelector} from 'react-redux'
import {categoryRequest} from '../../redux/actions/categoryAction'
import { productGetRequest,productGetByCategoryRequest } from '../../redux/actions/productActionCreators'
import cx from "classnames";
import classes from './Section.module.scss';
import Category from '../category/Category';


const Section = () => {

  // const { section, isLoading, error } = useSelector(state => state.section);

  const dispatch = useDispatch();
// console.log(category)
  useEffect(() => {
    requestCategorys();
  }, []);
  
  const requestCategorys = (options) => dispatch(categoryRequest(options));
  // console.log(category);
  const requestProducts = options => dispatch(productGetByCategoryRequest(options))
   return (
    <div>
      {/* {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {/* <button onClick={() => requestCategorys()}>Load More</button> */}
      {/* {section.map((section) => (
        <div key={section.id}>
          <li className={cx(classes.list)} onClick={() => requestProducts(section.id)} >
            <a href="#" className={cx(classes.link)} >{section.name}</a>
            <ul><Category/></ul>
            </li>
        </div> */}
      {/* ))} */} */
    </div>
  );
}
export default Section
// const mStP= state=>state.section;
// const mDtP = (dispatch)=>({requestWorkers:()=>dispatch(productGetByCategoryRequest())});
// export default connect(mStP,mDtP)(Section);
