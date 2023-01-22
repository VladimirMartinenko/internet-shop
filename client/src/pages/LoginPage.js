import { Formik,Field, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import AuthActionCreators from '../redux/actions/authActionCreators';

const initialValues = {
  email: '',
  password:'',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, utils) => {
    dispatch(AuthActionCreators.loginRequest(values));
    // console.log(values);
  };
  return (
    <div>
      <h1>LOGIN</h1>

      <Formik initialValues={initialValues} onSubmit= {onSubmit}>
        <Form>
          <Field name="email" type="email"/>
          <Field name="password" type="password"/>
          <button type="submit">LOGIN</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginPage;
