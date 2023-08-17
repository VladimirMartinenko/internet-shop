import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sectionRequest } from '../../redux/actions/sectionActionCreators'
import cx from 'classnames'
import classes from './Section.module.scss'
import Category from '../category/Category'
import { Link } from 'react-router-dom'

const Section = () => {
  const { section, isLoading, error } = useSelector(state => state.section)
  const { category } = useSelector(state => state.category)
  const dispatch = useDispatch()
  useEffect(() => {
    requestSection()
  }, [])

  const requestSection = options => dispatch(sectionRequest(options))
  let categoryFilter
  function filterCategory (sectionid) {
    categoryFilter = category.filter(function (category) {
      return category.sectionId === Number(sectionid)
    })
    return categoryFilter
  }

  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {section?.map(section => (
        <div key={section.id}>
          {/* <li className={cx([classes.list],[classes.listCat])} onMouseEnter={() => requestCategory(section.id)} > */}
          <li
            className={cx([classes.list], [classes.listCat])}
            onClick={() => filterCategory(section.id)}
          >
            <Link className={cx(classes.link)}>{section.name}</Link>
            <ul className={cx([classes.nav2], [classes.position])}>
              <Category categoryFilter={filterCategory(section.id)} />
            </ul>
          </li>
        </div>
      ))}
    </>
  )
}
export default Section
