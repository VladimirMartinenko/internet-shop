import { Formik, Field, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  productDeleteRequest,
  productGetRequest
} from '../../../redux/actions/productActionCreators'
import classes from './DeleteProduct.module.scss'
import MySelect from '../../MySelect/MySelect'
import { PRODUCT_DELETE_CHEMA } from '../../../utils/validationSchemasAdmin'

const initialValues = {
  productId: ''
}

const DeleteProduct = () => {
  const { product, isLoading, error } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    requestProducts()
  }, [])
  const requestProducts = options => dispatch(productGetRequest(options))
  const onSubmit = (values, utils) => {
    dispatch(productDeleteRequest(values))
  }

  return (
    <div>
      <h1 className={classes.text}>ВИДАЛИТИ ТОВАР</h1>
      {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={PRODUCT_DELETE_CHEMA}
        onSubmit={onSubmit}
      >
        <Form className={classes.form}>
          <MySelect name='productId' placeholder='productId' as='select'>
            <option value=''>виберіть товар</option>
            {product.map(products => (
              <option key={products.id} value={JSON.stringify(products.id)}>
                {products.name}
              </option>
            ))}
          </MySelect>
          <button className={classes.btn} type='submit'>
            ВИДАЛИТИ
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default DeleteProduct
