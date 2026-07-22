import React, { useEffect, useState } from "react";
import FoodServices from "../../Services/FoodServices";

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);

    const loadOrders = async () => {
        try {
            const response = await FoodServices.getAllOrders();
            setOrders(response.data);
        } catch (error) {
            console.log(error);
            alert("Failed to load orders");
        }
    };

    useEffect(() => {
        loadOrders();
    }, []);

    const updateStatus = async (orderId, status) => {
        try {
            await FoodServices.updateOrderStatus(orderId, status);

            setOrders((prev) =>
                prev.map((order) =>
                    order.id === orderId
                        ? { ...order, status }
                        : order
                )
            );

            alert("Status Updated");
        } catch (error) {
            console.log(error);
            alert("Failed to update status");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Admin Orders</h2>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Update</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>₹{order.amount}</td>

                            <td>{order.status}</td>

                            <td>
                                <select
                                    value={order.status}
                                    onChange={(e) =>
                                        updateStatus(
                                            order.id,
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="PAID">PAID</option>
                                    <option value="PROCESSING">
                                        PROCESSING
                                    </option>
                                    <option value="OUT_FOR_DELIVERY">
                                        OUT FOR DELIVERY
                                    </option>
                                    <option value="DELIVERED">
                                        DELIVERED
                                    </option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrders;