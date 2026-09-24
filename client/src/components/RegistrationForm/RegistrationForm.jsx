import { Formik, Field, Form } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import AuthActionCreators from '../../redux/actions/authActionCreators'
import { REGISTRATION_CHEMA } from '../../utils/validationSchemas'
import Input from '../Input/Input'
import classes from './RegistrationForm.module.scss'

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  phone: ''
}

const RegistrationForm = () => {
  const dispatch = useDispatch()
  const onSubmit = (values, utils) => {
    dispatch(AuthActionCreators.signUpRequest(values))
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={REGISTRATION_CHEMA}
      onSubmit={onSubmit}
    >
      <Form className={classes.form}>
        <Input name='firstName' type='text' placeholder="first name" />
        <Input name='lastName' type='text' placeholder='last name' />
        <Input name='email' type='email' placeholder='email' />
        <Input name='phone' type='phone' placeholder='phone (380)' />
        <Input name='password' type='password' placeholder='password' />
        <button type='submit' className={classes.btn}>
          REGISTER
        </button>
      </Form>
    </Formik>
  )
}

export default RegistrationForm
