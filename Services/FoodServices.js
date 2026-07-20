import axios  from "axios";
//const FOODORDER_BASE_URL="http://localhost:8080/api/users"
const USER_BASE_URL = "http://localhost:8080/api/users";
const ORDER_BASE_URL = "http://localhost:8080/api/orders";
const PAYMENT_BASE_URL = "http://localhost:8080/api/payments"

class FoodServices{
    getUser(){
        return axios.get(USER_BASE_URL);
    }
    registerUser(user){
        return axios.post(`${USER_BASE_URL}/register`,user);
    }
    loginUser(user){
        return axios.post(`${USER_BASE_URL}/login`,user)
    } 
    placeOrder = (orderData) => {
    return axios.post(ORDER_BASE_URL, orderData);
    };

    trackOrder(orderId) {
    return axios.get(`${ORDER_BASE_URL}/${orderId}`);
}

    updateOrderStatus(orderId, status) {
    return axios.put(
        `${ORDER_BASE_URL}/${orderId}/status`,
        { status }
    );
}
getAllOrders() {
    return axios.get(ORDER_BASE_URL);
}

  createPaymentOrder(orderId) {
        return axios.post(
            `${PAYMENT_BASE_URL}/create-order/${orderId}`
        );
    }

    verifyPayment(paymentData) {
        return axios.post(
            `${PAYMENT_BASE_URL}/verify`,
            paymentData
        );
}
}
export default new FoodServices();