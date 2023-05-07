import React, { useEffect}  from 'react';
import { connect, useDispatch, useSelector} from 'react-redux'
import {sectionRequest} from '../../redux/actions/sectionActionCreators'
import {categoryGetBySectionRequest } from '../../redux/actions/categoryAction'
import cx from "classnames";
import classes from './Section.module.scss';
import Category from '../category/Category';
import { Link } from 'react-router-dom';


const Section = () => {

  const { section, isLoading, error } = useSelector(state => state.section);
  const { category } = useSelector(state => state.category);
console.log(category)
  const dispatch = useDispatch();
console.log(section)
  useEffect(() => {
    requestSection();
  }, []);
  
  const requestSection = (options) => dispatch(sectionRequest(options));
  // console.log(category);
  // const requestCategory = options => dispatch(categoryGetBySectionRequest(options))
  let categoryFilter
 function filterCategory(sectionid){
  console.log(sectionid);
   categoryFilter=category.filter(function(category){return category.sectionId === Number(sectionid)})
  console.log(categoryFilter);
  return categoryFilter
}
console.log(filterCategory(1));


   return (
    <>
    {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {/* <button onClick={() => requestSection()}>Load More</button> */}
      {section?.map((section) => (
        <div key={section.id}>
          {/* <li className={cx([classes.list],[classes.listCat])} onMouseEnter={() => requestCategory(section.id)} > */}
          <li className={cx([classes.list],[classes.listCat])} onClick={() =>  filterCategory(section.id)} >
            <Link className={cx(classes.link)} >{section.name}</Link>
            <ul className={cx([classes.nav2],[classes.position])}><Category categoryFilter={filterCategory(section.id)}/></ul>
            </li>
         </div> 
      ))}
    </>
  );
}
export default Section
// const mStP= state=>state.section;
// const mDtP = (dispatch)=>({requestWorkers:()=>dispatch(categoryGetBySectionRequest())});
// export default connect(mStP,mDtP)(Section);
