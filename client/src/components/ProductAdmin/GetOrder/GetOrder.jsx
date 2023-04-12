import React, { useEffect } from 'react';
import { buyersGetRequest } from '../../../redux/actions/buyerActionCreators';
import { useDispatch, useSelector } from 'react-redux';

const GetOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(buyersGetRequest());
  }, []);
const {buyers}=useSelector(state=>state.buyers);
console.log(buyers);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {buyers?.map(buyers=>(
        <div key={buyers.id} style={{ display: 'flex', flexDirection: 'row',padding:'10px' }}>
          <div style={{padding:'10px'}}>{buyers.firstName}</div>
          <div style={{padding:'10px'}}>{buyers.lastName}</div>
          <div style={{padding:'10px'}}>{buyers.email}</div>
          <div style={{padding:'10px'}}>{buyers.phone}</div>
          <div style={{padding:'10px'}}>{buyers.Orders?.map(order=>(
            <div key={order.id} style={{ display: 'flex', flexDirection: 'row',padding:'10px'}}>
             <div style={{padding:'10px'}}> {order.id}</div>
             <div > {order.Products?.map(products=>(
              <div key={products.id} style={{ display: 'flex', flexDirection: 'row',padding:'10px' }}>
                <div style={{padding:'10px'}}>{products.name}</div>
                <div style={{padding:'10px'}}>{products.quantity}</div>
                <div style={{padding:'10px'}}>{products.price}</div>
              </div>
             ))}</div>
             {/* <div>{order.Products?.map(
          ({ quantity, price }) => (<div style={{padding:'10px'}}>сумма:{price*quantity}</div>)
        )}</div> */}
            </div>
          ))}</div>
        </div>
      ))}
    </div>
  );
}

export default GetOrder;
