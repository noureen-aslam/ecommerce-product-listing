import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.name} />
        <div className="modal-info">
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>₹{product.price}</p>
          <p><strong>Description:</strong> {product.description || 'No description available.'}</p>
          <button onClick={() => {
            addToCart(product);
            onClose();
          }}>
            🛒 Add to Cart
          </button>
        </div>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default ProductModal;
