import { Formik, Field, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MySelect from '../../MySelect/MySelect'
import { SLIDER_DELETE_CHEMA } from '../../../utils/validationSchemasAdmin'
import cx from 'classnames'
import classes from './DeleteSlider.module.scss'
import { sliderDeleteRequest, sliderGetRequest } from '../../../redux/actions/sliderActionCreators'

const initialValues = {
  sliderId: ''
}

const DeleteSlider = () => {
  const { slider, isLoading, error } = useSelector(state => state.slider)
  console.log(slider)
  const dispatch = useDispatch()
  // console.log(category)
  useEffect(() => {
    requestSlider()
  }, [])

  const requestSlider = options => dispatch(sliderGetRequest(options))
  const onSubmit = (values, utils) => {
    dispatch(sliderDeleteRequest(values))
    utils.resetForm()
  }

  return (
    <div>
      <h1 className={cx(classes.text)}>Видалити слайд</h1>
      {error &&
        error.map(error => (
          <div className={cx(classes.error)}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={SLIDER_DELETE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={cx(classes.form)}>
          <MySelect name='sliderId' placeholder='sliderId' as='select'>
            <option value=''>виберіть розділ</option>
            {slider.map(slider => (
              <option key={slider.id} value={JSON.stringify(slider.id)}>
                {slider.Product.name}
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

export default DeleteSlider
