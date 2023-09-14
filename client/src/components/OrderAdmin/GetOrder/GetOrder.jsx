import React, { useEffect } from 'react'
import {
  buyersDeleteRequest,
  buyersGetRequest
} from '../../../redux/actions/buyerActionCreators'
import { useDispatch, useSelector } from 'react-redux'
import classes from './GetOrder.module.scss'

const GetOrder = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(buyersGetRequest())
  }, [])
  const { buyers, isLoading, error } = useSelector(state => state.buyers)

  return (
    <main className={classes.form}>
      {isLoading && <div>Loading</div>}
      {error &&
        error.map(error => (
          <div className={classes.error}>{error.message}</div>
        ))}
      {buyers?.map(buyers => (
        <section key={buyers.id} className={classes.containerMain}>
          <div className={classes.container}>
          <p className={classes.text}>{buyers.firstName}</p>
          <p className={classes.text}>{buyers.lastName}</p>
          <p className={classes.text}>{buyers.email}</p>
          <p className={classes.text}>{buyers.phone}</p>
          </div>
          <div className={classes.form}>
            <div className={classes.container}>
              {buyers.Orders?.map(order => (
                <section key={order.id} className={classes.container}>
                  <p className={classes.text}> номер:{order.id}</p>
                  <p className={classes.text}> Сума:{order.sum}</p>
                  <div>
                    {order.Products?.map(products => (
                      <section key={products.name} className={classes.container}>
                        <p className={classes.text}>
                          назва:{products.name}
                        </p>
                        <p className={classes.text}>
                          кількість:{products.products_to_rders.quantity}
                        </p>
                        <p className={classes.text}>
                          ціна:{products.price}
                        </p>
                      </section>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
          <button
            className={classes.btn}
            onClick={() => dispatch(buyersDeleteRequest(buyers.id))}
          >
            ВИДАЛИТИ
          </button>
        </section>
      ))}
    </main>
  )
}

export default GetOrder
