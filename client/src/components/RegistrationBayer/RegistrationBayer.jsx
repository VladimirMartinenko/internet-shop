import { Formik,Field, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';


const initialValues = {
  email: '',
  password:'',
  firstName: '',
  lastName: '',

};

const RegistrationBayer = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, utils) => {
    dispatch(); 
    // console.log(values);
  };
  return (
    <div>
      <h1>LOGIN</h1>

      <Formik initialValues={initialValues} onSubmit= {onSubmit}>
        <Form>
          <Field name="firstName" type="text" placeholder='First Name'/>
          <Field name="lastName" type="text" placeholder='Last Name'/>
          <Field name="email" type="email"/>
          <Field name="phone" type="phone"/>
          <button type="submit">LOGIN</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegistrationBayer;