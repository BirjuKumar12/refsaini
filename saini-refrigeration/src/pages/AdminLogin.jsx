import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const AdminLogin = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);

        const navigate = useNavigate();
        const { user, token, login } = useAuth(); // We reuse the context login, but handle navigation differently

        useEffect(() => {
                if (token && user && user.role === 'admin') {
                        navigate('/admin');
                }
        }, [token, user, navigate]);

        const handleSubmit = async (e) => {
                e.preventDefault();
                setError('');
                setLoading(true);

                try {
                        const response = await fetch('http://localhost:5001/api/auth/login', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ email, password }),
                        });

                        const data = await response.json();

                        if (!response.ok) {
                                throw new Error(data.message || 'Login failed');
                        }

                        // Check for Admin Role
                        if (data.user.role !== 'admin') {
                                throw new Error("Access Denied: You are not an admin.");
                        }

                        login(data.user, data.token);
                        navigate('/admin'); // Redirect to Admin Dashboard
                } catch (err) {
                        setError(err.message);
                } finally {
                        setLoading(false);
                }
        };

        // Auto-fill admin credentials demo button (optional, removing for "real" feel but helpful for user)
        const fillDemo = () => {
                setEmail("admin@gmail.com");
                setPassword("admin123");
        }

        return (
                <div style={{ padding: '150px 20px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ maxWidth: '400px', width: '100%', padding: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '10px', backgroundColor: '#fff', borderTop: '5px solid #dc3545' }}>
                                <h2 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Admin Login</h2>

                                {error && <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '5px', textAlign: 'center' }}>{error}</div>}

                                <form onSubmit={handleSubmit}>
                                        <div style={{ marginBottom: '15px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Email</label>
                                                <input
                                                        type="email"
                                                        required
                                                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                />
                                        </div>
                                        <div style={{ marginBottom: '20px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Password</label>
                                                <input
                                                        type="password"
                                                        required
                                                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                />
                                        </div>
                                        <button
                                                type="submit"
                                                disabled={loading}
                                                style={{ width: '100%', padding: '12px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
                                        >
                                                {loading ? 'Verifying...' : 'Login to Admin Panel'}
                                        </button>
                                </form>

                                <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
                                        <p>Admin Setup: <button onClick={async () => {
                                                try {
                                                        await fetch('http://localhost:5001/api/auth/seed-admin', { method: 'POST' });
                                                        fillDemo();
                                                        alert("Admin User Created: admin@gmail.com / admin123");
                                                } catch (e) { alert("Error seeding admin"); }
                                        }} style={{ border: 'none', background: 'none', color: 'blue', cursor: 'pointer', fontSize: '0.8rem' }}>Click here to create default admin</button></p>
                                </div>
                        </div>
                </div>
        );
};

export default AdminLogin;
