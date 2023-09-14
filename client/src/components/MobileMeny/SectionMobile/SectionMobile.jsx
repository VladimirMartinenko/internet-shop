import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sectionRequest } from '../../../redux/actions/sectionActionCreators'
import { ChangesMobileMenu } from '../../../redux/actions/moboleAction'
import classes from './SectionMobile.module.scss'
// import Category from '../category/Category'
import { Link } from 'react-router-dom'
import { categoryGetBySectionRequest } from '../../../redux/actions/categoryAction'

const SectionMobile = () => {
  const { section, isLoading, error } = useSelector(state => state.section)
  const { category } = useSelector(state => state.category)
  const dispatch = useDispatch()
  useEffect(() => {
    requestSection()
  }, [])

  const requestSection = options => dispatch(sectionRequest(options))
  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {section?.map(section => (
        <ul key={section.id}>
          {/* <li className={cx([classes.list],[classes.listCat])} onMouseEnter={() => requestCategory(section.id)} > */}
          <li
            className={classes.list}
            // onClick={() => filterCategory(section.id)}
            onClick ={()=> {dispatch(ChangesMobileMenu(1));dispatch(categoryGetBySectionRequest(section.id)) }}
            // onClick ={()=> dispatch(categoryGetBySectionRequest(section.id)) }
          >
            <Link to='' className={classes.link}>{section.name}</Link>
            {/* <ul className={cx([classes.nav2], [classes.position])}>
              <Category categoryFilter={filterCategory(section.id)} />
            </ul> */}
          </li>
        </ul>
      ))}
    </>
  );
}

export default SectionMobile;
