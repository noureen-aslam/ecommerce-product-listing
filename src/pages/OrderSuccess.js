// src/pages/OrderSuccess.js
import React from 'react';
import './OrderSuccess.css';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="order-success">
      <div className="success-box">
        <h1>🎉 Thank You!</h1>
        <p>Your order has been placed successfully.</p>
        <Link to="/" className="home-link">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
