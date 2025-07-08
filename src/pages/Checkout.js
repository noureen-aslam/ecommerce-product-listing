// src/pages/Checkout.js
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, clearCart }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
  e.preventDefault();

  if (!form.name || !form.phone || !form.address) {
    alert('⚠️ Please fill all fields!');
    return;
  }

  const orderPayload = {
    name: form.name,
    phone: form.phone,
    address: form.address,
    items: cartItems,
    totalAmount,
  };

  try {
    const response = await fetch('http://localhost:5000/api/orders/place-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload),
    });

    if (!response.ok) throw new Error('Order failed');

    alert('✅ Order saved to database!');
    clearCart();
    navigate('/order-success');
  } catch (err) {
    alert('❌ Could not place order');
    console.error(err);
  }
};


  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              rows="4"
              value={form.address}
              onChange={handleChange}
              required
            ></textarea>

            <h3>Order Summary</h3>
            <ul className="checkout-list">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                    <p>₹{item.price * item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h3>Total: ₹{totalAmount.toFixed(2)}</h3>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
