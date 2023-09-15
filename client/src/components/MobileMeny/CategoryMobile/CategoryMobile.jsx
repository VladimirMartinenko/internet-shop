import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productGetByCategoryRequest } from '../../../redux/actions/productActionCreators'
import cx from 'classnames'
import classes from './CategoryMobile.module.scss'
import { Link } from 'react-router-dom'
import {
  ChangesMobileMenu,
  mobileMenu
} from '../../../redux/actions/moboleAction'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const CategoryMobile = () => {
  const history = useHistory()
  const { menu, level } = useSelector(state => state.mobile)
  console.log(menu)
  const menuStyles = cx({
    [classes.menu]: menu === false || level === 0,
    [classes.menuActive]: menu === true && level === 1
  })
  const dispatch = useDispatch()
  const { isLoading, category, error } = useSelector(state => state.category)
  console.log(category)
  const requestProducts = options =>
    dispatch(productGetByCategoryRequest(options))
  return (
    <aside className={menuStyles} onClick={() => dispatch(mobileMenu())}>
      <div className={classes.blur} />
      <nav className={classes.content} onClick={e => e.stopPropagation()}>
        {isLoading && <div>Loading</div>}
        {error && <div>{error.message}</div>}
        <ul className={classes.nav}>
          <li
            onClick={() => dispatch(ChangesMobileMenu(0))}
            className={classes.back}
          >
            <span>&larr;</span>повернутися
          </li>
          {category?.map(category => (
            <li
              key={category.id}
              className={classes.list}
              onClick={() => {
                requestProducts(category.id)
                dispatch(ChangesMobileMenu(0))
                dispatch(mobileMenu())
              }}
            >
              <Link
              to='#'
                onClick={() => history.push('/shop/' + category.id)}
                className={classes.link}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default CategoryMobile
