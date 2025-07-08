// src/components/CartSidebar.js
import React from 'react';
import './CartSidebar.css';
import { Link } from 'react-router-dom';

const CartSidebar = ({ cartItems, onRemove, onUpdateQuantity, isOpen, toggleCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleCart}>✕</button>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item._id}>
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h4>{item.name}</h4>
                <div className="quantity-controls">
                  <button onClick={() => onUpdateQuantity(item._id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item._id, 1)}>+</button>
                </div>
                <p>₹{item.price * item.quantity}</p>
                <button className="delete-btn" onClick={() => onRemove(item._id)}>🗑 Remove</button>
              </div>
            </div>
          ))}

          {/* ✅ Proceed to Checkout Button */}
          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </>
      )}

      <hr />
      <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default CartSidebar;
