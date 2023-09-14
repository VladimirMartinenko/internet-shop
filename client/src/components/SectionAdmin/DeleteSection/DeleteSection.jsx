import { Formik, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  sectionRequest,
  sectionDeleteRequest
} from '../../../redux/actions/sectionActionCreators'
import MySelect from '../../MySelect/MySelect'
import { SECTION_DELETE_CHEMA } from '../../../utils/validationSchemasAdmin'
import classes from './DeleteSection.module.scss'
import ValidationMessages from '../../validator/validationMessages'

const initialValues = {
  sectionId: ''
}

const DeleteSection = () => {
  const { section, isLoading, error, messagesDelete } = useSelector(
    state => state.section
  )
  const dispatch = useDispatch()
  useEffect(() => {
    requestSection()
  }, [])
  const requestSection = options => dispatch(sectionRequest(options))
  const onSubmit = (values, utils) => {
    dispatch(sectionDeleteRequest(values))
    utils.resetForm()
  }
  return (
    <section>
      <h1 className={classes.text}>Видалити розділ</h1>
      {/* {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))} */}
      <ValidationMessages message={messagesDelete} />
      <Formik
        initialValues={initialValues}
        validationSchema={SECTION_DELETE_CHEMA}
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
          <button type='submit' className={classes.btn}>
            Видалити
          </button>
        </Form>
      </Formik>
    </section>
  )
}

export default DeleteSection
