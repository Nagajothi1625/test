
import './App.css';
import './Components/Navbar/Navbar.css';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/cauroselItems/Carousel';
import {  Router, Route, Routes  } from 'react-router-dom';
//import VegItems from './Components/Veg/VegItems';
import LogIn from './Components/Login/Login';
//import Homes from './Components/Home';
import Cart from './pages/Cart/Cart';
import Order from './pages/PlaceOrder/PlaceOrder';
//import Header from './Components/Header/Header';
import Explore_menu from './Components/Explore_Menu/Explore_menu';
//import FoodDisplay from './FoodDisplay/FoodDisplay';
import MenuPage from './pages/MenuPage/MenuPage';
import Home from './pages/Home/Home';
 import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import TrackOrder from './pages/TrackOrder/TrackOrder';
import AdminOrderStatus from "./pages/Admin/AdminOrderStatus";
import AdminRoute from './pages/Admin/AdminRoute';
import Payment from "./pages/Payment/PaymentPage";

const  App = () => {
  
  //const [showLogin, setShowLogin] = useState(false)
const [category, setCategory]=useState("All");

  return (
    <>
   
    
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
           
            <Route path="/carousel" element={<Carousel />} ></Route>
            <Route path="/login" element={<LogIn />} ></Route>
            <Route path="/Explore_menu" element={
  <Explore_menu 
      category={category}
      setCategory={setCategory}
  />
} />
            <Route path="/FoodDisplay" element={<MenuPage />} />
            <Route 
   path="/MenuPage" 
   element={<MenuPage />} 
/>
            <Route path="/Order" element={<Order/>}></Route>
            <Route path="/track-order/:id" element={<TrackOrder />} />
           <Route path="/payment/:orderId" element={<Payment />} />
           
            <Route
                  path="/admin"
                                element={
                                  <AdminRoute>
                                    <AdminOrderStatus />
                                  </AdminRoute>
  }
/>
            
          </Routes>
          <Footer/>
          
       </>
  

    
  );
}

export default App;
