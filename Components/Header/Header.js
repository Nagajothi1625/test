import React from 'react'
import './Header.css';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import Explore_menu from '../Explore_Menu/ExploreMenu';
import MenuPage from '../../pages/MenuPage/MenuPage';
import { Link } from 'react-router-dom';
 

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
           
            <h2>Order your favorite food here!</h2>
            <p>Craving something delicious? We’ll bring it straight to you.</p>
            <Link to="/MenuPage">
  <button>View Menu</button>
</Link>
      
    </div>
    </div>
  )
}

export default Header
