import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import TrackOrder from '../../pages/TrackOrder/TrackOrder';
 

 import {Link, useNavigate } from 'react-router-dom';

const Cart = () => {

  const {addToCart, removeFromCart ,cartItem, food_list, getTotalCartAmount}= useContext(StoreContext);

  const navigate = useNavigate();
    
  
  return (
    <>
    <div> <center><button onClick={() => navigate(`/TrackOrder/{orderId}`)}>
  Track Order
</button> </center> </div>
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-item-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item, index) => {
          if(cartItem[item._id]>0){
            return(
              <div key={item._id}>
              <div className='cart-item-title cart-items-item'>
                  <img src={item.image} alt='image_item'/>
                  <p>{item.name}</p>
                    <p>Rs.{item.price}</p>
                                         
                    <p><button   onClick={()=>removeFromCart(item._id)}>-</button>  
                    {cartItem[item._id]}
                    <button  onClick={()=>addToCart(item._id)}>+</button> </p>
                 
                       
                        <p>{item.price*cartItem[item._id]}</p>
                        <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>
                       l 
                        
              </div>
              <hr/>
              </div>
            )
            
          }
          return null;
        })}

      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
            <div>
              <div className='cart-total-details'>
                <p>subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr/>
               <div className='cart-total-details'>
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount()===0?0:2}</p>
               </div>
               <hr/>
                <div className='cart-total-details'>
                  <b>Total</b>
                  <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                </div>
            </div>
            <hr/>
            <Link to="/Order"><center><button>Proceed to Checkout</button></center></Link>
           
        </div>
      </div>

      
    </div>
    </>
  )
}

export default Cart
