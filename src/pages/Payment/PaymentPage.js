import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FoodServices from "../../Services/FoodServices";
 

const PaymentPage = () => {

    const [paymentDone, setPaymentDone] = useState(false);


    const { orderId } = useParams();

    const navigate = useNavigate();

    const handlePayment = async () => {

        try {

            const response = await FoodServices.createPaymentOrder(orderId);

            const data = response.data;

            const options = {
                key: "rzp_test_T0hwYuOxDNqhp6", // ✅ REAL KEY HERE

                amount: data.amount * 100, // Razorpay expects paise

                currency: "INR",

                order_id: data.razorpayOrderId,

                handler: async function (paymentResponse) {
                    console.log(paymentResponse);
                    alert("Payment Successful");
                          // ✅ ENABLE TRACK BUTTON AFTER SUCCESS
                   

                      // ✅ UPDATE ORDER STATUS AFTER PAYMENT
                    await FoodServices.updateOrderStatus(orderId, "PAID");
                     setPaymentDone(true);
                    // ✅ NAVIGATE TO TRACK PAGE
                    navigate(`/track-order/${orderId}`);    
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
             

        } catch (error) {
            console.log(error.response?.data || error.message); 
            alert("Payment Failed");
        }
    };

    return (
        <div>
            <h2>Complete Payment</h2> <hr/>
            <button onClick={handlePayment}>Pay Now</button>
            <button style={{ //fill here at end -- disabled={!paymentDone}  
                    marginLeft: "10px",
                    opacity: paymentDone ? 1 : 0.5,
                    cursor: paymentDone ? "pointer" : "not-allowed"
                }} onClick={() => navigate(`/track-order/${orderId}`)}>
    Track Order
</button>
        </div>
    );
};


export default PaymentPage;