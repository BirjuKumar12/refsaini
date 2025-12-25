import React, { useState } from 'react';
import { productsData } from "../components/Products";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
        const navigate = useNavigate();
        const [loading, setLoading] = useState(false);
        const [message, setMessage] = useState('');
        const [formData, setFormData] = useState({
                name: '',
                price: '',
                description: '',
                img: '',
                star: 5,
                imgCount: 1
        });

        const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData(prev => ({
                        ...prev,
                        [name]: value
                }));
        };

        const handleBulkUpload = async () => {
                if (!window.confirm("Are you sure you want to upload all default products to the database? This might create duplicates if run twice.")) {
                        return;
                }

                setLoading(true);
                setMessage("Uploading products...");

                try {
                        const response = await fetch('http://localhost:5001/api/products/bulk', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(productsData),
                        });

                        const data = await response.json();
                        if (data.success) {
                                setMessage(`Success! ${data.message}`);
                                // navigate('/product');
                        } else {
                                setMessage(`Error: ${data.message}`);
                        }
                } catch (error) {
                        console.error(error);
                        setMessage("Failed to connect to server.");
                } finally {
                        setLoading(false);
                }
        };

        const handleSingleSubmit = async (e) => {
                e.preventDefault();
                setLoading(true);
                setMessage("Adding product...");

                try {
                        const response = await fetch('http://localhost:5001/api/products', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(formData),
                        });

                        const data = await response.json();
                        if (data.success) {
                                setMessage("Product added successfully!");
                                setFormData({
                                        name: '',
                                        price: '',
                                        description: '',
                                        img: '',
                                        star: 5,
                                        imgCount: 1
                                });
                        } else {
                                setMessage(`Error: ${data.message}`);
                        }
                } catch (error) {
                        setMessage("Failed to connect to server.");
                } finally {
                        setLoading(false);
                }
        };

        return (
                <div style={{ padding: '150px 20px', maxWidth: '800px', margin: '0 auto' }}>
                        <h1 className="text-3xl font-bold mb-8 text-center">Manage Products</h1>

                        {message && (
                                <div style={{
                                        padding: '15px',
                                        backgroundColor: message.includes('Error') ? '#f8d7da' : '#d4edda',
                                        color: message.includes('Error') ? '#721c24' : '#155724',
                                        borderRadius: '8px',
                                        marginBottom: '20px'
                                }}>
                                        {message}
                                </div>
                        )}

                        <div style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '15px', marginBottom: '40px' }}>
                                <h2 className="text-xl font-bold mb-4">Initialize Database</h2>
                                <p className="mb-4 text-gray-600">If your database is empty, click below to upload all default products from the local file.</p>
                                <button
                                        onClick={handleBulkUpload}
                                        disabled={loading}
                                        style={{
                                                backgroundColor: '#28a745',
                                                color: 'white',
                                                padding: '12px 24px',
                                                borderRadius: '8px',
                                                border: 'none',
                                                cursor: loading ? 'not-allowed' : 'pointer',
                                                fontWeight: 'bold'
                                        }}
                                >
                                        {loading ? 'Processing...' : 'Upload All Default Products'}
                                </button>
                        </div>

                        <div style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '15px' }}>
                                <h2 className="text-xl font-bold mb-4">Add Single Product</h2>
                                <form onSubmit={handleSingleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        <input
                                                type="text"
                                                name="name"
                                                placeholder="Product Name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                                        />
                                        <input
                                                type="number"
                                                name="price"
                                                placeholder="Price"
                                                value={formData.price}
                                                onChange={handleInputChange}
                                                required
                                                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                                        />
                                        <textarea
                                                name="description"
                                                placeholder="Description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                                        />
                                        <input
                                                type="text"
                                                name="img"
                                                placeholder="Image URL (e.g., /img/prod/Fan.jpg)"
                                                value={formData.img}
                                                onChange={handleInputChange}
                                                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                                        />
                                        <button
                                                type="submit"
                                                disabled={loading}
                                                style={{
                                                        backgroundColor: '#007bff',
                                                        color: 'white',
                                                        padding: '12px 24px',
                                                        borderRadius: '8px',
                                                        border: 'none',
                                                        cursor: loading ? 'not-allowed' : 'pointer',
                                                        fontWeight: 'bold',
                                                        marginTop: '10px'
                                                }}
                                        >
                                                {loading ? 'Adding...' : 'Add Product'}
                                        </button>
                                </form>
                        </div>
                </div>
        );
};

export default AddProduct;
