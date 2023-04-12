import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import CONSTANTS from '../../constants'
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

  //   console.log(values);
  // }
  const httpClient = axios.create({
    baseURL: CONSTANTS.HTTP_SERVER_URL
  })
  const data = new FormData();
  async function createOrder (values) {
    // await dispatch(buyerCreateRequest(values))
    let res = await httpClient.post(`buyer`, values, console.log(values))
    let order = await httpClient.post(`order/buyer`, res.data.data)
    await items.map(product =>
      httpClient.post(
        `productToOrder/${order.data.data.id}/${product.id}?quantity=${product.quantity}`
      )
    )
      // function addMailer(values,order,items){
      // console.log(values.name);
      // props.clearOfferError();
      
      // const { contestId, contestType, customerId } = props;
      data.append('firstName', values.firstName);
      data.append('lastName',values.lastName);
      data.append('phone', values.phone);
      data.append('email', values.email);
      data.append('order',order.data.data.id);
      data.append('products', JSON.stringify(items));
      for (const [key, value] of data) {
        console.log(`${key}: ${value}\n`);
        
      }
      await httpClient.post(`mailer`,data)
     
    //  }
    //  httpClient.post(`mailer`,data)
     
    // .then(res=>{console.log(res);items&&items.map(product=>httpClient.post(`productToOrderRouter`,(res.data.data,product,product.quantity)))})
    // .then(res=>{console.log(res)});
    // await console.log();
    // await console.log(items[0]);
    // await console.log('подожди');
    // await console.log('привет');
    // await dispatch(basketClearRequest())
  }
  const { buyer } = useSelector(state => state.buyer)
  const basket = JSON.parse(localStorage.getItem('basket'))
  console.log(basket)
  const { items } = useSelector(state => state.basket)
  const { totalSumm } = useSelector(state => state.basket)

  // const onSubmit = (values, utils) => {

  //   console.log(values);
  // }
  const handlValueChanges = (value, products) => {
    // if (value.target.value === products) {value.target.value = ''}
    // console.log(value.target.value)
    // v=null;
    console.log(value.target.name)
    value.target.value = ''
  }
  const handlValueChange = value => {
    if (value.target.value === '') {
      value.target.value = buyer.name
    }
    console.log('пока')
    // value.target.value=products.name;
  }
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
            {buyer
              ? ({ values }) => (
                  <Form>
                    <AutoSubmitToken />
                    <Field
                      name='firstName'
                      type='text'
                      placeholder='firstName'
                      value={buyer.firstName}
                      onFocus={e => handlValueChanges(e)}
                      onBlur={e => handlValueChange(e)}
                      onChange={e =>
                        dispatch(buyerLocalUpdateRequest(e.target))
                      }
                    />
                    <Field
                      name='lastName'
                      type='text'
                      placeholder='lastName'
                      value={buyer.lastName}
                      onFocus={e => handlValueChanges(e)}
                      onBlur={e => handlValueChange(e)}
                      onChange={e =>
                        dispatch(buyerLocalUpdateRequest(e.target))
                      }
                    />
                    <Field
                      name='email'
                      type='email'
                      value={buyer.email}
                      onFocus={e => handlValueChanges(e)}
                      onBlur={e => handlValueChange(e)}
                      onChange={e =>
                        dispatch(buyerLocalUpdateRequest(e.target))
                      }
                    />
                    <Field
                      name='phone'
                      type='phone'
                      value={buyer.phone}
                      onFocus={e => handlValueChanges(e)}
                      onBlur={e => handlValueChange(e)}
                      onChange={e =>
                        dispatch(buyerLocalUpdateRequest(e.target))
                      }
                    />
                    {/* <button type='submit'>LOGIN</button> */}
                    <button type='submit'>оформить</button>
                  </Form>
                )
              : ({ values }) => (
                  <Form>
                    <Field
                      name='firstName'
                      type='text'
                      placeholder='First Name'
                    />
                    <Field
                      name='lastName'
                      type='text'
                      placeholder='Last Name'
                    />
                    <Field name='email' type='email' />
                    <Field name='phone' type='phone' />
                    {/* <button type='submit'>LOGIN</button> */}
                    <button type='submit'>оформить</button>
                  </Form>
                )}
          </Formik>
        </div>
      </div>
      {/* <button onClick={() => createOrder()}>оформить</button> */}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Basket)

// export default Basket
