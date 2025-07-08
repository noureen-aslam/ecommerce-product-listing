// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ searchQuery, setSearchQuery, onCartToggle }) {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/login');
    window.location.reload(); // To update navbar
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Shophera</h1>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="navbar-right">
        <button className="cart-btn" onClick={onCartToggle}>🛒 Cart</button>
        {userEmail ? (
  <>
    <Link to="/my-orders" className="orders-btn">My Orders</Link>
    <span className="user-email">{userEmail}</span>
    <button className="logout-btn" onClick={handleLogout}>Logout</button>
  </>
) : (
  <>
    <Link to="/login" className="login-btn">Login</Link>
    <Link to="/signup" className="signup-btn">Sign Up</Link>
  </>
)}
{userEmail === 'noureenaslam49@gmail.com' && (
  <Link to="/admin-orders" className="orders-btn">Admin Panel</Link>
)}


      </div>
    </nav>
  );
}

export default Navbar;
