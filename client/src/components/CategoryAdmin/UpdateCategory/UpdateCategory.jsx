import { Formik, Field, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryUpdateRequest } from '../../../redux/actions/categoryAction'
import Input from '../../Input/Input'
import MySelect from '../../MySelect/MySelect'
import { CATEGORY_UPDATE_CHEMA } from '../../../utils/validationSchemasAdmin'
import cx from 'classnames'
import classes from './UpdateCategory.module.scss'

const initialValues = {
  categoryId: '',
  name: ''
}

const UpdateCategory = () => {
  const { category, isLoading, error } = useSelector(state => state.category)

  const dispatch = useDispatch()
  // console.log(category)
  // useEffect(() => {
  //   requestCategorys();
  // }, []);

  // const requestCategorys = (options) => dispatch(categoryRequest(options));
  const onSubmit = (values, utils) => {
    dispatch(categoryUpdateRequest(values))

    // console.log(values);
  }

  return (
    <div>
      <h1 className={cx(classes.text)}>Оновити підрозділ</h1>
      {error &&
        error.map(error => (
          <div className={cx(classes.error)}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={CATEGORY_UPDATE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={cx(classes.form)}>
          <Input name='name' type='text' placeholder='підрозділ' />
          <MySelect name='categoryId' placeholder='categoryId' as='select'>
            <option value=''>виберіть підрозділ</option>
            {category.map(category => (
              <option key={category.id} value={JSON.stringify(category.id)}>
                {category.name}
              </option>
            ))}
          </MySelect>
          <button type='submit' className={cx(classes.btn)}>
            ОНОВИТИ
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default UpdateCategory
