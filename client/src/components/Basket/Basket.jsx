import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CONSTANTS from '../../constants'
import BasketItems from '../BasketItems/BasketItems'
import { BAYER_CHEMA } from '../../utils/validationSchemas'
import {
  basketClear,
  basketDelete
} from '../../redux/actions/basketActionCreators'
import {
  buyerCreate,
  buyerLocalUpdate
} from '../../redux/actions/buyerActionCreators'
import { Formik, Form, useFormikContext } from 'formik'
import axios from 'axios'
import Input from '../Input/Input'
import classes from './Basket.module.scss'

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  phone: ''
}

const Basket = () => {
  let [hasError, setHasError] = useState(null)
  let [Error, setError] = useState(null)
  let [Message, setMessage] = useState(null)
  const { user } = useSelector(state => state.auth)
  const { items } = useSelector(state => state.basket)

  async function examinationBasket () {
    items?.map(async items => {
      try {
        await httpClient.get(`product/${items.id}`, console.log(items.id))
      } catch (err) {
        dispatch(basketDelete(items.id))
      }
    })
  }
  useEffect(() => {
    examinationBasket()
  }, [])
  
  useEffect(() => {
    dispatch(buyerCreate(user))
  }, [])
  const AutoSubmitToken = () => {
    const { setFieldValue } = useFormikContext()
    useEffect(() => {
      setFieldValue('firstName', buyer.firstName)
      setFieldValue('lastName', buyer.lastName)
      setFieldValue('email', buyer.email)
      setFieldValue('phone', buyer.phone)
    }, [buyer])
  }

  const httpClient = axios.create({
    baseURL: CONSTANTS.HTTP_SERVER_URL
  })
  const data = new FormData()

  async function createOrder (values) {
    try {
      let res = await httpClient.post(`buyer`, values, console.log(values))
      let order = await httpClient.post(
        `order/buyer?sum=${totalSumm}`,
        res.data.data
      )
      await items.map(product =>
        httpClient.post(
          `productToOrder/${order.data.data.id}/${product.id}?quantity=${product.count}`
        )
      )
      data.append('firstName', values.firstName)
      data.append('lastName', values.lastName)
      data.append('phone', values.phone)
      data.append('email', values.email)
      data.append('order', order.data.data.id)
      data.append('products', JSON.stringify(items))
      for (const [key, value] of data) {
        console.log(`${key}: ${value}\n`)
      }
      await httpClient.post(`mailer`, data ,console.log(data))
      await dispatch(basketClear())
      await setMessage('замовлення створено успішно')
    } catch (err) {
      if (err.response.status === 500) {
        setHasError('проблема при створенні');
        console.log(err);
      } else {
        setError(err.response.data.errors)
      }
    }
  }

  const { buyer } = useSelector(state => state.buyer)
  const basket = JSON.parse(localStorage.getItem('basket'))
  const { totalSumm } = useSelector(state => state.basket)

  const handlValueChanges = (value, products) => {
    value.target.value = ''
  }
  const handlValueChange = value => {
    if (value.target.value === '') {
      value.target.value = buyer.name
    }
  }
  const dispatch = useDispatch()
  return (
    <div>
      {hasError && <div className={classes.error}>{hasError}</div>}
      {Error &&
        Error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))}
      {Message && <div className={classes.valid}>{Message}</div>}
      <BasketItems />
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={BAYER_CHEMA}
          onSubmit={createOrder}
        >
          {buyer
            ? ({ values }) => (
                <Form className={classes.form}>
                  <AutoSubmitToken />
                  <Input
                    name='firstName'
                    type='text'
                    placeholder="І'мя"
                    value={buyer.firstName || ""}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdate(e.target))}
                  />
                  <Input
                    name='lastName'
                    type='text'
                    placeholder='Фамілія'
                    value={buyer.lastName || ""}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdate(e.target))}
                  />
                  <Input
                    name='email'
                    type='email'
                    placeholder='email'
                    value={buyer.email || ""}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdate(e.target))}
                  />
                  <Input
                    name='phone'
                    type='phone'
                    placeholder='телефон(380)'
                    value={buyer.phone || ""}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdate(e.target))}
                  />
                  {/* <button type='submit'>LOGIN</button> */}
                  <button type='submit' className={classes.btn}>
                    ОФОРМИТИ
                  </button>
                </Form>
              )
            : ({ values }) => (
                <Form className={classes.form}>
                  <Input name='firstName' type='text' placeholder="І'мя" />
                  <Input name='lastName' type='text' placeholder='Фамілія' />
                  <Input name='email' type='email' placeholder='email' />
                  <Input name='phone' type='phone' placeholder='телефон(380)' />
                  <button type='submit' className={classes.btn}>
                    ОФОРМИТИ
                  </button>
                </Form>
              )}
        </Formik>
      </div>
    </div>
  )
}

export default Basket
