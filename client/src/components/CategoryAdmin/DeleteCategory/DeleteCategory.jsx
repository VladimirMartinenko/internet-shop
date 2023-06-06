import { Formik, Field, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  categoryDeleteRequest,
  categoryRequest
} from '../../../redux/actions/categoryAction'
import MySelect from '../../MySelect/MySelect'
import { CATEGORY_DELETE_CHEMA } from '../../../utils/validationSchemasAdmin'
import cx from 'classnames'
import classes from './DeleteCategory.module.scss'

const initialValues = {
  categoryId: ''
}

const DeleteCategory = () => {
  const { category, isLoading, error } = useSelector(state => state.category)

  const dispatch = useDispatch()
  // console.log(category)
  useEffect(() => {
    requestCategorys()
  }, [])

  const requestCategorys = options => dispatch(categoryRequest(options))
  const onSubmit = (values, utils) => {
    dispatch(categoryDeleteRequest(values))
    utils.resetForm()
  }

  return (
    <div>
      <h1 className={cx(classes.text)}>Видалити підрозділ</h1>
      {error &&
        error.map(error => (
          <div className={cx(classes.error)}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={CATEGORY_DELETE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={cx(classes.form)}>
          <MySelect name='categoryId' placeholder='categoryId' as='select'>
            <option value=''>виберіть підрозділ</option>
            {category.map(category => (
              <option key={category.id} value={JSON.stringify(category.id)}>
                {category.name}
              </option>
            ))}
          </MySelect>
          <button type='submit' className={cx(classes.btn)}>
            Видалити
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default DeleteCategory
