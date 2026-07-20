import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Explore_menu from '../../Components/Explore_Menu/Explore_menu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
 


const Home = () => {
  const [category, setCategory]= useState("All");
  return (
    <div>
        <Header/>
        <Explore_menu category={category} setCategory={setCategory}/>      
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
