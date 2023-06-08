import { Formik, Field, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryUpdateRequest } from '../../../redux/actions/categoryAction'
import Input from '../../Input/Input'
import MySelect from '../../MySelect/MySelect'
import { SECTION_UPDATE_CHEMA } from '../../../utils/validationSchemasAdmin'
import classes from './UpdateSection.module.scss'

const initialValues = {
  sectionId: '',
  name: ''
}

const UpdateSection = () => {
  const { section, isLoading, error } = useSelector(state => state.section)
  const dispatch = useDispatch()
  const onSubmit = (values, utils) => {
    dispatch(categoryUpdateRequest(values))
    utils.resetForm()
  }
  return (
    <div>
      <h1 className={classes.text}>Оновити розділ</h1>
      {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={SECTION_UPDATE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={classes.form}>
          <Input name='name' type='text' placeholder='розділ' />
          <MySelect name='sectionId' placeholder='sectionId' as='select'>
            <option value=''>виберіть категорію</option>
            {section.map(section => (
              <option key={section.id} value={JSON.stringify(section.id)}>
                {section.name}
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

export default UpdateSection
