import React, { useState, useContext } from 'react'
import '../Navbar/Navbar.css';
import { Link,useNavigate } from 'react-router-dom';
import Order from '../../pages/Cart/Cart';

import { StoreContext } from '../../Context/StoreContext';
import { food_list } from '../../SourceImages/Images';

const Navbar = () => {
  const { cartItem, addToCart,user, setUser } = useContext(StoreContext);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === "") {
      setResult([]);
      return;
    }
 

  const filtered = food_list.filter(
    (item) =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.category.toLowerCase().includes(value.toLowerCase())
  );

  setResult(filtered);
};

const handleFoodClick = (item) => {
  addToCart(item._id); // use _id because your food_list uses _id
  setSearch("");
  setResult([]);
  navigate("/Cart");
};

return (
  <div className="navbar">


    <img className="logo"
      src="data:image/jpeg;base64,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" alt="logo" />


    <ul className="navbar-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">About Us</Link></li>
 

      <li><Link to="/footer">Contact Us</Link></li>

      {user?.role === "ADMIN" && (
        <li><Link to="/admin">Admin</Link></li>
      )}
    </ul>
    <div className="navbar-right">
     <div className="search-box">
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={handleSearch}
          />
</div>
{search.trim() !== "" && (
  <div className="search-results">
    {result.length > 0 ? (
      result.map((item) => (
        <div
          key={item._id}
          className="search-item"
          onClick={() => handleFoodClick(item)}
        >
          {item.name}
        </div>
      ))
    ) : (
      <div className="search-item">No results found</div>
    )}
  </div>
)}
      <Link to="/Cart">
        <img className="responsive-img search_icon"
          src="data:image/png;base64,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"
          alt="basket_icon" />
         
      </Link>

     

      {user ? (
        <>
          <span className="welcome-text">
            Welcome, {user.uname}
          </span>

          <button
            className="btn btn-danger ms-2"
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      )}

    </div>

  </div>

)
}

export default Navbar;
