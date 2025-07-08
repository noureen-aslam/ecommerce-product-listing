import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// 🧩 Components
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import TopDealsCarousel from './components/TopDealsCarousel';
import CartSidebar from './components/CartSidebar';

// 📄 Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import MyOrders from './pages/MyOrders';
import AdminOrders from './pages/AdminOrders';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //  Fetch product data
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data);
        else {
          console.error(' Expected array, got:', data);
          setProducts([]);
        }
      })
      .catch((err) => {
        console.error(' Error fetching products:', err);
        setProducts([]);
      });
  }, []);

  // 🧠 Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    let matchesPrice = true;
    if (selectedPrice === '<500') matchesPrice = product.price < 500;
    else if (selectedPrice === '500-1000')
      matchesPrice = product.price >= 500 && product.price <= 1000;
    else if (selectedPrice === '>1000') matchesPrice = product.price > 1000;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  // ➕ Add to Cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item._id === product._id);
      if (exists) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // 🔄 Update Quantity
  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === id
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ❌ Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // 🧾 Toggle Cart Sidebar
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // ✅ JSX Return
  return (
    <Routes>
      {/* 📌 Authentication Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* 📦 Order Routes */}
      <Route
        path="/checkout"
        element={<Checkout cartItems={cartItems} clearCart={() => setCartItems([])} />}
      />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/my-orders" element={<MyOrders />} />

      {/* 🏠 Home Route */}
      <Route path="/admin/orders" element={<AdminOrders />} />

      <Route
        path="/"
        element={
          <>
            <Navbar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onCartToggle={toggleCart}
            />

            <TopDealsCarousel />

            <div className="main-content">
              <Filters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
              />

              <div className="grid">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      onClick={() => setSelectedProduct(product)}
                      addToCart={addToCart}
                    />
                  ))
                ) : (
                  <p>No products found.</p>
                )}
              </div>
            </div>

            

<ProductModal
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
  addToCart={addToCart}
/>


            <CartSidebar
              cartItems={cartItems}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
              isOpen={isCartOpen}
              toggleCart={toggleCart}
            />
            
          </>
        }
      />
    </Routes>
  );
}

export default App;
