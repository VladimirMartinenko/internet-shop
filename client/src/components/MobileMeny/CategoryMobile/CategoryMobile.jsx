import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productGetByCategoryRequest } from '../../../redux/actions/productActionCreators';
import cx from 'classnames'
import classes from './CategoryMobile.module.scss'
import { Link } from 'react-router-dom'
import { ChangesMobileMenu, mobileMenu } from '../../../redux/actions/moboleAction'

const CategoryMobile = () => {
  const { menu,level } = useSelector(state => state.mobile);
  console.log(menu);
  const menuStyles = cx( {
    [classes.menu]: menu===false,
    [classes.menuActive]: menu===true && level===1
  })
  const dispatch = useDispatch()
  const {isLoading, category ,error} = useSelector(state => state.category);
  console.log(category);
  const requestProducts = options =>
    dispatch(productGetByCategoryRequest(options))
  return (
    <div className={menuStyles}>
      <div className={classes.blur}/>
      <div className={classes.content}>
        {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      <ul className={classes.nav}>
        <li onClick ={()=> dispatch(ChangesMobileMenu(0))} className={classes.back}>повернутися</li>
      {category?.map(category => (
        // <div key={category.id}>
        <li key={category.id}
          className={classes.list}
          onClick={() => {requestProducts(category.id);dispatch(ChangesMobileMenu(0));dispatch(mobileMenu())}}
        >
          <Link to='/shop' className={classes.link}>
            {category.name}
          </Link>
        </li>
        // </div>
      ))}
      </ul>
    </div>
    </div>
  );
}

export default CategoryMobile;
