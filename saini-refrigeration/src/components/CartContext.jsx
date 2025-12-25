import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; // Import useAuth

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const { user } = useAuth(); // Get user from AuthContext
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const API_BASE_URL = 'http://localhost:5001/api';

  // Load cart from API on mount
  useEffect(() => {
    // Only load if user is logged in
    if (!user) {
      setCart([]); // Reset cart if not logged in
      return;
    }

    const loadCartFromAPI = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/cart`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data.success && data.cart) {
          setCart(data.cart);
        }
      } catch (error) {
        console.error('Error loading cart from API:', error);
        // Fallback to localStorage if API fails
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
      }
    };

    loadCartFromAPI();
  }, [user]); // Add user dependency

  // Save cart to API whenever cart changes
  useEffect(() => {
    if (!user) return; // Don't save if not logged in

    const saveCartToAPI = async () => {
      try {
        const token = localStorage.getItem('token');
        await fetch(`${API_BASE_URL}/cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ cart }),
        });
      } catch (error) {
        console.error('Error saving cart to API:', error);
        // Fallback to localStorage if API fails
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    };

    if (cart.length >= 0) { // Only save if cart has been initialized
      saveCartToAPI();
    }
  }, [cart, user]); // Add user dependency

  const addToCart = (product) => {
    if (!user) {
      alert("Please login first to add items to cart!");
      window.location.href = '/Login'; // Redirect to login
      return;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.name === product.name);
      if (existingItem) {
        return prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Ensure price is a number
        let numericPrice = product.price;
        if (typeof numericPrice === 'string') {
          numericPrice = parseFloat(numericPrice.replace(/[^0-9.]/g, '')) || 0;
        }
        return [...prevCart, { ...product, price: numericPrice, quantity: 1 }];
      }
    });

    // Show notification
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (productName) => {
    setCart(prevCart => prevCart.filter(item => item.name !== productName));
  };

  const updateQuantity = (productName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productName);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.name === productName ? { ...item, quantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      // Ensure price is treated as a number, stripping any non-numeric chars except dot if necessary
      // Assuming price might be a string like "1200" or maybe "1,200"
      let price = item.price;
      if (typeof price === 'string') {
        price = parseFloat(price.replace(/[^0-9.]/g, ''));
      }
      const quantity = parseInt(item.quantity) || 1;
      return total + ((price || 0) * quantity);
    }, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = async () => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE_URL}/cart`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart via API:', error);
      // Fallback to local clearing
      setCart([]);
    }
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getCartTotal,
      getCartCount,
      clearCart,
      notification
    }}>
      {children}
    </CartContext.Provider>
  );
};
