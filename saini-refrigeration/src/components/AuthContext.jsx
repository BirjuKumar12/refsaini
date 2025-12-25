import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
        const [token, setToken] = useState(localStorage.getItem('token'));
        const [user, setUser] = useState(() => {
                const savedUser = localStorage.getItem('user');
                return savedUser ? JSON.parse(savedUser) : null;
        });

        useEffect(() => {
                // Keep token sync if it changes elsewhere (rare but good practice)
                const storedToken = localStorage.getItem('token');
                if (storedToken !== token) {
                        setToken(storedToken);
                }
        }, [token]);

        const login = (userData, authToken) => {
                setUser(userData);
                setToken(authToken);
                localStorage.setItem('token', authToken);
                localStorage.setItem('user', JSON.stringify(userData));
        };

        const logout = () => {
                setUser(null);
                setToken(null);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
        };

        return (
                <AuthContext.Provider value={{ user, token, login, logout }}>
                        {children}
                </AuthContext.Provider>
        );
};

export const useAuth = () => useContext(AuthContext);
