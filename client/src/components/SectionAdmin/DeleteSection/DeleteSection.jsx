import { Formik, Field, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  sectionRequest,
  sectionDeleteRequest
} from '../../../redux/actions/sectionActionCreators'
import MySelect from '../../MySelect/MySelect'
import { SECTION_DELETE_CHEMA } from '../../../utils/validationSchemasAdmin'
import cx from 'classnames'
import classes from './DeleteSection.module.scss'

const initialValues = {
  sectionId: ''
}

const DeleteSection = () => {
  const { section, isLoading, error } = useSelector(state => state.section)

  const dispatch = useDispatch()
  // console.log(category)
  useEffect(() => {
    requestSection()
  }, [])

  const requestSection = options => dispatch(sectionRequest(options))
  const onSubmit = (values, utils) => {
    dispatch(sectionDeleteRequest(values))

    // console.log(values);
  }

  return (
    <div>
      <h1 className={cx(classes.text)}>Видалити розділ</h1>
      {error &&
        error.map(error => (
          <div className={cx(classes.error)}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={SECTION_DELETE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={cx(classes.form)}>
          <MySelect name='sectionId' placeholder='sectionId' as='select'>
            <option value=''>виберіть розділ</option>
            {section.map(section => (
              <option key={section.id} value={JSON.stringify(section.id)}>
                {section.name}
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

export default DeleteSection
