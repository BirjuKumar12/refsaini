import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Invoice = () => {
        const { orderId } = useParams();
        const [order, setOrder] = useState(null);

        useEffect(() => {
                const fetchOrder = async () => {
                        try {
                                // ideally we would have a specific endpoint /api/orders/:id, but for now we filter the list
                                const response = await fetch('http://localhost:5001/api/orders');
                                const data = await response.json();

                                if (data.success) {
                                        const foundOrder = data.orders.find(o => o.orderId.toString() === orderId);
                                        if (foundOrder) {
                                                setOrder(foundOrder);
                                                return;
                                        }
                                }
                        } catch (error) {
                                console.error("Error fetching order for invoice:", error);
                        }

                        // Fallback to local storage if not found in DB or API error
                        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
                        const foundOrder = savedOrders.find(o => o.orderId.toString() === orderId);
                        setOrder(foundOrder);
                };

                fetchOrder();
        }, [orderId]);

        if (!order) {
                return (
                        <div style={{ padding: '100px', textAlign: 'center' }}>
                                <h2>Invoice Not Found</h2>
                                <Link to="/order-history">Back to Orders</Link>
                        </div>
                );
        }

        const handlePrint = () => {
                window.print();
        };

        return (
                <div style={{ padding: '80px 20px', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
                        <div style={{
                                maxWidth: '800px',
                                margin: '0 auto',
                                backgroundColor: 'white',
                                padding: '50px',
                                borderRadius: '10px',
                                boxShadow: '0 0 20px rgba(0,0,0,0.05)'
                        }}>

                                {/* Invoice Header */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid #eee', paddingBottom: '30px', marginBottom: '30px' }}>
                                        <div>
                                                <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5rem', color: '#333' }}>INVOICE</h1>
                                                <p style={{ margin: 0, color: '#666' }}>Invoice #: INV-{order.orderId}</p>
                                                <p style={{ margin: 0, color: '#666' }}>Date: {new Date(order.date).toLocaleDateString()}</p>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                                <h2 style={{ color: '#0d6efd', margin: '0 0 10px 0' }}>Saini Refrigeration</h2>
                                                <p style={{ margin: '2px 0', color: '#666', fontSize: '14px' }}>123 Service Road, Tech City</p>
                                                <p style={{ margin: '2px 0', color: '#666', fontSize: '14px' }}>support@sainirefrigeration.com</p>
                                                <p style={{ margin: '2px 0', color: '#666', fontSize: '14px' }}>+91 98765 43210</p>
                                        </div>
                                </div>

                                {/* Bill To */}
                                <div style={{ marginBottom: '40px' }}>
                                        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px', color: '#444' }}>Bill To:</h3>
                                        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '18px' }}>{order.shipping.firstName} {order.shipping.lastName}</p>
                                        <p style={{ margin: '0 0 3px 0', color: '#555' }}>{order.shipping.address}</p>
                                        <p style={{ margin: '0 0 3px 0', color: '#555' }}>{order.shipping.city}, {order.shipping.state} - {order.shipping.pincode}</p>
                                        <p style={{ margin: '10px 0 0 0', color: '#555' }}>Email: {order.shipping.email}</p>
                                        <p style={{ margin: '0', color: '#555' }}>Phone: {order.shipping.phone}</p>
                                </div>

                                {/* Items Table */}
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px' }}>
                                        <thead>
                                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                                        <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Item Description</th>
                                                        <th style={{ padding: '15px', textAlign: 'center', borderBottom: '2px solid #ddd' }}>Price</th>
                                                        <th style={{ padding: '15px', textAlign: 'center', borderBottom: '2px solid #ddd' }}>Qty</th>
                                                        <th style={{ padding: '15px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>Total</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                {order.items.map((item, index) => (
                                                        <tr key={index}>
                                                                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
                                                                        <div style={{ fontWeight: '600', color: '#333' }}>{item.name}</div>
                                                                </td>
                                                                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #eee' }}>₹{item.price}</td>
                                                                <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #eee' }}>{item.quantity}</td>
                                                                <td style={{ padding: '15px', textAlign: 'right', borderBottom: '1px solid #eee', fontWeight: '600' }}>₹{item.price * item.quantity}</td>
                                                        </tr>
                                                ))}
                                        </tbody>
                                </table>

                                {/* Totals */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                                        <div style={{ width: '300px' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                                                        <span style={{ color: '#666' }}>Subtotal:</span>
                                                        <span style={{ fontWeight: '600' }}>₹{order.total}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                                                        <span style={{ color: '#666' }}>Shipping:</span>
                                                        <span style={{ fontWeight: '600', color: '#28a745' }}>Free</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
                                                        <span>Total:</span>
                                                        <span>₹{order.total}</span>
                                                </div>
                                        </div>
                                </div>

                                {/* Footer/Buttons */}
                                <div className="no-print" style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '30px' }}>
                                        <p style={{ marginBottom: '20px', color: '#888', fontStyle: 'italic' }}>Thank you for your business!</p>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                                <button
                                                        onClick={handlePrint}
                                                        style={{ padding: '12px 30px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
                                                >
                                                        Print Invoice
                                                </button>
                                                <Link to="/order-history">
                                                        <button
                                                                style={{ padding: '12px 30px', backgroundColor: 'transparent', color: '#0d6efd', border: '1px solid #0d6efd', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
                                                        >
                                                                Back to Orders
                                                        </button>
                                                </Link>
                                        </div>
                                </div>

                                {/* Print Styles */}
                                <style>
                                        {`
            @media print {
              body * {
                visibility: hidden;
              }
              .no-print {
                display: none !important;
              }
              #root > div {
                padding: 0 !important;
                background-color: white !important;
              }
              div[style*="box-shadow"] {
                box-shadow: none !important;
                padding: 0 !important;
                width: 100% !important;
                max-width: 100% !important;
                visibility: visible;
                position: absolute;
                left: 0;
                top: 0;
              }
              div[style*="box-shadow"] * {
                visibility: visible;
              }
            }
          `}
                                </style>
                        </div>
                </div>
        );
};

export default Invoice;
