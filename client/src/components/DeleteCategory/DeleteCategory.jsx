import { Formik,Field, Form } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {categoryDeleteRequest, categoryRequest} from '../../redux/actions/categoryAction';

const initialValues = {
  categoryId: '',

};

const DeleteCategory = () => {
  const { category } = useSelector(state => state.category);

  const dispatch = useDispatch();
// console.log(category)
  // useEffect(() => {
  //   requestCategorys();
  // }, []);
  
  // const requestCategorys = (options) => dispatch(categoryRequest(options));
  const onSubmit = (values, utils) => {
    dispatch(categoryDeleteRequest(values));


    // console.log(values);
  };

  return (
    <div>
        <h1>DELETE CATEGORY</h1>

<Formik initialValues={initialValues} onSubmit= {onSubmit}>
  <Form>
   
    <Field name="categoryId" placeholder='categoryId' as="select">
    {category.map((category) => (
  <option key={category.id} value={JSON.stringify(category.id)}>{category.name}</option>))}
    </Field>
    <button type="submit">DELETE</button>
  </Form>
</Formik>
    </div>
  );
}

export default DeleteCategory;
