import React, { useEffect, useRef, useState } from 'react'
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
import { Formik, Form, Field, useFormikContext } from 'formik'
import axios from 'axios'
import Input from '../Input/Input'
import classes from './Basket.module.scss'
import {
  getKlaviyoExchangeId,
  identifyKlaviyo,
  trackKlaviyo
} from '../../utils/klaviyo'
import { startedCheckoutPayload } from '../../utils/klaviyoPayloads'
import { lineCartKey } from '../../utils/productSizes'

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  marketingConsent: false
}

const KlaviyoCheckoutIdentify = ({ items, totalSumm }) => {
  const { values } = useFormikContext()
  const startedEmail = useRef(null)
  const identifyTimer = useRef(null)

  useEffect(() => {
    const email = values && values.email && String(values.email).trim()
    if (!email || !/.+@.+\..+/.test(email)) {
      return
    }

    clearTimeout(identifyTimer.current)
    identifyTimer.current = setTimeout(() => {
      identifyKlaviyo(values)
      if (items.length && startedEmail.current !== email) {
        startedEmail.current = email
        trackKlaviyo('Started Checkout', startedCheckoutPayload(items, totalSumm))
      }
    }, 700)

    return () => clearTimeout(identifyTimer.current)
  }, [
    values.email,
    values.firstName,
    values.lastName,
    values.phone,
    items,
    totalSumm
  ])

  return null
}

const ConsentCheckbox = () => (
  <label className={classes.consent}>
    <Field type='checkbox' name='marketingConsent' />
    <span>I want to receive news and offers by email</span>
  </label>
)

const Basket = () => {
  let [hasError, setHasError] = useState(null)
  let [Error, setError] = useState(null)
  let [Message, setMessage] = useState(null)
  const { user } = useSelector(state => state.auth)
  const { items, totalSumm } = useSelector(state => state.basket)
  const { buyer } = useSelector(state => state.buyer)

  async function examinationBasket () {
    items?.map(async items => {
      try {
        await httpClient.get(`product/${items.id}`, console.log(items.id))
      } catch (err) {
        dispatch(basketDelete(lineCartKey(items)))
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
    console.log('ghgh');
    try {
      const { marketingConsent, ...buyerFields } = values
      identifyKlaviyo(buyerFields)
      trackKlaviyo('Started Checkout', startedCheckoutPayload(items, totalSumm))
      const kx = getKlaviyoExchangeId()
      let res = await httpClient.post(
        `buyer`,
        { ...buyerFields, _kx: kx },
        console.log(values)
      )
      let order = await httpClient.post(
        `order/buyer?sum=${totalSumm}`,
        res.data.data
      )
      await Promise.all(
        items.map(product =>
          httpClient.post(
            `productToOrder/${order.data.data.id}/${product.id}?quantity=${product.count}${
              product.size ? `&size=${encodeURIComponent(product.size)}` : ''
            }`
          )
        )
      )
      try {
        await httpClient.post(`order/${order.data.data.id}/placed`, {
          _kx: kx,
          marketingConsent: Boolean(marketingConsent)
        })
      } catch (klaviyoError) {
        console.error(klaviyoError)
      }
      data.append('firstName', values.firstName)
      data.append('lastName', values.lastName)
      data.append('phone', values.phone)
      data.append('email', values.email)
      data.append('order', order.data.data.id)
      data.append('products', JSON.stringify(items))
      for (const [key, value] of data) {
        console.log(`${key}: ${value}\n`)
      }
      await httpClient.post(`mailer`, data, console.log(data))
      // await httpClient.post(`mailer`)
      await dispatch(basketClear())
      await setMessage('order created successfully')
    } catch (err) {
      console.log(err)
      if (err.response.status === 500) {
        setHasError('problem creating the order')
      } else {
        setError(err.response.data.errors)
      }
    }
  }

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
    <section>
      {hasError && <div className={classes.error}>{hasError}</div>}
      {Error &&
        Error.map(error => <p className={classes.error}>{error.message}</p>)}
      {Message && <p className={classes.valid}>{Message}</p>}
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
                  <KlaviyoCheckoutIdentify items={items} totalSumm={totalSumm} />
                  <Input
                    name='firstName'
                    type='text'
                    placeholder="First name"
                    value={buyer.firstName || ''}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdate(e.target))}
                  />
                  <Input
                    name='lastName'
                    type='text'
                    placeholder='Last name'
                    value={buyer.lastName || ''}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdate(e.target))}
                  />
                  <Input
                    name='email'
                    type='email'
                    placeholder='email'
                    value={buyer.email || ''}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdate(e.target))}
                  />
                  <Input
                    name='phone'
                    type='phone'
                    placeholder='Phone (380)'
                    value={buyer.phone || ''}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdate(e.target))}
                  />
                  <ConsentCheckbox />
                  {/* <button type='submit'>LOGIN</button> */}
                  <button type='submit' className={classes.btn}>
                    CHECKOUT
                  </button>
                </Form>
              )
            : ({ values }) => (
                <Form className={classes.form}>
                  <KlaviyoCheckoutIdentify items={items} totalSumm={totalSumm} />
                  <Input name='firstName' type='text' placeholder="First name" />
                  <Input name='lastName' type='text' placeholder='Last name' />
                  <Input name='email' type='email' placeholder='email' />
                  <Input name='phone' type='phone' placeholder='Phone (380)' />
                  <ConsentCheckbox />
                  <button type='submit' className={classes.btn}>
                    CHECKOUT
                  </button>
                </Form>
              )}
        </Formik>
      </div>
    </section>
  )
}

export default Basket
