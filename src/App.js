// src/App.js
import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import productsData from './data/products';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>🛍️ E-Commerce Product Listing</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
