import { Formik, Form, FieldArray } from 'formik'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productCreateRequest } from '../../../redux/actions/productActionCreators'
import classes from './CreateProduct.module.scss'
import Input from '../../Input/Input'
import MySelect from '../../MySelect/MySelect'
import { categoryRequest } from '../../../redux/actions/categoryAction'
import ProductSizeEditor from '../ProductSizeEditor/ProductSizeEditor'
import { PRODUCT_CREATE_CHEMA } from '../../../utils/validationSchemasAdmin'
import ValidationMessages from '../../validator/validationMessages'

const initialValues = {
  name: '',
  price: '',
  quantity: '',
  hasSizes: false,
  sizes: [],
  categoryId: '',
  brand: '',
  img: '',
  img2: '',
  info: [
    {
      title: '',
      description: ''
    }
  ]
}

const CreateProduct = () => {
  const imgRef = useRef(null)
  const img2Ref = useRef(null)
  useEffect(() => {
    requestCategorys()
  }, [])
  const requestCategorys = options => dispatch(categoryRequest(options))
  const { category } = useSelector(state => state.category)
  const { messagesCreate } = useSelector(state => state.products)
  const dispatch = useDispatch()
  const addProduct = (values, utils) => {
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
    if (imgRef.current && imgRef.current.files[0]) {
      data.append('img', imgRef.current.files[0])
    }
    if (img2Ref.current && img2Ref.current.files[0]) {
      data.append('img2', img2Ref.current.files[0])
    }
    data.append('info', JSON.stringify(values.info))
    dispatch(productCreateRequest(data))
    utils.resetForm()
    if (imgRef.current) imgRef.current.value = ''
    if (img2Ref.current) img2Ref.current.value = ''
  }
  return (
    <section>
      <h1 className={classes.text}>CREATE PRODUCT</h1>
      <ValidationMessages message={messagesCreate} />
      <Formik
        initialValues={initialValues}
        validationSchema={PRODUCT_CREATE_CHEMA}
        onSubmit={addProduct}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form className={classes.form}>
              <MySelect name='categoryId' placeholder='category' as='select'>
                <option value=''>select a category</option>
                {category.map(category => (
                  <option key={category.id} value={JSON.stringify(category.id)}>
                    {category.name}
                  </option>
                ))}
              </MySelect>
              <Input name='name' type='text' placeholder='name' />
              <Input name='price' type='text' placeholder='price' />
              {!values.hasSizes && (
                <Input name='quantity' type='text' placeholder='quantity' />
              )}
              <Input name='brand' type='text' placeholder='brand' />
              <ProductSizeEditor
                values={values}
                setFieldValue={setFieldValue}
              />
              <label className={classes.fileLabel}>
                Image 1 (required)
                <input
                  ref={imgRef}
                  name='img'
                  type='file'
                  accept='image/*'
                  className={classes.fileInput}
                  onChange={e =>
                    setFieldValue(
                      'img',
                      e.currentTarget.files[0]
                        ? e.currentTarget.files[0].name
                        : ''
                    )
                  }
                />
              </label>
              <label className={classes.fileLabel}>
                Image 2 (optional)
                <input
                  ref={img2Ref}
                  name='img2'
                  type='file'
                  accept='image/*'
                  className={classes.fileInput}
                  onChange={e =>
                    setFieldValue(
                      'img2',
                      e.currentTarget.files[0]
                        ? e.currentTarget.files[0].name
                        : ''
                    )
                  }
                />
              </label>
              <FieldArray
                name='info'
                render={arrayHelpers => (
                  <div>
                    {values.info.map((inf, index) => (
                      <div key={index}>
                        <Input
                          name={`info[${index}].title`}
                          placeholder='property'
                        />
                        <Input
                          name={`info.${index}.description`}
                          placeholder='description'
                        />
                        <button
                          className={classes.button_long}
                          type='button'
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          remove
                        </button>
                      </div>
                    ))}
                    <button
                      className={classes.button_long}
                      type='button'
                      onClick={() =>
                        arrayHelpers.push({ title: '', description: '' })
                      }
                    >
                      add
                    </button>
                  </div>
                )}
              />
              <button className={classes.btn} type='submit'>
                CREATE
              </button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
}

export default CreateProduct
