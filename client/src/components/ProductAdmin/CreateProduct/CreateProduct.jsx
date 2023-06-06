import { Formik, Field, Form, FieldArray } from 'formik'
import React, { Fragment, useEffect } from 'react'
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

// const data = new FormData();
// initialValues.append("name",name);
// initialValues.append("price",price);

const CreateProduct = () => {
  useEffect(() => {
    requestCategorys()
  }, [])
  const requestCategorys = options => dispatch(categoryRequest(options))
  const { category } = useSelector(state => state.category)
  const { product, isLoading, error } = useSelector(state => state.product)
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

  const addProduct = (values, utils) => {
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
    utils.resetForm()
  }

  return (
    <div>
      <h1 className={cx(classes.text)}>СТВОРИТИ ТОВАР</h1>
      {error &&
        error.map(error => (
          <div className={cx(classes.error)}>{error.message}</div>
        ))}
      <Formik
        initialValues={initialValues}
         validationSchema={PRODUCT_CREATE_CHEMA}
        onSubmit={addProduct}
      >
        {({ values,errors,touched }) => {
          console.log(errors.img);
          console.log(touched.img);
          const inputStyles = cx(classes.feedback__label, {
            [classes.validInput]: errors.img && !touched.img,
            [classes.invalidInput]: errors.img && touched.img,
          });
          return(
          <Form className={cx(classes.form)}>
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
            {/* <p className={classes.feedback__text}>Телефон</p> */}
            <label for='file' className={inputStyles}>
              <Input
                name='img'
                type='file'
                id='file'
                // placeholder='виберіть малюнок'
                className={classes.feedback__file}
              />
            </label>
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
                      <Input
                        name={`info[${index}].title`}
                        placeholder='властивість'
                      />
                      <Input
                        name={`info.${index}.description`}
                        placeholder='опис'
                      />

                      <button
                        className={cx(classes.button_long)}
                        type='button'
                        onClick={() => arrayHelpers.remove(index)}
                      >видалити</button>
                    </div>
                  ))}
                  <button
                    className={cx(classes.button_long)}
                    type='button'
                    onClick={() =>
                      arrayHelpers.push({ title: '', description: '' })
                    }
                  >добавити</button>

                  {/* <button className={cx(classes.btn)} type="button" onClick={()=>console.log(arrayHelpers)}>arrayHelpers</button> */}
                </div>
              )}
            />
            <button className={cx(classes.btn)} type='submit'>
              СТВОРИТИ
            </button>
            {/* <button type="button" onClick={()=>console.log(initialValues.info)}>info</button> */}
          </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default CreateProduct
