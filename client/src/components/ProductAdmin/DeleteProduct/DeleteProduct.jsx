import { Formik,Field, Form } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDeleteRequest,productGetRequest} from '../../../redux/actions/productActionCreators';

const initialValues = {
  productId: '',

};

const DeleteProduct = () => {
  const { product } = useSelector(state => state.product);
  const dispatch = useDispatch();
  
  useEffect(() => {
    requestProducts();
  }, []);
  const requestProducts = options => dispatch(productGetRequest(options))
console.log(product)
  // useEffect(() => {
  //   requestCategorys();
  // }, []);
  
  // const requestCategorys = (options) => dispatch(categoryRequest(options));
  const onSubmit = (values, utils) => {
    dispatch(productDeleteRequest(values));
console.log(values);

    // console.log(values);
  };

  return (
    <div>
        <h1>DELETE PRODUCT</h1>

<Formik initialValues={initialValues} onSubmit= {onSubmit}>
  <Form>
   
    <Field name="productId" placeholder='productId' as="select">
    {product.map((products) => (
  <option key={products.id} value={JSON.stringify(products.id)}>{products.name}</option>))}
    </Field>
    <button type="submit">DELETE</button>
  </Form>
</Formik>
    </div>
  );
}

export default DeleteProduct;
