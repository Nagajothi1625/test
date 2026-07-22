import React from 'react'
import '../Navbar/Navbar.css'
import VegMenuData from './VegMenuData.js';

const VegItems = () => {
  return (
     
    
    <div className="menu-container">
      <h2>Our Menu</h2>

      <div className="menu-grid">
        {VegMenuData.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default VegItems
