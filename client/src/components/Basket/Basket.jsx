import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CONSTANTS from '../../constants'
import {
  basketClearRequest,
  basketMinusRequest,
  basketPlusRequest,
  basketDeleteRequest
} from '../../redux/actions/basketActionCreators'
import { Formik, Field, Form } from 'formik'

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  phone: ''
}

const Basket = () => {
  // const onSubmit = (values, utils) => {

   
  //   console.log(values);
  // }

   async function createOrder (values) {
   
    await console.log(values);
    await console.log(items[0]);
    await console.log('подожди');
    await console.log('привет');
    // await dispatch(basketClearRequest())
  }

  const basket = JSON.parse(localStorage.getItem('basket'))
  console.log(basket)
  const { items } = useSelector(state => state.basket)
  const { totalSumm } = useSelector(state => state.basket)
  console.log(items)
  // const onSubmit = (values, utils) => {

   
  //   console.log(values);
  // }
  // useEffect(() => {
  //   dispatch(setLocalStorage(window.localStorage.setItem('some-key', JSON.stringify(items))));

  // }, []);
  const dispatch = useDispatch()
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {items?.map(i => (
        <div key={i.id} style={{ display: 'flex', flexDirection: 'row' }}>
          <img
            style={{ width: '260px', height: '260px' }}
            src={CONSTANTS.HTTP_SERVER_URL_images + i.img}
            alt={i.name}
          ></img>
          <div
            style={{
              width: '150px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            название : {i.name}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              style={{ width: '20px', height: '20px' }}
              onClick={() => dispatch(basketPlusRequest(i.id))}
            >
              +
            </button>
          </div>
          <div
            style={{
              width: '150px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            количество : {i.count}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              style={{ width: '20px', height: '20px' }}
              onClick={() => dispatch(basketMinusRequest(i.id))}
            >
              -
            </button>
          </div>
          <div
            style={{
              width: '150px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            цена : {i.price}
          </div>
          <div
            style={{
              width: '150px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            сумма : {i.price * i.count}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              style={{ width: '70px', height: '20px' }}
              onClick={() => dispatch(basketDeleteRequest(i.id))}
            >
              УДАЛИТЬ
            </button>
          </div>
        </div>
      ))}
      <div>ОБЩАЯ : {totalSumm}</div>
      <div>
        <div>
          <h1>LOGIN</h1>
          <Formik initialValues={initialValues} onSubmit={createOrder}>
          {({ values }) => (
            <Form>
              <Field name='firstName' type='text' placeholder='First Name' />
              <Field name='lastName' type='text' placeholder='Last Name' />
              <Field name='email' type='email' />
              <Field name='phone' type='phone' />
              {/* <button type='submit'>LOGIN</button> */}
              <button type='submit' >оформить</button>
            </Form>
          )}
          </Formik>
        </div>
      </div>
      {/* <button onClick={() => createOrder()}>оформить</button> */}
    </div>
  )
}

export default Basket
