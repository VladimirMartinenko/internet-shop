import { Formik, Field, Form } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import AuthActionCreators from '../../redux/actions/authActionCreators'
import cx from 'classnames'
import classes from './LoginForm.module.scss'
import { LOGIN_CHEMA } from '../../utils/validationSchemas'
import Input from '../Input/Input'

const initialValues = {
  email: '',
  password: ''
}

const LoginPage = () => {
  const dispatch = useDispatch()
  const onSubmit = (values, utils) => {
    dispatch(AuthActionCreators.loginRequest(values))
    console.log(values)
  }
  return (
    <Formik initialValues={initialValues} 
    validationSchema={LOGIN_CHEMA}
    onSubmit={onSubmit}>
      <Form className={cx(classes.form)}>
        {/* <Field
          name='email'
          type='email'
          className={cx(classes.input)}
          placeholder='email'
        /> */}
         <Input name="email" placeholder="email" type='email'/>
        {/* <Field
          name='password'
          type='password'
          placeholder='password'
          className={cx(classes.input)}
        /> */}
         <Input name="password" placeholder="password" type="password" />
        <button className={cx(classes.btn)} type='submit'>
          ВВІЙТИ
        </button>
      </Form>
    </Formik>
  )
}

export default LoginPage
