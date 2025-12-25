import React, { useState, useEffect } from 'react';
import { productsData } from "../components/Products";
import * as serviceDataIndex from "../components/ServiceIndex";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const AdminDashboard = () => {
        const navigate = useNavigate();
        const { user, token, logout } = useAuth();
        const [activeTab, setActiveTab] = useState('products'); // 'products', 'services', or 'orders'
        const [orders, setOrders] = useState([]);
        const [products, setProducts] = useState([]);
        const [services, setServices] = useState([]);

        // Product Form State...
        // ...
        const [serviceForm, setServiceForm] = useState({
                title: '',
                category: '',
                description: '',
                text: '',
                icon: '',
                star: 5
        });
        const [isNewServiceCategory, setIsNewServiceCategory] = useState(false);

        // Product Form State
        const [loading, setLoading] = useState(false);
        const [message, setMessage] = useState('');
        const [productForm, setProductForm] = useState({
                name: '',
                price: '',
                description: '',
                img: '',
                star: 5,
                imgCount: 1
        });

        // Editing State
        const [editingProductId, setEditingProductId] = useState(null);
        const [editingServiceId, setEditingServiceId] = useState(null);


        // Authentication Check
        useEffect(() => {
                if (!token || !user || user.role !== 'admin') {
                        navigate('/admin-login');
                }
        }, [token, user, navigate]);

        // Fetch Data on Mount/Tab Change
        useEffect(() => {
                if (!user || user.role !== 'admin') return;

                if (activeTab === 'orders') {
                        fetchOrders();
                } else if (activeTab === 'products') {
                        fetchProducts();
                } else if (activeTab === 'services') {
                        fetchServices();
                }
        }, [activeTab]);

        const fetchOrders = async () => {
                try {
                        const response = await fetch('http://localhost:5001/api/orders');
                        const data = await response.json();
                        if (data.success) {
                                setOrders(data.orders);
                        }
                } catch (error) {
                        console.error("Error fetching orders:", error);
                }
        };

        const fetchProducts = async () => {
                try {
                        const response = await fetch('http://localhost:5001/api/products');
                        const data = await response.json();
                        if (data.success) {
                                setProducts(data.products);
                        }
                } catch (error) {
                        console.error("Error fetching products:", error);
                }
        };

        const fetchServices = async () => {
                try {
                        const response = await fetch('http://localhost:5001/api/services');
                        const data = await response.json();
                        if (data.success) {
                                setServices(data.services);
                        }
                } catch (error) {
                        console.error("Error fetching services:", error);
                }
        };

        const handleDeleteProduct = async (id) => {
                if (!window.confirm("Are you sure you want to delete this product?")) return;
                try {
                        await fetch(`http://localhost:5001/api/products/${id}`, { method: 'DELETE' });
                        setMessage("Product deleted");
                        fetchProducts(); // Refresh list
                } catch (e) {
                        alert("Failed to delete");
                }
        };

        const handleProductChange = (e) => {
                const { name, value } = e.target;
                setProductForm(prev => ({ ...prev, [name]: value }));
        };

        const handleCleanupDuplicates = async () => {
                if (!window.confirm("This will remove all duplicate products (by name), keeping only one of each. Are you sure?")) return;
                setLoading(true);
                try {
                        const res = await fetch('http://localhost:5001/api/products/cleanup/duplicates', { method: 'DELETE' });
                        const data = await res.json();
                        setMessage(data.message);
                        fetchProducts();
                } catch (e) { setMessage("Failed to cleanup"); }
                finally { setLoading(false); }
        };



        const handleBulkUpload = async () => {
                if (!window.confirm("WARNING: This will DELETE ALL current products and re-upload the default list. Are you sure?")) return;
                setLoading(true);
                try {
                        // 1. Delete all existing products
                        await fetch('http://localhost:5001/api/products/cleanup/all', { method: 'DELETE' });

                        // 2. Upload default products
                        const res = await fetch('http://localhost:5001/api/products/bulk', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(productsData),
                        });
                        const data = await res.json();
                        setMessage(data.success ? `Database Reset Successful: ${data.message}` : `Error: ${data.message}`);
                        if (data.success) fetchProducts();
                } catch (err) {
                        setMessage("Failed to reset database.");
                } finally {
                        setLoading(false);
                }
        };

        const handleAddProduct = async (e) => {
                e.preventDefault();
                setLoading(true);
                try {
                        const url = editingProductId
                                ? `http://localhost:5001/api/products/${editingProductId}`
                                : 'http://localhost:5001/api/products';

                        const method = editingProductId ? 'PUT' : 'POST';

                        const res = await fetch(url, {
                                method: method,
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(productForm),
                        });
                        const data = await res.json();
                        if (data.success) {
                                setMessage(editingProductId ? "Product updated successfully!" : "Product added successfully!");
                                setProductForm({ name: '', price: '', description: '', img: '', star: 5, imgCount: 1 });
                                setEditingProductId(null);
                                fetchProducts(); // Refresh list
                        } else {
                                setMessage(`Error: ${data.message}`);
                        }
                } catch (err) {
                        console.error("Error connecting to backend:", err);
                        setMessage(`Connection Error: ${err.message}. Please ensure the backend server is running on port 5001 and has been restarted.`);
                } finally {
                        setLoading(false);
                }
        };

        const handleEditProductClick = (product) => {
                setEditingProductId(product._id);
                setProductForm({
                        name: product.name,
                        price: product.price,
                        description: product.description || '',
                        img: product.img,
                        star: product.star || 5,
                        imgCount: product.imgCount || 1
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const handleServiceChange = (e) => {
                const { name, value } = e.target;
                setServiceForm(prev => ({ ...prev, [name]: value }));
        };

        const handleServiceCategorySelect = (e) => {
                const val = e.target.value;
                if (val === 'new') {
                        setIsNewServiceCategory(true);
                        setServiceForm(prev => ({ ...prev, category: '' }));
                } else {
                        setIsNewServiceCategory(false);
                        setServiceForm(prev => ({ ...prev, category: val }));
                }
        };

        const handleAddService = async (e) => {
                e.preventDefault();
                setLoading(true);
                try {
                        const url = editingServiceId
                                ? `http://localhost:5001/api/services/${editingServiceId}`
                                : 'http://localhost:5001/api/services';

                        const method = editingServiceId ? 'PUT' : 'POST';

                        const res = await fetch(url, {
                                method: method,
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(serviceForm),
                        });
                        const data = await res.json();
                        if (data.success) {
                                setMessage(editingServiceId ? "Service updated successfully!" : "Service added successfully!");
                                setServiceForm({ title: '', category: '', description: '', text: '', icon: '', star: 5 });
                                setEditingServiceId(null);
                                setIsNewServiceCategory(false);
                                fetchServices();
                        } else {
                                setMessage(`Error: ${data.message}`);
                        }
                } catch (err) {
                        console.error("Error connecting to backend:", err);
                        setMessage(`Connection Error: ${err.message}. Please ensure the backend server is running on port 5001 and has been restarted.`);
                } finally {
                        setLoading(false);
                }
        };

        const handleEditServiceClick = (service) => {
                setEditingServiceId(service._id);
                setServiceForm({
                        title: service.title,
                        category: service.category,
                        description: service.description,
                        text: service.text,
                        icon: service.icon,
                        star: service.star || 5
                });
                setIsNewServiceCategory(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const handleDeleteService = async (id) => {
                if (!window.confirm("Delete this service?")) return;
                try {
                        await fetch(`http://localhost:5001/api/services/${id}`, { method: 'DELETE' });
                        setMessage("Service deleted");
                        fetchServices();
                } catch (e) {
                        alert("Failed to delete service");
                }
        };

        const handleServiceBulkUpload = async () => {
                if (!window.confirm("This will upload all default services. Existing services will NOT be deleted. Proceed?")) return;
                setLoading(true);
                try {
                        const allServices = [
                                ...serviceDataIndex.AcData.map(s => ({ ...s, category: 'AC Services', price: s.price || 499 })),
                                ...serviceDataIndex.frezData.map(s => ({ ...s, category: 'Refrigerator Services', price: s.price || 399 })),
                                ...serviceDataIndex.wcData.map(s => ({ ...s, category: 'Water Cooler Services', price: s.price || 599 })),
                                ...serviceDataIndex.WmData.map(s => ({ ...s, category: 'Washing Machine Services', price: s.price || 449 })),
                                ...serviceDataIndex.GsData.map(s => ({ ...s, category: 'Geyser Services', price: s.price || 299 })),
                                ...serviceDataIndex.RoData.map(s => ({ ...s, category: 'RO Services', price: s.price || 349 }))
                        ];

                        const res = await fetch('http://localhost:5001/api/services/bulk', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(allServices),
                        });
                        const data = await res.json();
                        setMessage(data.success ? `Services Seeding Successful: ${data.message}` : `Error: ${data.message}`);
                        if (data.success) fetchServices();
                } catch (err) {
                        setMessage("Failed to seed services.");
                } finally {
                        setLoading(false);
                }
        };

        // Group services by category...
        const groupedServices = services.reduce((acc, s) => {
                if (!acc[s.category]) acc[s.category] = [];
                acc[s.category].push(s);
                return acc;
        }, {});

        const uniqueServiceCategories = [...new Set(services.map(s => s.category).filter(Boolean))];

        return (
                <div style={{ padding: '120px 20px', minHeight: '100vh', backgroundColor: '#f4f6f9' }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#333' }}>Admin Panel</h1>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <span style={{ fontWeight: '600', color: '#666' }}>Welcome, {user?.name}</span>
                                                <button
                                                        onClick={() => {
                                                                logout();
                                                                navigate('/admin-login');
                                                        }}
                                                        style={{
                                                                padding: '8px 16px',
                                                                backgroundColor: '#dc3545',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '5px',
                                                                cursor: 'pointer',
                                                                fontWeight: 'bold'
                                                        }}
                                                >
                                                        Logout
                                                </button>
                                        </div>
                                </div>

                                <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
                                        <button
                                                onClick={() => setActiveTab('products')}
                                                style={{
                                                        padding: '10px 20px',
                                                        backgroundColor: activeTab === 'products' ? '#0d6efd' : 'white',
                                                        color: activeTab === 'products' ? 'white' : '#333',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px',
                                                        cursor: 'pointer',
                                                        fontWeight: '600'
                                                }}
                                        >
                                                Manage Products
                                        </button>
                                        <button
                                                onClick={() => setActiveTab('services')}
                                                style={{
                                                        padding: '10px 20px',
                                                        backgroundColor: activeTab === 'services' ? '#0d6efd' : 'white',
                                                        color: activeTab === 'services' ? 'white' : '#333',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px',
                                                        cursor: 'pointer',
                                                        fontWeight: '600'
                                                }}
                                        >
                                                Manage Services
                                        </button>
                                        <button
                                                onClick={() => setActiveTab('orders')}
                                                style={{
                                                        padding: '10px 20px',
                                                        backgroundColor: activeTab === 'orders' ? '#0d6efd' : 'white',
                                                        color: activeTab === 'orders' ? 'white' : '#333',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px',
                                                        cursor: 'pointer',
                                                        fontWeight: '600'
                                                }}
                                        >
                                                View All Orders
                                        </button>
                                </div>

                                <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>

                                        {message && (
                                                <div style={{
                                                        padding: '15px',
                                                        marginBottom: '20px',
                                                        borderRadius: '5px',
                                                        backgroundColor: message.includes('Error') ? '#f8d7da' : '#d1e7dd',
                                                        color: message.includes('Error') ? '#842029' : '#0f5132'
                                                }}>
                                                        {message}
                                                </div>
                                        )}

                                        {activeTab === 'products' && (
                                                <div>
                                                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Manage Products</h2>

                                                        <div style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '8px' }}>
                                                                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Add New Product</h3>
                                                                <form onSubmit={handleAddProduct} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                                                        <input type="text" name="name" placeholder="Product Name" value={productForm.name} onChange={handleProductChange} required style={inputStyle} />
                                                                        <input type="number" name="price" placeholder="Price (₹)" value={productForm.price} onChange={handleProductChange} required style={inputStyle} />

                                                                        <input type="file" accept="image/*" onchange="previewImage(event)" required style={inputStyle} />
                                                                        {/* <input type="text" name="img" placeholder="Image URL" value={productForm.img} onChange={handleProductChange} style={inputStyle} /> */}
                                                                        <textarea name="description" placeholder="Description" value={productForm.description} onChange={handleProductChange} rows="2" style={{ ...inputStyle, gridColumn: 'span 2' }} />
                                                                        <div style={{ gridColumn: 'span 2' }}>
                                                                                <button type="submit" disabled={loading} style={buttonStyle}>
                                                                                        {loading ? 'Saving...' : (editingProductId ? 'Update Product' : 'Add Product')}
                                                                                </button>
                                                                                {editingProductId && (
                                                                                        <button
                                                                                                type="button"
                                                                                                onClick={() => {
                                                                                                        setEditingProductId(null);
                                                                                                        setProductForm({ name: '', price: '', description: '', img: '', star: 5, imgCount: 1 });
                                                                                                }}
                                                                                                style={{ ...buttonStyle, backgroundColor: '#6c757d', marginLeft: '10px' }}
                                                                                        >
                                                                                                Cancel
                                                                                        </button>
                                                                                )}
                                                                                {/* <button
                                                                                        type="button"
                                                                                        onClick={handleBulkUpload}
                                                                                        disabled={loading}
                                                                                        style={{
                                                                                                marginLeft: '10px', backgroundColor: '#6c757d', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer'
                                                                                        }}
                                                                                >
                                                                                        Reset Database (Fresh Start)
                                                                                </button> */}
                                                                                {/* <button
                                                                                        type="button"
                                                                                        onClick={handleCleanupDuplicates}
                                                                                        disabled={loading}
                                                                                        style={{
                                                                                                marginLeft: '10px', backgroundColor: '#dc3545', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer'
                                                                                        }}
                                                                                >
                                                                                        Remove Duplicates
                                                                                </button> */}
                                                                        </div>
                                                                </form>
                                                        </div>

                                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Existing Products</h3>
                                                        <div style={{ maxHeight: '500px', overflowY: 'auto', border: '1px solid #eee' }}>
                                                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                                                        <thead>
                                                                                <tr style={{ backgroundColor: '#f8f9fa', textAlign: 'left' }}>
                                                                                        <th style={thStyle}>Image</th>
                                                                                        <th style={thStyle}>Name</th>
                                                                                        <th style={thStyle}>Price</th>
                                                                                        <th style={thStyle}>Action</th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                                {products.map(product => (
                                                                                        <tr key={product._id} style={{ borderBottom: '1px solid #eee' }}>
                                                                                                <td style={tdStyle}>
                                                                                                        <img src={product.img} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                                                                                                </td>
                                                                                                <td style={tdStyle}>{product.name}</td>
                                                                                                <td style={tdStyle}>₹{product.price}</td>
                                                                                                <td style={tdStyle}>
                                                                                                        <button
                                                                                                                onClick={() => handleEditProductClick(product)}
                                                                                                                style={{ backgroundColor: '#ffc107', color: 'black', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' }}
                                                                                                        >
                                                                                                                Edit
                                                                                                        </button>
                                                                                                        <button
                                                                                                                onClick={() => handleDeleteProduct(product._id)}
                                                                                                                style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                                                                                                        >
                                                                                                                Delete
                                                                                                        </button>
                                                                                                </td>
                                                                                        </tr>
                                                                                ))}
                                                                        </tbody>
                                                                </table>
                                                        </div>
                                                </div>
                                        )}

                                        {activeTab === 'services' && (
                                                <div>
                                                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Manage Services</h2>

                                                        <div style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '8px' }}>
                                                                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Add New Service</h3>
                                                                <form onSubmit={handleAddService} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                                                        <input type="text" name="title" placeholder="Service Title (e.g. AC Repair)" value={serviceForm.title} onChange={handleServiceChange} required style={inputStyle} />

                                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                                <select onChange={handleServiceCategorySelect} style={inputStyle} value={isNewServiceCategory ? 'new' : serviceForm.category} required>
                                                                                        <option value="">-- Select Category --</option>
                                                                                        {uniqueServiceCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                                                                        <option value="new">+ Create New Category</option>
                                                                                </select>
                                                                                {isNewServiceCategory && (
                                                                                        <input
                                                                                                type="text"
                                                                                                name="category"
                                                                                                placeholder="Enter New Category Name"
                                                                                                value={serviceForm.category}
                                                                                                onChange={handleServiceChange}
                                                                                                style={{ ...inputStyle, marginTop: '10px', borderColor: '#0d6efd' }}
                                                                                                autoFocus
                                                                                                required
                                                                                        />
                                                                                )}
                                                                        </div>
                                                                        <input type="file" accept="image/*" onchange="previewImage(event)" required style={inputStyle} />
                                                                        {/* <input type="text" name="icon" placeholder="Icon URL / Image Path" value={serviceForm.icon} onChange={handleServiceChange} required style={inputStyle} /> */}
                                                                        <input type="text" name="text" placeholder="Short Tagline (Brief description)" value={serviceForm.text} onChange={handleServiceChange} required style={inputStyle} />
                                                                        <textarea name="description" placeholder="Full Detailed Description" value={serviceForm.description} onChange={handleServiceChange} rows="3" style={{ ...inputStyle, gridColumn: 'span 2' }} required />

                                                                        <div style={{ gridColumn: 'span 2' }}>
                                                                                <button type="submit" disabled={loading} style={buttonStyle}>
                                                                                        {loading ? 'Adding...' : (editingServiceId ? 'Update Service' : 'Add Service')}
                                                                                </button>
                                                                                {editingServiceId && (
                                                                                        <button
                                                                                                type="button"
                                                                                                onClick={() => {
                                                                                                        setEditingServiceId(null);
                                                                                                        setServiceForm({ title: '', category: '', description: '', text: '', icon: '', star: 5 });
                                                                                                        setIsNewServiceCategory(false);
                                                                                                }}
                                                                                                style={{ ...buttonStyle, backgroundColor: '#6c757d', marginLeft: '10px' }}
                                                                                        >
                                                                                                Cancel
                                                                                        </button>
                                                                                )}
                                                                                {/* <button
                                                                                        type="button"
                                                                                        onClick={handleServiceBulkUpload}
                                                                                        disabled={loading}
                                                                                        style={{
                                                                                                marginLeft: '10px', backgroundColor: '#6c757d', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer'
                                                                                        }}
                                                                                >
                                                                                        Seed Default Services
                                                                                </button> */}
                                                                        </div>
                                                                </form>
                                                        </div>

                                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Services by Category</h3>
                                                        <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                                                                {Object.keys(groupedServices).length === 0 ? (
                                                                        <p>No services found. Add one above.</p>
                                                                ) : (
                                                                        Object.keys(groupedServices).map(cat => (
                                                                                <div key={cat} style={{ marginBottom: '30px' }}>
                                                                                        <h4 style={{ backgroundColor: '#e9ecef', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>{cat}</h4>
                                                                                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #eee' }}>
                                                                                                <thead>
                                                                                                        <tr style={{ backgroundColor: '#f8f9fa', textAlign: 'left' }}>
                                                                                                                <th style={thStyle}>Icon</th>
                                                                                                                <th style={thStyle}>Title</th>
                                                                                                                <th style={thStyle}>Price (₹)</th>
                                                                                                                <th style={thStyle}>Action</th>
                                                                                                        </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                        {groupedServices[cat].map(s => (
                                                                                                                <tr key={s._id} style={{ borderBottom: '1px solid #eee' }}>
                                                                                                                        <td style={tdStyle}>
                                                                                                                                <img src={s.icon} alt="" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                                                                                                                        </td>
                                                                                                                        <td style={tdStyle}>{s.title}</td>
                                                                                                                        <td style={tdStyle}>₹{s.price || 500}</td>
                                                                                                                        <td style={tdStyle}>
                                                                                                                                <button
                                                                                                                                        onClick={() => handleEditServiceClick(s)}
                                                                                                                                        style={{ backgroundColor: '#ffc107', color: 'black', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' }}
                                                                                                                                >
                                                                                                                                        Edit
                                                                                                                                </button>
                                                                                                                                <button
                                                                                                                                        onClick={() => handleDeleteService(s._id)}
                                                                                                                                        style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                                                                                                                                >
                                                                                                                                        Delete
                                                                                                                                </button>
                                                                                                                        </td>
                                                                                                                </tr>
                                                                                                        ))}
                                                                                                </tbody>
                                                                                        </table>
                                                                                </div>
                                                                        ))
                                                                )}
                                                        </div>
                                                </div>
                                        )}

                                        {activeTab === 'orders' && (
                                                <div>
                                                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Customer Orders</h2>
                                                        {orders.length === 0 ? (
                                                                <p>No orders found.</p>
                                                        ) : (
                                                                <div style={{ overflowX: 'auto' }}>
                                                                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                                                                                <thead>
                                                                                        <tr style={{ backgroundColor: '#f8f9fa', textAlign: 'left' }}>
                                                                                                <th style={thStyle}>Order ID</th>
                                                                                                <th style={thStyle}>Date</th>
                                                                                                <th style={thStyle}>Customer</th>
                                                                                                <th style={thStyle}>Items</th>
                                                                                                <th style={thStyle}>Total</th>
                                                                                                <th style={thStyle}>Status</th>
                                                                                        </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                        {orders.map(order => (
                                                                                                <tr key={order._id} style={{ borderBottom: '1px solid #eee' }}>
                                                                                                        <td style={tdStyle}>{order.orderId || order._id.slice(-6)}</td>
                                                                                                        <td style={tdStyle}>{new Date(order.date || order.createdAt).toLocaleDateString()}</td>
                                                                                                        <td style={tdStyle}>
                                                                                                                {order.shipping?.firstName} {order.shipping?.lastName}<br />
                                                                                                                <span style={{ fontSize: '0.8rem', color: '#666' }}>{order.shipping?.phone}</span>
                                                                                                        </td>
                                                                                                        <td style={tdStyle}>
                                                                                                                {order.items?.map(i => (
                                                                                                                        <div key={i.name}>{i.quantity}x {i.name}</div>
                                                                                                                ))}
                                                                                                        </td>
                                                                                                        <td style={tdStyle} >₹{order.total}</td>
                                                                                                        <td style={tdStyle}>
                                                                                                                <span style={{
                                                                                                                        padding: '4px 8px', borderRadius: '12px', fontSize: '0.85rem',
                                                                                                                        backgroundColor: order.status === 'Completed' ? '#d1e7dd' : '#fff3cd',
                                                                                                                        color: order.status === 'Completed' ? '#0f5132' : '#856404'
                                                                                                                }}>
                                                                                                                        {order.status || 'Processing'}
                                                                                                                </span>
                                                                                                        </td>
                                                                                                </tr>
                                                                                        ))}
                                                                                </tbody>
                                                                        </table>
                                                                </div>
                                                        )}
                                                </div>
                                        )}

                                </div>
                        </div>
                </div>
        );
};

const inputStyle = { padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '100%' };
const buttonStyle = { padding: '12px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' };
const thStyle = { padding: '12px', borderBottom: '2px solid #dee2e6' };
const tdStyle = { padding: '12px', verticalAlign: 'top' };

export default AdminDashboard;
