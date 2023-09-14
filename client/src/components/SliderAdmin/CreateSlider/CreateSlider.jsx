import { Formik, Field, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productGetRequest } from '../../../redux/actions/productActionCreators'
import { SLIDER_CREATE_CHEMA } from '../../../utils/validationSchemasAdmin'
import MySelect from '../../MySelect/MySelect'
import classes from './CreateSlider.module.scss'
import { sliderCreateRequest } from '../../../redux/actions/sliderActionCreators'

const initialValues = {
  productId: ''
}
const CreateSlider = () => {
  useEffect(() => {
    requestProduct()
  }, [])

  const requestProduct = options => dispatch(productGetRequest(options))

  const { slider, isLoading, error } = useSelector(state => state.slider)

  const { product } = useSelector(state => state.products)

  const dispatch = useDispatch()
  const onSubmit = (values, utils) => {
    dispatch(sliderCreateRequest(values))
    utils.resetForm()
  }
  return (
    <section>
      <h1 className={classes.text}>Створити слайд</h1>
      {error &&
        error.map(error => <p className={classes.error}>{error.message}</p>)}
      <Formik
        initialValues={initialValues}
        validationSchema={SLIDER_CREATE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={classes.form}>
          <MySelect name='productId' placeholder='productId' as='select'>
            <option value=''>виберіть товар</option>
            {product.map(product => (
              <option key={product.id} value={JSON.stringify(product.id)}>
                {product.name}
              </option>
            ))}
          </MySelect>
          <button type='submit' className={classes.btn}>
            СТВОРИТИ
          </button>
        </Form>
      </Formik>
    </section>
  )
}

export default CreateSlider
