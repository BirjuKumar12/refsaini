import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderConfirmation = () => {
        const location = useLocation();
        const { orderId, total, items } = location.state || {}; // Expecting these from navigation state

        // Fallback if accessed directly without state
        if (!location.state) {
                return (
                        <div style={{ padding: '140px 0', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700', color: '#212529', marginBottom: '20px' }}>No Order Found</h2>
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
                                        }}>
                                                Start Shopping
                                        </button>
                                </Link>
                        </div>
                );
        }

        return (
                <div style={{ padding: '120px 20px 60px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

                                <div style={{
                                        backgroundColor: 'white',
                                        padding: '40px',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                        marginBottom: '30px'
                                }}>
                                        <div style={{
                                                width: '80px',
                                                height: '80px',
                                                backgroundColor: '#d1e7dd',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 20px'
                                        }}>
                                                <span style={{ fontSize: '40px', color: '#198754' }}>✓</span>
                                        </div>

                                        <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '800', fontSize: '2.5rem', color: '#212529', marginBottom: '10px' }}>Order Placed Successfully!</h2>
                                        <p style={{ color: '#6c757d', fontSize: '1.1rem', marginBottom: '30px' }}>Thank you for your purchase. Your order ID is <strong>#{orderId}</strong>.</p>

                                        <div style={{ borderTop: '2px dashed #f1f3f5', borderBottom: '2px dashed #f1f3f5', padding: '20px 0', marginBottom: '30px' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                                        <span style={{ color: '#6c757d' }}>Order Number</span>
                                                        <span style={{ fontWeight: '600' }}>#{orderId}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                                        <span style={{ color: '#6c757d' }}>Confirmation Email</span>
                                                        <span style={{ fontWeight: '600' }}>Sent to your email</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', color: '#212529', fontWeight: '700', marginTop: '15px' }}>
                                                        <span>Total Amount</span>
                                                        <span>₹{total}</span>
                                                </div>
                                        </div>

                                        <h4 style={{ textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontWeight: '700', marginBottom: '15px' }}>Items Ordered</h4>
                                        <div style={{ marginBottom: '30px' }}>
                                                {items && items.map((item, index) => (
                                                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f8f9fa' }}>
                                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                        <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: '8px', border: '1px solid #eee', marginRight: '15px' }} />
                                                                        <div style={{ textAlign: 'left' }}>
                                                                                <div style={{ fontWeight: '600', fontSize: '14px' }}>{item.name}</div>
                                                                                <div style={{ fontSize: '12px', color: '#6c757d' }}>Qty: {item.quantity}</div>
                                                                        </div>
                                                                </div>
                                                                <div style={{ fontWeight: '600' }}>₹{item.price * item.quantity}</div>
                                                        </div>
                                                ))}
                                        </div>

                                        <Link to="/product" style={{ textDecoration: 'none' }}>
                                                <button style={{
                                                        backgroundColor: '#0d6efd',
                                                        color: '#ffffff',
                                                        border: 'none',
                                                        padding: '15px 40px',
                                                        borderRadius: '50px',
                                                        cursor: 'pointer',
                                                        fontSize: '16px',
                                                        fontWeight: '700',
                                                        boxShadow: '0 4px 12px rgba(13, 110, 253, 0.3)',
                                                        transition: 'all 0.3s'
                                                }}
                                                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(13, 110, 253, 0.4)'; }}
                                                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 110, 253, 0.3)'; }}
                                                >
                                                        Continue Shopping
                                                </button>
                                        </Link>

                                </div>
                        </div>
                </div>
        );
};

export default OrderConfirmation;
