import { Formik, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MySelect from '../../MySelect/MySelect'
import { SLIDER_DELETE_CHEMA } from '../../../utils/validationSchemasAdmin'
import classes from './DeleteSlider.module.scss'
import {
  sliderDeleteRequest,
  sliderGetRequest
} from '../../../redux/actions/sliderActionCreators'

const initialValues = {
  sliderId: ''
}

const DeleteSlider = () => {
  const { slider, isLoading, error } = useSelector(state => state.slider)
  const dispatch = useDispatch()
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
      <h1 className={classes.text}>Видалити слайд</h1>
      {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={SLIDER_DELETE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={classes.form}>
          <MySelect name='sliderId' placeholder='sliderId' as='select'>
            <option value=''>виберіть розділ</option>
            {slider.map(slider => (
              <option key={slider.id} value={JSON.stringify(slider.id)}>
                {slider.Product.name}
              </option>
            ))}
          </MySelect>
          <button type='submit' className={classes.btn}>
            Видалити
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default DeleteSlider
