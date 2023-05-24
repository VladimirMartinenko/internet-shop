import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import CONSTANTS from '../../constants'
import BasketItems from '../BasketItems/BasketItems'
import { BAYER_CHEMA } from '../../utils/validationSchemas'
import {
  basketClearRequest,
  basketMinusRequest,
  basketPlusRequest,
  basketDeleteRequest
} from '../../redux/actions/basketActionCreators'
import {
  buyerCreateRequest,
  buyerLocalUpdateRequest
} from '../../redux/actions/buyerActionCreators'
import { Formik, Field, Form, useFormikContext } from 'formik'
import axios from 'axios'
import Input from '../Input/Input'
import cx from 'classnames'
import classes from './Basket.module.scss'

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  phone: ''
}

const Basket = () => {
  const { user } = useSelector(state => state.auth)
  console.log(user)
  useEffect(() => {
    dispatch(buyerCreateRequest(user))
  }, [])
  // const onSubmit = (values, utils) => {
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
    // await dispatch(buyerCreateRequest(values))
    let res = await httpClient.post(`buyer`, values, console.log(values))
    let order = await httpClient.post(`order/buyer`, res.data.data)
    await items.map(product =>
      httpClient.post(
        `productToOrder/${order.data.data.id}/${product.id}?quantity=${product.quantity}`
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
    await httpClient.post(`mailer`, data)
  }
  const { buyer } = useSelector(state => state.buyer)
  console.log(buyer)
  const basket = JSON.parse(localStorage.getItem('basket'))
  console.log(basket)
  const { items } = useSelector(state => state.basket)
  const { totalSumm } = useSelector(state => state.basket)

  const handlValueChanges = (value, products) => {
    console.log(value.target.name)
    value.target.value = ''
  }
  const handlValueChange = value => {
    if (value.target.value === '') {
      value.target.value = buyer.name
    }
  }
  const dispatch = useDispatch()
  return (
    // <div style={{ display: 'flex', flexDirection: 'column' }}>
    //   {items?.map(i => (
    //     <div key={i.id} style={{ display: 'flex', flexDirection: 'row' }}>
    //       <img
    //         style={{ width: '260px', height: '260px' }}
    //         src={CONSTANTS.HTTP_SERVER_URL_images + i.img}
    //         alt={i.name}
    //       ></img>
    //       <div
    //         style={{
    //           width: '150px',
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center'
    //         }}
    //       >
    //         название : {i.name}
    //       </div>
    //       <div style={{ display: 'flex', alignItems: 'center' }}>
    //         <button
    //           style={{ width: '20px', height: '20px' }}
    //           onClick={() => dispatch(basketPlusRequest(i.id))}
    //         >
    //           +
    //         </button>
    //       </div>
    //       <div
    //         style={{
    //           width: '150px',
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center'
    //         }}
    //       >
    //         количество : {i.count}
    //       </div>
    //       <div style={{ display: 'flex', alignItems: 'center' }}>
    //         <button
    //           style={{ width: '20px', height: '20px' }}
    //           onClick={() => dispatch(basketMinusRequest(i.id))}
    //         >
    //           -
    //         </button>
    //       </div>
    //       <div
    //         style={{
    //           width: '150px',
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center'
    //         }}
    //       >
    //         цена : {i.price}
    //       </div>
    //       <div
    //         style={{
    //           width: '150px',
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center'
    //         }}
    //       >
    //         сумма : {i.price * i.count}
    //       </div>
    //       <div style={{ display: 'flex', alignItems: 'center' }}>
    //         <button
    //           style={{ width: '70px', height: '20px' }}
    //           onClick={() => dispatch(basketDeleteRequest(i.id))}
    //         >
    //           УДАЛИТЬ
    //         </button>
    //       </div>
    //     </div>
    //   ))}
    //   <div>ОБЩАЯ : {totalSumm}</div>

    <div>
      <BasketItems />
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={BAYER_CHEMA}
          onSubmit={createOrder}
        >
          {buyer
            ? ({ values }) => (
                <Form className={cx(classes.form)}>
                  <AutoSubmitToken />
                  <Input
                    name='firstName'
                    type='text'
                    placeholder="І'мя"
                    value={buyer.firstName}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdateRequest(e.target))}
                  />
                  <Input
                    name='lastName'
                    type='text'
                    placeholder='Фамілія'
                    value={buyer.lastName}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdateRequest(e.target))}
                  />
                  <Input
                    name='email'
                    type='email'
                    placeholder='email'
                    value={buyer.email}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdateRequest(e.target))}
                  />
                  <Input
                    name='phone'
                    type='phone'
                    placeholder='телефон'
                    value={buyer.phone}
                    onFocus={e => handlValueChanges(e)}
                    // onBlur={e => handlValueChange(e)}
                    onChange={e => dispatch(buyerLocalUpdateRequest(e.target))}
                  />
                  {/* <button type='submit'>LOGIN</button> */}
                  <button type='submit'>оформить</button>
                </Form>
              )
            : ({ values }) => (
                <Form className={cx(classes.form)}>
                  <Input name='firstName' type='text' placeholder="І'мя" />
                  <Input name='lastName' type='text' placeholder='Фамілія' />
                  <Input name='email' type='email' placeholder='email' />
                  <Input name='phone' type='phone' placeholder='телефон' />
                  {/* <button type='submit'>LOGIN</button> */}
                  <button type='submit' className={cx(classes.btn)}>
                    ОФОРМИТИ
                  </button>
                </Form>
              )}
        </Formik>
      </div>
    </div>
    // </div>
  )
}
// const mapStateToProps = state => {
//   return {
//     user: state.auth.user
//   }
// }

// export default connect(mapStateToProps)(Basket)

export default Basket
