import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryRequest } from '../../redux/actions/categoryAction'
import { productGetByCategoryRequest } from '../../redux/actions/productActionCreators'
import cx from 'classnames'
import classes from './category.module.scss'
import { Link } from 'react-router-dom'

const Category = props => {
  const { categoryFilter } = props

  useEffect(() => {
    requestCategorys()
  }, [])
  const dispatch = useDispatch()
  const { category, isLoading, error } = useSelector(state => state.category)

  const requestCategorys = options => dispatch(categoryRequest(options))
  const requestProducts = options =>
    dispatch(productGetByCategoryRequest(options))
  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {categoryFilter?.map(category => (
        // <div key={category.id}>
        <li key={category.id}
          className={cx(classes.list)}
          onClick={() => requestProducts(category.id)}
        >
          <Link to='/shop' className={cx(classes.link)}>
            {category.name}
          </Link>
        </li>
        // </div>
      ))}
    </>
  )
}
export default Category
