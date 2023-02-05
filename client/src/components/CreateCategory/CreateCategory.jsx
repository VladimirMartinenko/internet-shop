import { Formik,Field, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import {categoryCreateRequest} from '../../redux/actions/categoryAction';


const initialValues = {
  name: '',

};
const CreateCategory = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, utils) => {
    dispatch(categoryCreateRequest(values));
    // console.log(values);
  };
  return (
    <div>
      <h1>CREATE CATEGORY</h1>

      <Formik initialValues={initialValues} onSubmit= {onSubmit}>
        <Form>
          <Field name="name" type="text" placeholder='category'/>
          <button type="submit">CREATE</button>
        </Form>
      </Formik>
    </div>
  );

}

export default CreateCategory;
