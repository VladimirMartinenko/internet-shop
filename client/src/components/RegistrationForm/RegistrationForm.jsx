import { Formik, Field, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import AuthActionCreators from "../../redux/actions/authActionCreators";
import { REGISTRATION_CHEMA } from "../../utils/validationSchemas";
import Input from "../Input/Input";
import cx from "classnames";
import classes from "./RegistrationForm.module.scss";

const initialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phone: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, utils) => {
    dispatch(AuthActionCreators.signUpRequest(values));
    // console.log(values);
  };
  return (
    // <div>
    //   <h1>LOGIN</h1>

    <Formik
      initialValues={initialValues}
      validationSchema={REGISTRATION_CHEMA}
      onSubmit={onSubmit}
    >
      <Form className={cx(classes.form)}>
        <Input name="firstName" type="text" placeholder="ім'я" />
        <Input name="lastName" type="text" placeholder="фамілія" />
        <Input name="email" type="email" placeholder="email" />
        <Input name="phone" type="phone" placeholder="телефон (380)" />
        <Input name="password" type="password" placeholder="пароль" />
        {/* <Field name="role" type="role"/> */}
        <button type="submit" className={cx(classes.btn)}>
          ЗАРЕЄСТРУВАТИСЯ
        </button>
      </Form>
    </Formik>
    // </div>
  );
};

export default RegistrationForm;
