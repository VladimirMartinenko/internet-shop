import { Formik, Form, FieldArray } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productCreateRequest } from '../../../redux/actions/productActionCreators'
import cx from 'classnames'
import classes from './CreateProduct.module.scss'
import Input from '../../Input/Input'
import MySelect from '../../MySelect/MySelect'
import { categoryRequest } from '../../../redux/actions/categoryAction'
import { PRODUCT_CREATE_CHEMA } from '../../../utils/validationSchemasAdmin'

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

const CreateProduct = () => {
  useEffect(() => {
    requestCategorys()
  }, [])
  const requestCategorys = options => dispatch(categoryRequest(options))
  const { category } = useSelector(state => state.category)
  const { product, isLoading, error } = useSelector(state => state.product)
  const dispatch = useDispatch()
  const addProduct = (values, utils) => {
    const data = new FormData()
    data.append('name', values.name)
    data.append('price', `${values.price}`)
    data.append('quantity', `${values.quantity}`)
    data.append('categoryId', values.categoryId)
    data.append('brand', values.brand)
    data.append('img', document.getElementsByName('img')[0].files[0])
    data.append('info', JSON.stringify(values.info))
    // for (const [key, value] of data) {
    //   console.log(`${key}: ${value}\n`)
    // }
    dispatch(productCreateRequest(data))
    utils.resetForm()
  }

  return (
    <div>
      <h1 className={classes.text}>СТВОРИТИ ТОВАР</h1>
      {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
        validationSchema={PRODUCT_CREATE_CHEMA}
        onSubmit={addProduct}
      >
        {({ values, errors, touched }) => {
          const inputStyles = cx(classes.feedback__label, {
            [classes.validInput]: errors.img && !touched.img,
            [classes.invalidInput]: errors.img && touched.img
          })
          return (
            <Form className={classes.form}>
              <MySelect name='categoryId' placeholder='category' as='select'>
                <option value=''>виберіть підрозділ</option>
                {category.map(category => (
                  <option key={category.id} value={JSON.stringify(category.id)}>
                    {category.name}
                  </option>
                ))}
              </MySelect>
              <Input name='name' type='text' placeholder='назва' />
              <Input name='price' type='text' placeholder='ціна' />
              <Input name='quantity' type='text' placeholder='кількість' />
              <Input name='brand' type='text' placeholder='бренд' />
              <label htmlFor='file' className={inputStyles}>
                <Input
                  name='img'
                  type='file'
                  id='file'
                  className={classes.feedback__file}
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
                          placeholder='властивість'
                        />
                        <Input
                          name={`info.${index}.description`}
                          placeholder='опис'
                        />

                        <button
                          className={classes.button_long}
                          type='button'
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          видалити
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
                      добавити
                    </button>
                  </div>
                )}
              />
              <button className={classes.btn} type='submit'>
                СТВОРИТИ
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default CreateProduct
