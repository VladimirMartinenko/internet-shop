import { Formik, Field, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryCreateRequest } from '../../../redux/actions/categoryAction'
import { sectionRequest } from '../../../redux/actions/sectionActionCreators'
import { CATEGORY_CREATE_CHEMA } from '../../../utils/validationSchemasAdmin'
import Input from '../../Input/Input'
import MySelect from '../../MySelect/MySelect'
import cx from 'classnames'
import classes from './CreateCategory.module.scss'

const initialValues = {
  name: '',
  sectionId: ''
}
const CreateCategory = () => {
  useEffect(() => {
    requestCategorys()
  }, [])

  const requestCategorys = options => dispatch(sectionRequest(options))

  const { section } = useSelector(state => state.section)
  const { category, isLoading, error } = useSelector(state => state.category)

  const dispatch = useDispatch()
  const onSubmit = (values, utils) => {
    dispatch(categoryCreateRequest(values))
  }

  return (
    <div>
      <h1 className={cx(classes.text)}>Створити категорію</h1>
      {error &&
        error.map(error => (
          <div className={cx(classes.error)}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={CATEGORY_CREATE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={cx(classes.form)}>
          <MySelect name='sectionId' placeholder='sectionId' as='select'>
            <option value=''>виберіть секцію</option>
            {section.map(section => (
              <option key={section.id} value={JSON.stringify(section.id)}>
                {section.name}
              </option>
            ))}
          </MySelect>
          <Input name='name' type='text' placeholder='категорія' />
          <button type='submit' className={cx(classes.btn)}>
            СТВОРИТИ
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateCategory
