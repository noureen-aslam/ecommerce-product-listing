// src/pages/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('🎉 Signup successful! Redirecting...');
        setTimeout(() => {
          navigate('/login'); // ✅ Redirect after delay
        }, 1000);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (err) {
      setMessage('❌ Network error');
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        {message && <p className="msg">{message}</p>}
      </form>
    </div>
  );
};

export default Signup;
