import { Formik, Field, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
categoryUpdateRequest
} from '../../redux/actions/categoryAction'

const initialValues = {
  categoryId: '',
  name: ''
}

const UpdateCategory = () => {
  const { category } = useSelector(state => state.category)

  const dispatch = useDispatch()
  // console.log(category)
  // useEffect(() => {
  //   requestCategorys();
  // }, []);

  // const requestCategorys = (options) => dispatch(categoryRequest(options));
  const onSubmit = (values, utils) => {
    dispatch(categoryUpdateRequest(values))

    // console.log(values);
  }

  return (
    <div>
      <h1>UPDATE CATEGORY</h1>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name='name' type='text' placeholder='category' />
          <Field name='categoryId' placeholder='categoryId' as='select'>
            {category.map(category => (
              <option key={category.id} value={JSON.stringify(category.id)}>
                {category.name}
              </option>
            ))}
          </Field>
          <button type='submit'>UPDATE</button>
        </Form>
      </Formik>
    </div>
  )
}

export default UpdateCategory
