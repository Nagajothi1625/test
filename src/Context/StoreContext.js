    import { createContext, useEffect, useState } from "react";
    import { food_list } from "../SourceImages/Images";



    export const StoreContext = createContext(null)

    

    const StoreContextProvider = (props) => {

        const [cartItem, setCartItem]=useState({});

        const [user, setUser] = useState(() => {
            const savedUser = localStorage.getItem("user");

            if (!savedUser || savedUser === "undefined") {
                return null;
            }

            try {
                return JSON.parse(savedUser);
            } catch (err) {
                console.error(err);
                return null;
            }
        });
        
        const addToCart = (itemId) => {

            if(!cartItem[itemId]){
                setCartItem((prev)=>({...prev,[itemId]:1}))
            }else{
                setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
        }

        const removeFromCart = (itemId) => {
                setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        };

       
        const submitHandler  = async (e) => {
            e.preventDefault();
        
            
          
        }
        const getTotalCartAmount = ()=>{

            let totalAmount = 0;
            for(const item in cartItem){
                if(cartItem[item]>0){
                        let item_info = food_list.find((product) => product._id === item);
                       
                        totalAmount += item_info.price*cartItem[item];
                         
                }
            }
        return totalAmount;
        }  
        
        useEffect(()=>{
    console.log(cartItem);
        },[cartItem]
        );

            const contextValue = {
                
                food_list,
                cartItem,
                setCartItem,
                addToCart,
                removeFromCart,
                getTotalCartAmount,
                user,
                setUser

            };
        
        useEffect(() => {
              if (user) {
        localStorage.setItem("user", JSON.stringify(user));
    } else {
        localStorage.removeItem("user");
    } 
        }, [user]);

        return (
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
        )
    }
    export default StoreContextProvider;





