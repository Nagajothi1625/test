import React from 'react'
import './Explore_menu.css'
import { menu_list } from '../../SourceImages/Images'
 

const Explore_menu = ({ category, setCategory }) => {

    return (
        <div className='exploreMenu' id='exploreMenu'>
            <h1>Explore Our Menu</h1>
            <p className='exploreMenu-text'>Explore our menu and discover a world of flavors crafted to delight every taste.
                 Each dish is thoughtfully prepared using quality ingredients and inspired by our unique culinary style. 
                 Let your cravings guide you as you find something truly satisfying in every bite.</p>

            <div className='exploreMenu-list'>
                {
                    menu_list.map((item, index) => {

                        return (
                            <div onClick={() => setCategory(category === item.menu_name ? "All" : item.menu_name)} key={index} 
                                className='exploremenu-list-items'>
                                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="/"></img>
                                <p>{item.menu_name}</p>

                            </div>);
                        
                    })
                     
                }

<hr/>
            </div>
        </div>
    );
}

export default Explore_menu
