
 
 
import vegrice from '../SourceImages/veg-rice.jpg'
import vada from '../SourceImages/Medu-vada.jpg.webp'
import mixCurry from '../SourceImages/mixed-vegtable-curry.jpg'
import iceCream from '../SourceImages/ice-cream.webp'

import food_1 from '../SourceImages/Chicken_Lollypop.jpg'
import food_2 from '../SourceImages/Prawn_curry.jpg'
import food_3 from '../SourceImages/Chicken_biriyani.jpg'
import food_4 from '../SourceImages/mutton_biriyani.jpg'
import food_5 from '../SourceImages/samosa.jpg'
import crab_lol from '../SourceImages/Crab_Lollipop.webp'
import fish_Biriyani from '../SourceImages/fish_biriyani.webp'
import fish_lol from '../SourceImages/fish_lollipop.webp'

export const Images = {

   
    food_3,
    vegrice,
    vada
};

export const food_list =[
    {
    _id : '1',
    name : "Chicken Lollypop",
   image : food_1,
    price:"250",
    category :"Starters"
},

{
    _id : '2',
    name : "Chicken_Biriyani",
   image : food_3,
    price:"320",
    category :"Biriyani"
},
{
    _id : '3',
    name : "Prawn_Curry",
   image : food_2,
    price:"320",
    category :"Mix-Curry"
},
{
    _id : '4',
    name : "Mutton_biriyani",
   image : food_4,
    price:"450",
    category :"Biriyani"
},
{
    _id : '5',
    name : "Samosa",
   image : food_5,
    price: "12",
    category :"snacks"
},
 {
    _id : '6',
    name : "Veg Fried Rice",
   image : vegrice,
    price:"250",
    category :"VegRice"
},
 {
    _id : '7',
    name : "Ice Cream",
   image : iceCream,
    price:"220",
    category :"Dessert"
},

 {
    _id : '8',
    name : "vada",
   image : vada,
    price: "20",
    category :"snacks"
}
,
{
    _id : '9',
    name : "Mixed_Curry",
   image : mixCurry,
    price:"320",
    category :"Mix-Curry"
}
,
{
    _id : '10',
    name : "Fish_biriyani",
   image : fish_Biriyani,
    price:"450",
    category :"Biriyani"
}
,
{
    _id : '11',
    name : "Fish_Lolipop",
   image : fish_lol,
    price:"350",
    category :"Starters"
}

,
{
    _id : '12',
    name : "Crab_lollipop",
   image : crab_lol,
    price:"350",
    category :"Starters"
}
];

export const    menu_list =[
    
   
    
   
    {
        menu_name : "snacks",
        menu_image : food_5

    }
    ,
    {
        menu_name : "Starters",
        menu_image : food_1

    },
    {
        menu_name : "VegRice",
        menu_image : vegrice

    } ,
     {
        menu_name : "Biriyani",
        menu_image : food_3

    },
    {
        menu_name : "Mix-Curry",
        menu_image : food_2

    }
    ,
    {
        menu_name : "Dessert",
        menu_image : iceCream

    }
];