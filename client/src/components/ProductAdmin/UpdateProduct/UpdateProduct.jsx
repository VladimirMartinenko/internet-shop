import { Formik, Field, Form, FieldArray, useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  productUpdateRequest,
  productGetByIdRequest,
  productLocalUpdateRequest
} from '../../../redux/actions/productActionCreators'
import MySelect from '../../MySelect/MySelect'
import Input from '../../Input/Input'
import cx from 'classnames'
import classes from './UpdateProduct.module.scss'
import { PRODUCT_UPDATE_CHEMA } from '../../../utils/validationSchemasAdmin'

// const FieldSelect =({name})=> {
//   const [field, meta, helpers] = useField(name);
// return(
//   <>
//   <input
//   // name={name}
//   // value={field.value}
//   onChange={(name)=>{console.log(name)}}/>
//   </>
// )
// }

// const FormSelect = ({ name, options }) => {

// const arr=[];
// options.map((product) => {
//     return arr.push({value: product.id, label: product.name});
//   });
//   // const { product } = useSelector(state => state.product);
//   const [field, meta, helpers] = useField(name);
//   // console.log(meta)
//   const Changes =(value)=>{helpers.setValue(value);
//   console.log(value.value)
// }
//   return (
//     <>
//       <Select
//         name={name}
//         value={field.value}
//         onChange={Changes}
//         options={arr}
//         onBlur={() => helpers.setTouched(true)}
//       />
//           </>
//   );
// };

const initialValues = {
  productId: '',
  name: '',
  price: '',
  quantity: '',
  categoryId: '',
  brand: '',
  img: '',
  info: [
    {
      title: '',
      description: '',
      id: ''
    }
  ]
}

const UpdateProduct = () => {
  const { category } = useSelector(state => state.category)
  const { product, isLoading, error } = useSelector(state => state.products)
  const { products } = useSelector(state => state.product)
  console.log(products)
  const AutoSubmitToken = () => {
    const { setFieldValue } = useFormikContext()
    useEffect(() => {
      setFieldValue('name', products.name)
      setFieldValue('price', products.price)
      setFieldValue('quantity', products.quantity)
      setFieldValue('quantity', products.quantity)
      setFieldValue('categoryId', products.categoryId)
      setFieldValue('brand', products.brand)
      products.ProductInfos?.map((info, index) => {
        setFieldValue(`info[${index}].title`, info.title)
        setFieldValue(`info.${index}.description`, info.description)
        setFieldValue(`info.${index}.id`, info.id)
      })
      // // changeValue(formikProps)
    }, [products])
  }
  // const changeValue=(formikProps)=>{formikProps.setFieldValue('name',products.name)}

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
  //   dispatch(productUpdateRequest(values))

  // let v=products.name;
  // const formikProps = useFormikContext();
  const addProduct = (values, { resetForm }) => {
    console.log(document.getElementsByName('img')[1].value)
    // props.clearOfferError();
    const data = new FormData()
    // const { contestId, contestType, customerId } = props;
    data.append('name', values.name)
    data.append('price', `${values.price}`)
    data.append('quantity', `${values.quantity}`)
    data.append('categoryId', values.categoryId)
    data.append('brand', values.brand)
    if (document.getElementsByName('img')[1].value === '') {
      data.append('img', products.img)
    } else {
      data.append('img', document.getElementsByName('img')[1].value)
    }

    // console.log(updateProducts);
    // console.log(updateProductss);
    data.append('info', JSON.stringify(values.info))
    // props.setNewOffer(data);
    for (const [key, value] of data) {
      console.log(`${key}: ${value}\n`)
    }
    // console.log(values.info);
    // const dispatch = useDispatch;
    dispatch(productUpdateRequest(data, values.productId))
  }
  const handleProductChange = (values, formikProps) => {
    console.log(values)
    // v=products.name
    //userId is the new selected userId
    dispatch(productGetByIdRequest(values.productId))
    // formikProps.setFieldValue('name',products.name);
    // formikProps.setFieldValue('price',products.price);
    // console.log(formikProps)
  }
  const handlValueChanges = (value, products) => {
    // if (value.target.value === products) {value.target.value = ''}
    // console.log(value.target.value)
    // v=null;
    console.log(value.target.name)
    value.target.value = ''
  }
  const handlValueChange = value => {
    if (value.target.value === '') {
      value.target.value = products.name
    }
    console.log('пока')
    // value.target.value=products.name;
  }

  return (
    <div>
      <h1 className={cx(classes.text)}>ОНОВИТИ ТОВАР</h1>
      {error &&
        error.map(error => (
          <div className={cx(classes.error)}>{error.message}</div>
        ))}
      <Formik initialValues={initialValues} 
      validationSchema={PRODUCT_UPDATE_CHEMA}
      onSubmit={addProduct}>
        {formikProps => {
          console.log(formikProps)

          return (
            <Form className={cx(classes.form)}>
              <AutoSubmitToken />
              {/* <pre>{JSON.stringify(props, undefined, 2)}</pre>
            <FormSelect name="productId" options={product}/> */}
              <MySelect
                name='productId'
                component='select'
                onClick={() => handleProductChange(formikProps.values)}
              >
                <option value=''>виберіть товар</option>
                {product?.map(products => (
                  <option key={products.id} value={JSON.stringify(products.id)}>
                    {/* // <option key={products.id} value={products}> */}
                    {products.name}
                  </option>
                ))}
                {/* {handleProductChange(values.productId)} */}
              </MySelect>
              <Input
                name='name'
                type='text'
                placeholder='назва'
                value={products.name}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdateRequest(e.target))}
                // onClick={()=>changeValue(formikProps)}
              />
              <Input
                name='price'
                type='text'
                placeholder='ціна'
                value={products.price}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdateRequest(e.target))}
              />
              <Input
                name='quantity'
                type='text'
                placeholder='кількість'
                value={products.quantity}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdateRequest(e.target))}
              />
              <MySelect
                name='categoryId'
                placeholder='підрозділ'
                as='select'
                value={products.categoryId}
                onChange={e => dispatch(productLocalUpdateRequest(e.target))}
              >
                <option value=''>виберіть підрозділ</option>
                {category?.map(category => (
                  <option key={category.id} value={JSON.stringify(category.id)}>
                    {category.name}
                  </option>
                ))}
              </MySelect>
              <Input
                name='brand'
                type='text'
                placeholder='бренд'
                value={products.brand}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdateRequest(e.target))}
              />
              {/* <Field name='img' type='file' placeholder='img' /> */}

              {/* { products.ProductInfos?.map((products,index) =>(
                      <div key={index}>
                        <Field name={`info[${index}].title`} value={products.title} />
                        <Field name={`info.${index}.description`} value={products.description}/>

                        <button
                          type='button'
                          onClick={() =>(index)}
                        >
                          -
                        </button>
                      </div>
                    ))} */}

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
                    {formikProps.values.info?.map((inf, index) =>
                      products.ProductInfos?.map(info => (
                        <div key={index}>
                          {/** both these conventions do the same */}
                          {inf.title !== '' && (
                            <div key={index + 1}>
                              <Input
                                name={`info[${index}].title`}
                                value={info.title}
                              />
                              <Input
                                name={`info.${index}.description`}
                                value={info.description}
                              />
                            </div>
                          )}
                          {/* <button
                          type='button'
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </button> */}
                        </div>
                      ))
                    )}
                    {/* <button
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
                    </button> */}
                  </div>
                )}
              />
              <button className={cx(classes.btn)} type='submit'>оновити</button>

              {/* <button type="button" onClick={()=>console.log(initialValues.info)}>info</button> */}
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default UpdateProduct
