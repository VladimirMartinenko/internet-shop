import { Formik, Form } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import AuthActionCreators from '../../redux/actions/authActionCreators'
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
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LOGIN_CHEMA}
      onSubmit={onSubmit}
    >
      <Form className={classes.form}>
        <Input name='email' placeholder='email' type='email' />
        <Input name='password' placeholder='password' type='password' />
        <button className={classes.btn} type='submit'>
          ВВІЙТИ
        </button>
      </Form>
    </Formik>
  )
}

export default LoginPage
