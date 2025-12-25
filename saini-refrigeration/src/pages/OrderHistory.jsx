import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const OrderHistory = () => {
        const [orders, setOrders] = useState([]);
        const { user, token } = useAuth();
        const navigate = useNavigate();

        useEffect(() => {
                if (!user && !token) {
                        navigate('/login');
                        return;
                }
                const fetchOrders = async () => {
                        try {
                                const response = await fetch('http://localhost:5001/api/orders');
                                const data = await response.json();

                                if (data.success) {
                                        setOrders(data.orders);
                                } else {
                                        // Fallback
                                        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
                                        setOrders(savedOrders);
                                }
                        } catch (error) {
                                console.error("Error fetching orders:", error);
                                // Fallback
                                const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
                                setOrders(savedOrders);
                        }
                };

                fetchOrders();
        }, [user, token, navigate]);

        if (!user && !token) {
                return null;
        }

        if (orders.length === 0) {
                return (
                        <div style={{ padding: '140px 0', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700', color: '#212529', marginBottom: '20px' }}>No Orders Found</h2>
                                <p style={{ color: '#6c757d', marginBottom: '30px' }}>You haven't placed any orders yet.</p>
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
                        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                <h2 style={{ textAlign: 'center', marginBottom: '40px', fontFamily: "'Montserrat', sans-serif", fontWeight: '800', fontSize: '2.5rem', color: '#212529' }}>Order History</h2>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                        {orders.map((order) => (
                                                <div key={order.orderId} style={{
                                                        backgroundColor: 'white',
                                                        borderRadius: '16px',
                                                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                                        overflow: 'hidden',
                                                        border: '1px solid #f1f3f5'
                                                }}>
                                                        {/* Order Header */}
                                                        <div style={{
                                                                backgroundColor: '#f8f9fa',
                                                                padding: '15px 25px',
                                                                borderBottom: '1px solid #eee',
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                flexWrap: 'wrap',
                                                                gap: '15px',
                                                                alignItems: 'center'
                                                        }}>
                                                                <div>
                                                                        <span style={{ fontSize: '12px', color: '#6c757d', display: 'block' }}>ORDER PLACED</span>
                                                                        <span style={{ fontWeight: '600', fontSize: '14px' }}>{new Date(order.date).toLocaleDateString()}</span>
                                                                </div>
                                                                <div>
                                                                        <span style={{ fontSize: '12px', color: '#6c757d', display: 'block' }}>TOTAL</span>
                                                                        <span style={{ fontWeight: '600', fontSize: '14px' }}>₹{order.total}</span>
                                                                </div>
                                                                <div>
                                                                        <span style={{ fontSize: '12px', color: '#6c757d', display: 'block' }}>SHIP TO</span>
                                                                        <span style={{ fontWeight: '600', fontSize: '14px', color: '#0d6efd', cursor: 'pointer' }}>{order.shipping.firstName} {order.shipping.lastName}</span>
                                                                </div>
                                                                <div>
                                                                        <span style={{ fontSize: '12px', color: '#6c757d', display: 'block' }}>ORDER # {order.orderId}</span>
                                                                        <span style={{
                                                                                display: 'inline-block',
                                                                                padding: '4px 10px',
                                                                                borderRadius: '20px',
                                                                                backgroundColor: order.status === 'Processing' ? '#fff3cd' : '#d1e7dd',
                                                                                color: order.status === 'Processing' ? '#856404' : '#0f5132',
                                                                                fontSize: '12px',
                                                                                fontWeight: '700',
                                                                                marginTop: '2px'
                                                                        }}>
                                                                                {order.status}
                                                                        </span>
                                                                </div>
                                                        </div>

                                                        {/* Order items */}
                                                        <div style={{ padding: '25px' }}>
                                                                {order.items.map((item, index) => (
                                                                        <div key={index} style={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                marginBottom: index < order.items.length - 1 ? '20px' : '0',
                                                                                paddingBottom: index < order.items.length - 1 ? '20px' : '0',
                                                                                borderBottom: index < order.items.length - 1 ? '1px solid #f1f3f5' : 'none',
                                                                                flexWrap: 'wrap',
                                                                                gap: '20px'
                                                                        }}>
                                                                                <img src={item.img} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '8px', border: '1px solid #eee' }} />
                                                                                <div style={{ flex: 1 }}>
                                                                                        <h4 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{item.name}</h4>
                                                                                        <p style={{ margin: '0', fontSize: '14px', color: '#6c757d' }}>Quantity: {item.quantity}</p>
                                                                                        <p style={{ margin: '0', fontSize: '14px', color: '#6c757d' }}>Price: ₹{item.price}</p>
                                                                                </div>
                                                                                <div style={{ minWidth: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                                                        <button style={{
                                                                                                width: '100%',
                                                                                                padding: '8px 15px',
                                                                                                backgroundColor: '#0d6efd',
                                                                                                color: 'white',
                                                                                                border: 'none',
                                                                                                borderRadius: '4px',
                                                                                                cursor: 'pointer',
                                                                                                fontSize: '14px',
                                                                                                fontWeight: '600'
                                                                                        }}>
                                                                                                Buy it again
                                                                                        </button>
                                                                                        <Link to={`/invoice/${order.orderId}`} style={{ textDecoration: 'none' }}>
                                                                                                <button style={{
                                                                                                        width: '100%',
                                                                                                        padding: '8px 15px',
                                                                                                        backgroundColor: 'white',
                                                                                                        color: '#0d6efd',
                                                                                                        border: '1px solid #0d6efd',
                                                                                                        borderRadius: '4px',
                                                                                                        cursor: 'pointer',
                                                                                                        fontSize: '14px',
                                                                                                        fontWeight: '600'
                                                                                                }}>
                                                                                                        View Invoice
                                                                                                </button>
                                                                                        </Link>
                                                                                </div>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </div>
        );
};

export default OrderHistory;
