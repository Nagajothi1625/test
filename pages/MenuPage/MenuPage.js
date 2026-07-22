import FoodDisplay from "../../FoodDisplay/FoodDisplay";
import Explore_menu from "../../Components/Explore_Menu/Explore_menu";
 import { useState } from "react";

const MenuPage = () => {

  const [category, setCategory] = useState("All");

  return (
    <>
      <Explore_menu
        category={category}
        setCategory={setCategory}
      />

      <FoodDisplay
        category={category}
        setCategory={setCategory}
      />
    </>
  );
};

export default MenuPage;