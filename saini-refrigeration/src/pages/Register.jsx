import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import "../App.css"

function Register() {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [phone, setPhone] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');

        const { login } = useAuth();
        const navigate = useNavigate();
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);

        const handleSubmit = async (e) => {
                e.preventDefault();
                setError('');

                if (password !== confirmPassword) {
                        setError("Passwords do not match");
                        return;
                }

                setLoading(true);

                try {
                        const response = await fetch('http://localhost:5001/api/auth/register', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                        name: `${firstName} ${lastName}`,
                                        email,
                                        password,
                                        phone
                                }),
                        });

                        const data = await response.json();

                        if (data.success) {
                                login(data.user, data.token);
                                navigate('/');
                        } else {
                                setError(data.message || 'Registration failed');
                        }
                } catch (err) {
                        console.error('Registration error:', err);
                        setError('Something went wrong. Please try again later.');
                } finally {
                        setLoading(false);
                }
        };

        return (
                <div className="flex flex-col justify-center items-center min-h-[100vh] bg-gray-300">
                        <div className="bg-white p-[40px] border-2 rounded-xl pt-[30px] text-center my-4 w-full max-w-lg shadow-lg">
                                <div className="loginCard">
                                        <div className="font-bold text-4xl p-[10px] pb-[30px] text-gray-800"> Registration </div>

                                        {error && (
                                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                                                        <span className="block sm:inline">{error}</span>
                                                </div>
                                        )}

                                        <form onSubmit={handleSubmit}>
                                                <div className="text-xl p-[8px] font-serif text-left">
                                                        <label className='block font-bold mb-1 text-gray-700'>First Name</label>
                                                        <input
                                                                type="text"
                                                                placeholder="Enter your first name"
                                                                className="text-[18px] bg-gray-50 w-full border border-gray-300 rounded-md p-2"
                                                                onChange={(e) => setFirstName(e.target.value)}
                                                                value={firstName}
                                                                required
                                                        />
                                                </div>
                                                <div className="text-xl p-[8px] font-serif text-left">
                                                        <label className='block font-bold mb-1 text-gray-700'>Last Name</label>
                                                        <input
                                                                type="text"
                                                                placeholder="Enter your last name"
                                                                className="text-[18px] bg-gray-50 w-full border border-gray-300 rounded-md p-2"
                                                                onChange={(e) => setLastName(e.target.value)}
                                                                value={lastName}
                                                                required
                                                        />
                                                </div>
                                                <div className="text-xl p-[8px] font-serif text-left">
                                                        <label className='block font-bold mb-1 text-gray-700'>Phone Number</label>
                                                        <input
                                                                type="tel"
                                                                placeholder="Enter your phone number"
                                                                className="text-[18px] bg-gray-50 w-full border border-gray-300 rounded-md p-2"
                                                                onChange={(e) => setPhone(e.target.value)}
                                                                value={phone}
                                                        />
                                                </div>
                                                <div className="text-xl p-[8px] font-serif text-left">
                                                        <label className='block font-bold mb-1 text-gray-700'>Email Address</label>
                                                        <input
                                                                type="email"
                                                                placeholder="Enter your Email id"
                                                                className="text-[18px] bg-gray-50 w-full border border-gray-300 rounded-md p-2"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                value={email}
                                                                required
                                                        />
                                                </div>

                                                <div className="text-xl p-[8px] font-serif text-left">
                                                        <label className='block font-bold mb-1 text-gray-700'>Password</label>
                                                        <input
                                                                type="password"
                                                                placeholder='Enter your Password'
                                                                className="text-[18px] bg-gray-50 w-full border border-gray-300 rounded-md p-2"
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                value={password}
                                                                required
                                                        />
                                                </div>
                                                <div className="text-xl p-[8px] font-serif text-left">
                                                        <label className='block font-bold mb-1 text-gray-700'>Confirm Password</label>
                                                        <input
                                                                type="password"
                                                                placeholder='Confirm Password'
                                                                className="text-[18px] bg-gray-50 w-full border border-gray-300 rounded-md p-2"
                                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                                value={confirmPassword}
                                                                required
                                                        />
                                                </div>

                                                <div className="px-[8px] py-[18px] font-serif mt-4">
                                                        <button
                                                                type="submit"
                                                                disabled={loading}
                                                                className={`w-full bg-green-500 text-white font-bold py-3 px-4 rounded hover:bg-green-600 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                                        >
                                                                {loading ? 'Registering...' : 'Submit'}
                                                        </button>
                                                </div>
                                        </form>

                                        <div className="text-right p-[8px]">
                                                Already have an account?
                                                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-bold ml-2">
                                                        Login
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Register