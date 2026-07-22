import React, { useState, useEffect } from "react";
import FoodServices from "../../Services/FoodServices";
import { useParams } from "react-router-dom";

const TrackOrder = () => {

    const { id } = useParams();
    const [order, setOrder] = useState(null);
    
    const steps = [
    "PAID",
    "PROCESSING",
    "OUT_FOR_DELIVERY",
    "DELIVERED"
];

const getStepIndex = (status) => {
    return steps.indexOf(status);
}

   useEffect(() => {
    if (!id) return;

    const fetchOrder = () => {
        FoodServices.trackOrder(id)
            .then(res => {
                setOrder(res.data);
            })
            .catch(err => {
                console.log(err);
                alert("Order not found");
            });
    };

    fetchOrder();
    const interval = setInterval(fetchOrder, 3000);

    return () => clearInterval(interval);
}, [id]);

    const updateStatus = async (status) => {

        if (!order) {
            alert("Order not loaded yet");
            return;
        }

        try {
            const response = await FoodServices.updateOrderStatus(
                order._id,
                status
            );

            setOrder(response.data);
        } catch (error) {
            alert("Failed to update status");
        }
    };

   
    return (
        <div className="track-order">

            <h2>Track Order</h2>
    
 
            {order && (
                <div className="order-details">

                    <h3>Order #{order._id}</h3>

                    <p>Status: {order.status}</p>

                    <p>Amount: ₹{order.amount}</p>

                    <p>Customer: {order.customerName}</p>

                   

                </div>
            )}

        </div>
    );
};

export default TrackOrder;