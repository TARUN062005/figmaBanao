import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check for token on mount
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('user');

        if (token) {
            setIsAuthenticated(true);
            if (userData) {
                setUser(JSON.parse(userData));
            }
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Fake authentication
        if (email && password) { // Add real validation if needed
            const fakeToken = 'kb_token_' + Math.random().toString(36).substr(2);
            const fakeUser = { email, name: email.split('@')[0] };

            localStorage.setItem('authToken', fakeToken);
            localStorage.setItem('user', JSON.stringify(fakeUser));

            setIsAuthenticated(true);
            setUser(fakeUser);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
    };

    const value = {
        isAuthenticated,
        user,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
