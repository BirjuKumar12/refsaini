import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import "../App.css"

function Login() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const { login } = useAuth();
        const navigate = useNavigate();
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const { user, token } = useAuth();

        useEffect(() => {
                if (user || token) {
                        navigate('/');
                }
        }, [user, token, navigate]);

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

                        if (data.success) {
                                login(data.user, data.token);
                                // navigate home or to previous page
                                navigate('/');
                        } else {
                                setError(data.message || 'Login failed');
                        }
                } catch (err) {
                        console.error('Login error:', err);
                        setError('Something went wrong. Please try again later.');
                } finally {
                        setLoading(false);
                }
        };

        return (
                <div className="flex flex-col justify-center items-center h-screen bg-gray-300">
                        <div className="bg-white p-[40px] border-2 rounded-xl pt-[30px] text-center w-full max-w-md shadow-lg">
                                <div className="loginCard">
                                        <div className="font-bold text-5xl p-[10px] pb-[30px] text-gray-800">
                                                User Login
                                        </div>

                                        {error && (
                                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                                                        <span className="block sm:inline">{error}</span>
                                                </div>
                                        )}

                                        <form onSubmit={handleSubmit}>
                                                <div className="text-2xl p-[8px] font-serif text-left">
                                                        <label className='block text-lg font-bold mb-2 text-gray-700' htmlFor="email">
                                                                Email Address
                                                        </label>
                                                        <input
                                                                id="email"
                                                                type="email"
                                                                placeholder="Enter your Email..."
                                                                className="text-[18px] bg-gray-50 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                value={email}
                                                                required
                                                        />
                                                </div>

                                                <div className="text-2xl p-[8px] font-serif text-left">
                                                        <label className='block text-lg font-bold mb-2 text-gray-700' htmlFor="password">
                                                                Password
                                                        </label>
                                                        <input
                                                                id="password"
                                                                type="password"
                                                                placeholder='Enter your Password...'
                                                                className="text-[18px] bg-gray-50 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                value={password}
                                                                required
                                                        />
                                                </div>

                                                <div className="p-[8px] font-serif mt-4">
                                                        <button
                                                                type="submit"
                                                                disabled={loading}
                                                                className={`w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                                        >
                                                                {loading ? 'Logging In...' : 'Login'}
                                                        </button>
                                                </div>
                                        </form>

                                        <div className="mt-6 text-gray-600">
                                                Don't have an account?
                                                <Link to="/Register" className="text-blue-600 hover:text-blue-800 font-bold ml-2">
                                                        Register
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

export default Login;