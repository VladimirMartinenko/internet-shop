import React, { useEffect } from 'react'
import { buyersDeleteRequest, buyersGetRequest } from '../../../redux/actions/buyerActionCreators'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import classes from './GetOrder.module.scss'

const GetOrder = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(buyersGetRequest())
  }, [])
  const { buyers, isLoading, error } = useSelector(state => state.buyers)
  console.log(buyers)

  return (
    <div className={classes.form}>
      {isLoading && <div>Loading</div>}
    {error && error.map(error => (<div className={cx(classes.error)}>{error.message}</div>))}
      {buyers?.map(buyers => (
        <div key={buyers.id} className={cx(classes.containerMain)}>
          <div className={classes.text}>{buyers.firstName}</div>
          <div className={classes.text}>{buyers.lastName}</div>
          <div className={classes.text}>{buyers.email}</div>
          <div className={classes.text}>{buyers.phone}</div>
          <div className={classes.form}>
            <div className={classes.text}>
              {buyers.Orders?.map(order => (
                <div key={order.id} className={cx(classes.container)}>
                  <div className={classes.text}> номер:{order.id}</div>
                  <div className={classes.text}> Сума:{order.sum}</div>
                  <div>
                    {' '}
                    {order.Products?.map(products => (
                      <div key={products.id} className={cx(classes.container)}>
                        <div className={classes.text}>
                          назва:{products.name}
                        </div>
                        <div className={classes.text}>
                          кількість:{products.quantity}
                        </div>
                        <div className={classes.text}>
                          ціна:{products.price}
                        </div>
                        {products.products_to_rders.quantity}
                      </div>
                    ))}
                  </div>
                  {/* <div>{order.Products?.map(
          ({ quantity, price }) => (<div style={{padding:'10px'}}>сумма:{price*quantity}</div>)
        )}</div> */}
                </div>
              ))}
            </div>
          </div>
          <button
              className={classes.btn}
              onClick={() => dispatch(buyersDeleteRequest(buyers.id))}
            >
              ВИДАЛИТИ
            </button>
        </div>
      ))}
    </div>
  )
}

export default GetOrder
