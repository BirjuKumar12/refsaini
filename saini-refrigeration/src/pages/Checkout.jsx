import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { useAuth } from '../components/AuthContext';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.pincode) {
      alert('Please fill in all required fields');
      return;
    }

    // Here you would typically send order data to backend
    const orderData = {
      customer: formData,
      items: cart,
      total: getCartTotal(),
      orderDate: new Date().toISOString()
    };

    console.log('Order placed:', orderData);

    // Clear cart and redirect
    clearCart();

    // Generate a random order ID for demo (in production, backend generates this)
    const orderId = Math.floor(100000 + Math.random() * 900000);

    const newOrder = {
      orderId: orderId.toString(),
      items: cart,
      total: getCartTotal(),
      date: new Date().toISOString(),
      status: 'Processing',
      shipping: formData
    };

    try {
      // Send order to backend API
      const response = await fetch('http://localhost:5001/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      const data = await response.json();
      console.log('Order saved to DB:', data);

    } catch (error) {
      console.error("Error saving order:", error);
      alert("There was an issue saving your order, but we received it locally.");
      // Fallback to localStorage
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      localStorage.setItem('orders', JSON.stringify([newOrder, ...existingOrders]));
    }

    navigate('/order-confirmation', {
      state: {
        orderId,
        total: getCartTotal(),
        items: cart
      }
    });
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

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ced4da',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    fontFamily: "'Montserrat', sans-serif"
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#495057',
    fontSize: '14px',
    fontFamily: "'Montserrat', sans-serif"
  };

  const focusStyle = {
    borderColor: '#0d6efd',
    boxShadow: '0 0 0 4px rgba(13, 110, 253, 0.1)'
  };

  return (
    <div style={{ padding: '120px 20px 60px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontFamily: "'Montserrat', sans-serif", fontWeight: '800', fontSize: '2.5rem', color: '#212529' }}>Checkout</h2>

        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap-reverse' }}>

          {/* Checkout Form */}
          <div style={{ flex: '1.5', minWidth: '350px' }}>
            <form onSubmit={handlePlaceOrder} style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ marginBottom: '25px', color: '#212529', fontFamily: "'Montserrat', sans-serif", fontWeight: '700', borderBottom: '2px solid #f1f3f5', paddingBottom: '15px' }}>
                Shipping Information
              </h3>

              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={labelStyle}>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#ced4da', boxShadow: 'none' })}
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={labelStyle}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#ced4da', boxShadow: 'none' })}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#ced4da', boxShadow: 'none' })}
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={labelStyle}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#ced4da', boxShadow: 'none' })}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={labelStyle}>Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, { borderColor: '#ced4da', boxShadow: 'none' })}
                />
              </div>

              <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '150px' }}>
                  <label style={labelStyle}>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#ced4da', boxShadow: 'none' })}
                  />
                </div>
                <div style={{ flex: 1, minWidth: '150px' }}>
                  <label style={labelStyle}>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#ced4da', boxShadow: 'none' })}
                  />
                </div>
                <div style={{ flex: 1, minWidth: '150px' }}>
                  <label style={labelStyle}>Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#ced4da', boxShadow: 'none' })}
                  />
                </div>
              </div>

              <h3 style={{ marginBottom: '20px', color: '#212529', fontFamily: "'Montserrat', sans-serif", fontWeight: '700', borderBottom: '2px solid #f1f3f5', paddingBottom: '15px' }}>Payment Method</h3>
              <div style={{ marginBottom: '30px' }}>
                <div style={{
                  marginBottom: '15px',
                  padding: '15px',
                  border: formData.paymentMethod === 'cod' ? '2px solid #0d6efd' : '1px solid #ced4da',
                  borderRadius: '10px',
                  backgroundColor: formData.paymentMethod === 'cod' ? '#f0f7ff' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                  onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cod' }))}
                >
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    style={{ transform: 'scale(1.2)', marginRight: '15px', cursor: 'pointer' }}
                  />
                  <div>
                    <label htmlFor="cod" style={{ fontWeight: '600', cursor: 'pointer', fontSize: '16px', display: 'block', color: '#212529' }}>
                      Cash on Delivery (COD)
                    </label>
                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Pay when your order is delivered.</span>
                  </div>
                </div>

                <div style={{
                  marginBottom: '15px',
                  padding: '15px',
                  border: formData.paymentMethod === 'online' ? '2px solid #0d6efd' : '1px solid #ced4da',
                  borderRadius: '10px',
                  backgroundColor: formData.paymentMethod === 'online' ? '#f0f7ff' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                  onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'online' }))}
                >
                  <input
                    type="radio"
                    id="online"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={handleInputChange}
                    style={{ transform: 'scale(1.2)', marginRight: '15px', cursor: 'pointer' }}
                  />
                  <div>
                    <label htmlFor="online" style={{ fontWeight: '600', cursor: 'pointer', fontSize: '16px', display: 'block', color: '#212529' }}>
                      Online Payment
                    </label>
                    <span style={{ fontSize: '13px', color: '#6c757d' }}>Secure payment via UPI, Cards, or Netbanking.</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: '#0d6efd',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 12px rgba(13, 110, 253, 0.3)',
                  transition: 'all 0.3s',
                  fontFamily: "'Montserrat', sans-serif"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(13, 110, 253, 0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 110, 253, 0.3)'; }}
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <div style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              position: 'sticky',
              top: '100px'
            }}>
              <h3 style={{ marginBottom: '20px', color: '#212529', fontFamily: "'Montserrat', sans-serif", fontWeight: '700', borderBottom: '2px solid #f1f3f5', paddingBottom: '15px' }}>Order Summary</h3>

              <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>
                {cart.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '15px 0',
                    borderBottom: index < cart.length - 1 ? '1px solid #f1f3f5' : 'none'
                  }}>
                    <div style={{ position: 'relative' }}>
                      <img src={item.img} alt={item.name} style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        marginRight: '15px',
                        border: '1px solid #f1f3f5',
                        padding: '5px'
                      }} />
                      <span style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '5px',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {item.quantity}
                      </span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h5 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: '600', color: '#343a40', fontFamily: "'Montserrat', sans-serif" }}>{item.name}</h5>
                      <p style={{ margin: '0', color: '#6c757d', fontSize: '13px' }}>
                        ₹{item.price} x {item.quantity}
                      </p>
                    </div>
                    <div style={{ fontWeight: '700', color: '#212529' }}>
                      ₹{((parseFloat(item.price?.toString().replace(/[^0-9.]/g, '') || 0)) * (parseInt(item.quantity) || 1))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                borderTop: '2px dashed #dee2e6',
                paddingTop: '20px',
                marginTop: '10px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ color: '#6c757d' }}>Subtotal</span>
                  <span style={{ fontWeight: '600' }}>₹{getCartTotal()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ color: '#6c757d' }}>Shipping</span>
                  <span style={{ color: '#28a745', fontWeight: '600' }}>Free</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '20px', fontWeight: '800', color: '#0d6efd' }}>
                  <span>Total</span>
                  <span>₹{getCartTotal()}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
