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
import ValidationMessages from '../../validator/validationMessages'
import ProductSizeEditor from '../ProductSizeEditor/ProductSizeEditor'
import { parseSizes } from '../../../utils/productSizes'

const initialValues = {
  productId: '',
  name: '',
  price: '',
  quantity: '',
  hasSizes: false,
  sizes: [],
  categoryId: '',
  brand: '',
  img: '',
  img2: '',
  // info: [
  //   {
  //     title: '',
  //     description: '',
  //     id: ''
  //   }
  // ]
}
console.log(initialValues)

const UpdateProduct = () => {
  const { category } = useSelector(state => state.category)
  const { product, isLoading, error } = useSelector(state => state.products)
  const { products, messagesUpdate } = useSelector(state => state.product)
  const AutoSubmitToken = () => {
    const { setFieldValue } = useFormikContext()
    useEffect(() => {
      setFieldValue('name', products.name)
      setFieldValue('price', products.price)
      setFieldValue('quantity', products.quantity)
      setFieldValue('categoryId', products.categoryId)
      setFieldValue('brand', products.brand)
      const parsed = parseSizes(products)
      setFieldValue('hasSizes', parsed.length > 0)
      setFieldValue('sizes', parsed)
      // products.ProductInfos?.map((info, index) => {
      //   setFieldValue(`info[${index}].title`, info.title)
      //   setFieldValue(`info.${index}.description`, info.description)
      //   setFieldValue(`info.${index}.id`, info.id)
      // })
    }, [products])
  }

  const dispatch = useDispatch()
  const addProduct = (values, { resetForm }) => {
  try {
     const data = new FormData()
    const sizes = values.hasSizes
      ? (values.sizes || [])
          .map(row => ({
            name: String(row.name || '').trim(),
            quantity: Number(row.quantity || 0)
          }))
          .filter(row => row.name)
      : []
    const quantity = sizes.length
      ? sizes.reduce((sum, row) => sum + Number(row.quantity || 0), 0)
      : values.quantity
    data.append('name', values.name)
    data.append('price', `${values.price}`)
    data.append('quantity', `${quantity}`)
    data.append('sizes', JSON.stringify(sizes))
    data.append('categoryId', values.categoryId)
    data.append('brand', values.brand)
    const imgFile = document.querySelector('input[name="img"]')
    const img2File = document.querySelector('input[name="img2"]')
    if (imgFile && imgFile.files[0]) {
      data.append('img', imgFile.files[0])
    }
    if (img2File && img2File.files[0]) {
      data.append('img2', img2File.files[0])
    }
    dispatch(productUpdateRequest(data, values.productId))
  }catch(err){
      console.log(err)
    }
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
    <section>
      <h1 className={classes.text}>UPDATE PRODUCT</h1>
      {/* {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))} */}
        < ValidationMessages  message={messagesUpdate}/>
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
                <option value=''>select a product</option>
                {product?.map(products => (
                  <option key={products.id} value={JSON.stringify(products.id) || ""}>
                    {products.name}
                  </option>
                ))}
              </MySelect>
              <Input
                name='name'
                type='text'
                placeholder='name'
                value={products.name || ""}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdate(e.target))}
              />
              <Input
                name='price'
                type='text'
                placeholder='price'
                value={products.price || ""}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdate(e.target))}
              />
              {!formikProps.values.hasSizes && (
                <Input
                  name='quantity'
                  type='text'
                  placeholder='quantity'
                  value={products.quantity || ""}
                  onFocus={e => handlValueChanges(e)}
                  // onBlur={e => handlValueChange(e)}
                  onChange={e => dispatch(productLocalUpdate(e.target))}
                />
              )}
              <MySelect
                name='categoryId'
                placeholder='category'
                as='select'
                value={products.categoryId || ""}
                onChange={e => dispatch(productLocalUpdate(e.target))}
              >
                <option value=''>select a category</option>
                {category?.map(category => (
                  <option key={category.id} value={JSON.stringify(category.id) || ""}>
                    {category.name}
                  </option>
                ))}
              </MySelect>
              <Input
                name='brand'
                type='text'
                placeholder='brand'
                value={products.brand || ""}
                onFocus={e => handlValueChanges(e)}
                // onBlur={e => handlValueChange(e)}
                onChange={e => dispatch(productLocalUpdate(e.target))}
              />
              <ProductSizeEditor
                values={formikProps.values}
                setFieldValue={formikProps.setFieldValue}
              />
              <label className={classes.fileLabel}>
                Image 1 (optional)
                <input
                  name='img'
                  type='file'
                  accept='image/*'
                  className={classes.fileInput}
                />
              </label>
              <label className={classes.fileLabel}>
                Image 2 (optional)
                <input
                  name='img2'
                  type='file'
                  accept='image/*'
                  className={classes.fileInput}
                />
              </label>

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
                update
              </button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
}

export default UpdateProduct
