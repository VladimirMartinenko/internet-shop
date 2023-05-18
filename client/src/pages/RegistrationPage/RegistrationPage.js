import { Formik, Field, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthActionCreators from "../../redux/actions/authActionCreators";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import cx from "classnames";
import classes from "./RegistrationPage.module.scss";

// const initialValues = {
//   email: '',
//   password:'',
//   firstName: '',
//   lastName: '',

// };

const RegistrationPage = () => {
  // const dispatch = useDispatch();
  // const onSubmit = (values, utils) => {
  //   dispatch(AuthActionCreators.signUpRequest(values));
  //   // console.log(values);
  // };
  const { error } = useSelector((state) => state.auth);
  return (
    <div className={cx(classes.containerMain)}>
      <h1 className={cx(classes.text)}>РЕГІСТРАЦІЯ</h1>
      {error &&error.map(error => (<div className={cx(classes.error)}>{error.message}</div>))}
      <RegistrationForm />

      {/* <Formik initialValues={initialValues} onSubmit= {onSubmit}>
        <Form>
          <Field name="firstName" type="text" placeholder='First Name'/>
          <Field name="lastName" type="text" placeholder='Last Name'/>
          <Field name="email" type="email"/>
          <Field name="phone" type="phone"/>
          <Field name="password" type="password"/>
          <Field name="role" type="role"/>
          <button type="submit">LOGIN</button>
        </Form>
      </Formik> */}
    </div>
  );
};

export default RegistrationPage;
