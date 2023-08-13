import { Formik, Form } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryUpdateRequest } from '../../../redux/actions/categoryAction'
import Input from '../../Input/Input'
import MySelect from '../../MySelect/MySelect'
import { CATEGORY_UPDATE_CHEMA } from '../../../utils/validationSchemasAdmin'
import classes from './UpdateCategory.module.scss'
import ValidationMessages from '../../validator/validationMessages'

const initialValues = {
  categoryId: '',
  name: ''
}

const UpdateCategory = () => {
  const { category, isLoading, error, messagesUpdate } = useSelector(state => state.category)

  const dispatch = useDispatch()
  const onSubmit = (values, utils) => {
    dispatch(categoryUpdateRequest(values))
    utils.resetForm()
  }

  return (
    <div>
      <h1 className={classes.text}>Оновити підрозділ</h1>
      {/* {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))} */}
         < ValidationMessages  message={messagesUpdate}/>
      <Formik
        initialValues={initialValues}
        validationSchema={CATEGORY_UPDATE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={classes.form}>
          <Input name='name' type='text' placeholder='підрозділ' />
          <MySelect name='categoryId' placeholder='categoryId' as='select'>
            <option value=''>виберіть підрозділ</option>
            {category.map(category => (
              <option key={category.id} value={JSON.stringify(category.id)}>
                {category.name}
              </option>
            ))}
          </MySelect>
          <button type='submit' className={classes.btn}>
            ОНОВИТИ
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default UpdateCategory
