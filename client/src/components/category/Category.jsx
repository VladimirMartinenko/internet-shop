import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  categoryGetByIdRequest,
  categoryRequest
} from '../../redux/actions/categoryAction'
import { productGetByCategoryRequest } from '../../redux/actions/productActionCreators'
import cx from 'classnames'
import classes from './category.module.scss'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Category = props => {
  const { categoryFilter } = props
  const history = useHistory()

  useEffect(() => {
    requestCategorys()
  }, [])
  const dispatch = useDispatch()
  const { category, isLoading, error } = useSelector(state => state.category)
  const requestCategory = id => dispatch(categoryGetByIdRequest(id))

  const requestCategorys = options => dispatch(categoryRequest(options))
  const requestProducts = options =>
    dispatch(productGetByCategoryRequest(options))
  const request = id => {
    requestProducts(id)
    requestCategory(id)
  }
  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {categoryFilter?.map(category => (
        <li
          key={category.id}
          className={cx(classes.list)}
          onClick={() => request(category.id)}
        >
          <Link
            className={cx(classes.link)}
            onClick={() => history.push('/shop/' + category.id)}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </>
  )
}
export default Category
