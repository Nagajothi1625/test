    import React, { useState, useContext } from "react";
    import { StoreContext } from "../../Context/StoreContext";
    import FoodServices from "../../Services/FoodServices"; 
    import { useNavigate } from "react-router-dom";
    import  "./PlaceOrder.css"

    const PlaceOrder = () => {
        const navigate = useNavigate();

        const { getTotalCartAmount } = useContext(StoreContext);

        const [loading, setLoading] = useState(false);

        const [formData, setFormData] = useState({
            customerName:"",
            email:"",
            phone:"",
            address:""
        });

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]:e.target.value
            });
        };

        const submitOrder = async (e) => {
            e.preventDefault();
            if (
                !formData.customerName.trim() ||
                !formData.email.trim() ||
                !formData.phone.trim() ||
                !formData.address.trim()
            ) {
                alert("Please fill all delivery information");
                return;
            }

            setLoading(true);

            const orders = {
            customerName: formData.customerName,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                amount:
                
                    getTotalCartAmount() === 0
                        ? 0
                        : getTotalCartAmount() + 2
            };

            try {
               
              

                const response = await FoodServices.placeOrder(orders);

                const orderId = response.data.id;
                if (getTotalCartAmount() === 0) {
                    alert("Your cart is empty");
                    return;
                }

                navigate(`/payment/${orderId}`);
                
                alert(
                    `Order placed successfully!\nOrder ID: ${response.data.id}`
                );

                setFormData({
            customerName: "",
            email: "",
            phone: "",
            address: ""
        });
    

            } catch(error){
                console.log(error);
            alert("Order failed");
        } finally {
            setLoading(false);
        }
        };

        return (
            <form className="place-order" onSubmit={submitOrder}>

                <div className="place-order-left">
            <p className="title">Delivery Information</p>

                <input
                    type="text"
                    name="customerName"
                    placeholder="Name"
                    value={formData.customerName}
                    onChange={handleChange}
                      required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                      required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                      required
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                      required
                />
                </div>

   
    <div className="place-order-right">
                 <button className="submit-pay" type="submit" disabled={loading}>
                {loading ? "Processing..." : "Proceed To Pay"}               
                </button> 
                
  </div>
            </form>
        );
    };

    export default PlaceOrder;