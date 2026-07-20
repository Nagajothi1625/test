import React from 'react'
import './Header.css';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import Explore_menu from '../Explore_Menu/Explore_menu';
import { Link } from 'react-router-dom';
 

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
           
            <h2>Order your favorite food here!</h2>
            <p>Craving something delicious? We’ll bring it straight to you.</p>
            <button><Link to="/Explore_Menu">View Menu</Link></button>
          
      
    </div>
    </div>
  )
}

export default Header
