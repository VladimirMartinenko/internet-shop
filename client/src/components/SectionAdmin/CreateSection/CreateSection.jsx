import { Formik, Form } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sectionCreateRequest } from '../../../redux/actions/sectionActionCreators'
import { SECTION_CREATE_CHEMA } from '../../../utils/validationSchemasAdmin'
import Input from '../../Input/Input'
import classes from './CreateSection.module.scss'

const initialValues = {
  name: ''
}
const CreateSection = () => {
  const { section, isLoading, error } = useSelector(state => state.section)

  const dispatch = useDispatch()
  const onSubmit = (values, utils) => {
    dispatch(sectionCreateRequest(values))
    utils.resetForm()
  }

  return (
    <div>
      <h1 className={classes.text}>Створити розділ</h1>
      {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={SECTION_CREATE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={classes.form}>
          <Input name='name' type='text' placeholder='розділ' />
          <button type='submit' className={classes.btn}>
            СТВОРИТИ
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateSection
