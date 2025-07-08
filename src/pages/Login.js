// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import
import './Auth.css';

const Login = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      // After successful login:
if (res.ok) {
  setMessage('✅ Login successful! Redirecting...');
  localStorage.setItem('userEmail', email); // ✅ Save to localStorage

  setTimeout(() => {
    navigate('/'); // Redirect to home
  }, 1000);
}
 else {
        setMessage(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setMessage('❌ Network error');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {message && <p className="msg">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
