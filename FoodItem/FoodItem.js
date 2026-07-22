import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { StoreContext } from '../Context/StoreContext';
 

const FoodItem = ({id, name, image, price}) => {

   // const [count, setCount] = useState(0);
    const {addToCart,cartItem,removeFromCart}= useContext(StoreContext);

    return (
        <div className="food-item">
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt="/" />
                {
                    !cartItem[id]
                    
                    ?<button className='add' onClick={()=>addToCart(id)}>+</button>
                    :<div className='item-counter'>                        
                    <button   onClick={()=>removeFromCart(id)}>-</button>  
                    <p>{cartItem[id]}</p>
                    <button  onClick={()=>addToCart(id)}>+</button></div>
                }
            </div>
            <div className='food-item-info1'>
                <p>{name}</p>
            </div>
            <div className='food-item-info'>
                <p>Food provides essential nutrients<br/> for overall health and well being</p>
            </div>
            <div className='food-item-info1'><p>${price}</p></div>


        </div>
    )
}

export default FoodItem
