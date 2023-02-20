import { Formik, Field, Form, FieldArray } from 'formik'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productCreateRequest } from '../../../redux/actions/productActionCreators'

const initialValues = {
  name: '',
  price: '',
  quantity: '',
  categoryId: '',
  brand: '',
  img: '',
  info: [
    {
      title: '',
      description: ''
    }
  ]
}

// const data = new FormData();
// initialValues.append("name",name);
// initialValues.append("price",price);

const CreateProduct = () => {
  const { category } = useSelector(state => state.category)
  const { product } = useSelector(state => state.product)

  // const info=[
  //   {
  //           title:'',
  //           description:'',
  //           number: Date.now()
  //     }
  // ];
  //  const addInfo=function(info){return [...info,{title: '',description: '', number: Date.now()}]};
  //  const addInfo=()=> {initialValues.info.push({title: '',description: '', number: Date.now()});console.log(initialValues.info);};
  //  console.log(initialValues.info);
  //  const removeInfo=(number)=>{initialValues.info.filter(i=>i.number !== number)}
  //  // let i = e =>{
  //   let formData = new FormData();
  // formData.append('img',e.target.files[0])
  // };
  // useEffect(() => {
  //   addInfo()
  // }, []);

  const dispatch = useDispatch()
  // const onSubmit = (values, utils) => {
  //   dispatch(productCreateRequest(values))

  // }

  const addProduct = (values, { resetForm }) => {
    // console.log(values.name);
    // props.clearOfferError();
    const data = new FormData()
    // const { contestId, contestType, customerId } = props;
    data.append('name', values.name)
    data.append('price', `${values.price}`)
    data.append('quantity', `${values.quantity}`)
    data.append('categoryId', values.categoryId)
    data.append('brand', values.brand)
    data.append('img', document.getElementsByName('img')[0].files[0])
    data.append('info', JSON.stringify(values.info))
    // props.setNewOffer(data);
    for (const [key, value] of data) {
      console.log(`${key}: ${value}\n`)
    }
    // console.log(values.info);
    // const dispatch = useDispatch;
    dispatch(productCreateRequest(data))
  }

  return (
    <div>
      <h1>CREATE PRODUCT</h1>

      <Formik initialValues={initialValues} onSubmit={addProduct}>
        {({ values }) => (
          <Form>
            <Field name='productId' placeholder='productId' as='select'>
              {product.map(products => (
                <option key={products.id} value={JSON.stringify(products.id)} onChange>
                  {products.name}
                </option>
              ))}
            </Field>
            <Field name='name' type='text' placeholder='name' />
            <Field name='price' type='text' placeholder='price' />
            <Field name='quantity' type='text' placeholder='quantity' />
            <Field name='categoryId' placeholder='category' as='select'>
              {category.map(category => (
                <option key={category.id} value={JSON.stringify(category.id)}>
                  {category.name}
                </option>
              ))}
            </Field>
            <Field name='brand' type='text' placeholder='brand' />
            <Field name='img' type='file' placeholder='img' />
            {/* <Fragment>
        <button type="button" onClick={addInfo}>Добавить Характеристику</button>
        {initialValues.info.map((i) =>(
          <Fragment key ={i.number}>
          <Field  name={`info[${0}].title`} type="text"></Field>
          <Field  name={`info[${0}].description`} type="text"></Field>
          <button type="button" onClick={removeInfo}>Удалить Характеристику</button>
          </Fragment>
          ))}
          <button type="submit">CREATE</button>
          </Fragment> */}
            <FieldArray
              name='info'
              render={arrayHelpers => (
                <div>
                  {values.info.map((inf, index) => (
                    <div key={index}>
                      {/** both these conventions do the same */}
                      <Field name={`info[${index}].title`} />
                      <Field name={`info.${index}.description`} />

                      <button
                        type='button'
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type='button'
                    onClick={() =>
                      arrayHelpers.push({ title: '', description: '' })
                    }
                  >
                    +
                  </button>

                  <button
                    type='button'
                    onClick={() => console.log(arrayHelpers)}
                  >
                    arrayHelpers
                  </button>
                </div>
              )}
            />
            <button type='submit'>CREATE</button>

            {/* <button type="button" onClick={()=>console.log(initialValues.info)}>info</button> */}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreateProduct
