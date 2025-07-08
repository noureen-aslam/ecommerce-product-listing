// src/components/Filters.js
import React from 'react';
import './Filters.css';

const Filters = ({ selectedCategory, setSelectedCategory, selectedPrice, setSelectedPrice }) => {
  const categories = ['All', 'Clothing', 'Jewelry', 'Makeup', 'Accessories', 'Skincare'];

  return (
    <div className="filters">
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      <h3>Filter by Price</h3>
      <ul>
        <li onClick={() => setSelectedPrice('All')} className={selectedPrice === 'All' ? 'active' : ''}>All</li>
        <li onClick={() => setSelectedPrice('<500')} className={selectedPrice === '<500' ? 'active' : ''}>Below ₹500</li>
        <li onClick={() => setSelectedPrice('500-1000')} className={selectedPrice === '500-1000' ? 'active' : ''}>₹500 – ₹1000</li>
        <li onClick={() => setSelectedPrice('>1000')} className={selectedPrice === '>1000' ? 'active' : ''}>Above ₹1000</li>
      </ul>
    </div>
  );
};

export default Filters;
