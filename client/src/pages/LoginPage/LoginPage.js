// import { Formik,Field, Form } from 'formik';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import AuthActionCreators from '../../redux/actions/authActionCreators';
import cx from "classnames";
import classes from './LoginPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm'
import { useSelector } from 'react-redux';

// const initialValues = {
//   email: '',
//   password:'',
// };

const LoginPage = () => {
  // const dispatch = useDispatch();
  // const onSubmit = (values, utils) => {
  //   dispatch(AuthActionCreators.loginRequest(values));
  //   console.log(values);
  // };
  const { error } = useSelector(state => state.auth);
  return (
    <div className={cx(classes.containerMain)} >
      <h1 className={cx(classes.text)}>ВХІД</h1>
      {/* {error && <div>{error.message}</div>} */}
      {error &&error.map(error => (<div className={cx(classes.error)}>{error.message}</div>))}

      {/* <Formik initialValues={initialValues} onSubmit= {onSubmit}>
        <Form  className={cx(classes.form)}>
          <Field name="email" type="email" className={cx(classes.input)} placeholder='email'/>
          <Field name="password" type="password" placeholder='password' className={cx(classes.input)}/>
          <button  className={cx(classes.btn)} type="submit">ВОЙТИ</button>
        </Form>
      </Formik> */}
      <LoginForm/>
    </div>
  );
}

export default LoginPage;
