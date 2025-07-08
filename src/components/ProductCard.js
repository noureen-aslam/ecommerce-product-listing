// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onClick, addToCart }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name.slice(0, 40)}...</h3>
      <p className="desc-preview">{product.description?.slice(0, 60)}...</p>
      <p>₹{product.price}</p>
      <button onClick={(e) => {
        e.stopPropagation();
        addToCart(product);
      }}>
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
