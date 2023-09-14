import { Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryCreateRequest } from '../../../redux/actions/categoryAction'
import { sectionRequest } from '../../../redux/actions/sectionActionCreators'
import { CATEGORY_CREATE_CHEMA } from '../../../utils/validationSchemasAdmin'
import Input from '../../Input/Input'
import MySelect from '../../MySelect/MySelect'
import classes from './CreateCategory.module.scss'
import ValidationMessages from '../../validator/validationMessages'

const initialValues = {
  name: '',
  sectionId: ''
}
const CreateCategory = () => {
  useEffect(() => {
    requestSections()
  }, [])

  const requestSections = options => dispatch(sectionRequest(options))

  const { section } = useSelector(state => state.section)
  const { category, isLoading, error, messagesCreate } = useSelector(state => state.category)

  const dispatch = useDispatch()
  const onSubmit = (values, utils) => {
    dispatch(categoryCreateRequest(values));
    utils.resetForm();;
  }

  return (
    <section>
      <h1 className={classes.text}>Створити підрозділ</h1>
      {/* {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))} */}
       < ValidationMessages  message={messagesCreate}/>
      <Formik
        initialValues={initialValues}
        validationSchema={CATEGORY_CREATE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={classes.form}>
          <MySelect name='sectionId' placeholder='sectionId' as='select'>
            <option value=''>виберіть розділ</option>
            {section.map(section => (
              <option key={section.id} value={JSON.stringify(section.id)}>
                {section.name}
              </option>
            ))}
          </MySelect>
          <Input name='name' type='text' placeholder='підрозділ' />
          <button type='submit' className={classes.btn}>
            СТВОРИТИ
          </button>
        </Form>
      </Formik>
    </section>
  )
}

export default CreateCategory
