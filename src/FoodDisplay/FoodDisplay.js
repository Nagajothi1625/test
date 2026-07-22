import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../Context/StoreContext';

const FoodDisplay = ({category}) => {

    const {food_list}= useContext(StoreContext)
    console.log(food_list);

    return (
        <div className='food-display' id='food-display'> 
       <hr/>
            <h2>Explore Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list
.filter(item => category==="All" || category===item.category)
.map((item,index)=>(
    <FoodItem
       key={index}
       id={item._id}
       name={item.name}
       image={item.image}
       price={item.price}
    />
))}

            </div>
        </div>
    )
}

export default FoodDisplay
