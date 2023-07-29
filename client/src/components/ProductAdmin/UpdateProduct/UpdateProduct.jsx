import { Formik, Field, Form, FieldArray, useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  productUpdateRequest,
  productGetByIdRequest,
  productLocalUpdate
} from '../../../redux/actions/productActionCreators'
import MySelect from '../../MySelect/MySelect'
import Input from '../../Input/Input'
import classes from './UpdateProduct.module.scss'
import { PRODUCT_UPDATE_CHEMA } from '../../../utils/validationSchemasAdmin'

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
    }, [products])
  }

  const dispatch = useDispatch()
  const addProduct = (values, { resetForm }) => {
    // console.log(document.getElementsByName('img')[1].value)
    const data = new FormData()
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
    data.append('info', JSON.stringify(values.info))
    // for (const [key, value] of data) {
    //   console.log(`${key}: ${value}\n`)
    // }
    dispatch(productUpdateRequest(data, values.productId))
  }
  const handleProductChange = (values, formikProps) => {
    dispatch(productGetByIdRequest(values.productId))
  }
  const handlValueChanges = (value, products) => {
    value.target.value = ''
  }
  const handlValueChange = value => {
    if (value.target.value === '') {
      value.target.value = products.name
    }
  }

  return (
    <div>
      <h1 className={classes.text}>ОНОВИТИ ТОВАР</h1>
      {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={PRODUCT_UPDATE_CHEMA}
        onSubmit={addProduct}
      >
        {formikProps => {
          return (
            <Form className={classes.form}>
              <AutoSubmitToken />
              <MySelect
                name='productId'
                component='select'
                onClick={() => handleProductChange(formikProps.values)}
              >
                <option value=''>виберіть товар</option>
                {product?.map(products => (
                  <option key={products.id} value={JSON.stringify(products.id) || ""}>
                    {products.name}
                  </option>
                ))}
              </MySelect>
              <Input
                name='name'
                type='text'
                placeholder='назва'
                value={products.name || ""}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdate(e.target))}
              />
              <Input
                name='price'
                type='text'
                placeholder='ціна'
                value={products.price || ""}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdate(e.target))}
              />
              <Input
                name='quantity'
                type='text'
                placeholder='кількість'
                value={products.quantity || ""}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdate(e.target))}
              />
              <MySelect
                name='categoryId'
                placeholder='підрозділ'
                as='select'
                value={products.categoryId || ""}
                onChange={e => dispatch(productLocalUpdate(e.target))}
              >
                <option value=''>виберіть підрозділ</option>
                {category?.map(category => (
                  <option key={category.id} value={JSON.stringify(category.id) || ""}>
                    {category.name}
                  </option>
                ))}
              </MySelect>
              <Input
                name='brand'
                type='text'
                placeholder='бренд'
                value={products.brand || ""}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdate(e.target))}
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

              <FieldArray
                name='info'
                render={arrayHelpers => (
                  <div>
                    {formikProps.values.info?.map((inf, index) =>
                      products.ProductInfos?.map(info => (
                        <div key={index}>
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
              <button className={classes.btn} type='submit'>
                оновити
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default UpdateProduct
