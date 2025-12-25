import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { useAuth } from '../components/AuthContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const buttonStyle = {
    transition: 'all 0.2s',
    cursor: 'pointer'
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: '140px 0', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700', color: '#212529', marginBottom: '20px' }}>Your Cart is Empty</h2>
        <p style={{ color: '#6c757d', marginBottom: '30px' }}>Looks like you haven't added anything yet.</p>
        <Link to="/product" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#0d6efd',
            color: '#ffffff',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(13, 110, 253, 0.3)',
            transition: 'all 0.3s'
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(13, 110, 253, 0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 110, 253, 0.3)'; }}
          >
            Start Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '120px 20px 60px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '800', fontSize: '2.5rem', color: '#212529', margin: 0 }}>Your Cart</h2>
          <span style={{ fontSize: '1.2rem', color: '#6c757d', fontWeight: '500' }}>{cart.length} Items</span>
        </div>


        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cart.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '25px',
              border: 'none',
              borderRadius: '16px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              transition: 'transform 0.2s',
              flexWrap: 'wrap',
              gap: '20px'
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <img src={item.img} alt={item.name} style={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
                borderRadius: '12px',
                border: '1px solid #f8f9fa',
                padding: '10px'
              }} />

              <div style={{ flex: '1 1 200px' }}>
                <h4 style={{ margin: '0 0 8px 0', fontFamily: "'Montserrat', sans-serif", fontWeight: '600', color: '#343a40' }}>{item.name}</h4>
                <p style={{ margin: '0', color: '#6c757d', fontWeight: '500' }}>Unit Price: ₹{item.price}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#f8f9fa', padding: '5px 10px', borderRadius: '50px' }}>
                <button
                  onClick={() => updateQuantity(item.name, item.quantity - 1)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: '#495057',
                    fontWeight: 'bold',
                    ...buttonStyle
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e9ecef'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
                >
                  -
                </button>
                <span style={{ fontWeight: '600', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.name, item.quantity + 1)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: '#495057',
                    fontWeight: 'bold',
                    ...buttonStyle
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e9ecef'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
                >
                  +
                </button>
              </div>

              <div style={{ fontWeight: '700', fontSize: '1.2rem', color: '#212529', minWidth: '100px', textAlign: 'right' }}>
                ₹{item.price * item.quantity}
              </div>

              <button
                onClick={() => removeFromCart(item.name)}
                style={{
                  padding: '10px',
                  backgroundColor: '#fee2e2',
                  color: '#dc3545',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fecaca'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fee2e2'; }}
              >
                <span style={{ fontSize: '16px' }}>×</span> Remove
              </button>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '40px',
          padding: '30px',
          borderRadius: '16px',
          backgroundColor: '#fff',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#6c757d', fontSize: '14px', marginBottom: '5px' }}>Total Amount</span>
              <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0d6efd', lineHeight: '1' }}>₹{getCartTotal()}</span>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <button
                onClick={clearCart}
                style={{
                  padding: '12px 25px',
                  backgroundColor: '#f8f9fa',
                  color: '#6c757d',
                  border: '1px solid #dee2e6',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e9ecef'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f8f9fa'; }}
              >
                Clear Cart
              </button>
              <Link to="/checkout" style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    padding: '12px 40px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '700',
                    boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(40, 167, 69, 0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(40, 167, 69, 0.3)'; }}
                >
                  Proceed to Checkout →
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/product" style={{ textDecoration: 'none', color: '#0d6efd', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
