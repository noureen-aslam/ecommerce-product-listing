// src/pages/AdminOrders.js
import React, { useEffect, useState } from 'react';
import './AdminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/admin/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error('Failed to fetch admin orders:', err));
  }, []);

  return (
    <div className="admin-orders">
      <h2>📦 Admin Orders Panel</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="order-card">
              <p><strong>User:</strong> {order.email}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} (x{item.quantity}) — ₹{item.price}
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ₹{order.totalAmount}</p>
              <p><strong>Address:</strong> {order.address}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminOrders;
