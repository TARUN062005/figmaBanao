import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState(null);

    // Initialize Auth State from LocalStorage
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('currentUser');

        if (token && userData) {
            setIsAuthenticated(true);
            setUser(JSON.parse(userData));
        }
        setLoading(false);
    }, []);

    // Helper: Get Local Users
    const getLocalUsers = () => {
        const users = localStorage.getItem('localUsers');
        return users ? JSON.parse(users) : [];
    };

    // Helper: Fetch API Users
    const fetchApiUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!res.ok) throw new Error("API Error");
            return await res.json();
        } catch (error) {
            console.error("Failed to check API users", error);
            return [];
        }
    };

    // LOGIN FUNCTION
    const login = async (email, password) => {
        setLoading(true);
        setAuthError(null);

        try {
            // 1. Check API Users (Allow any password if email matches)
            const apiUsers = await fetchApiUsers();
            const apiUser = apiUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

            if (apiUser) {
                // Success - API User
                const token = 'api-token-' + Date.now();
                localStorage.setItem('authToken', token);
                // Ensure shape consistency
                const userToSave = { ...apiUser, type: 'api' };
                localStorage.setItem('currentUser', JSON.stringify(userToSave));

                setUser(userToSave);
                setIsAuthenticated(true);
                return true;
            }

            // 2. Check Local Users (Strict password check)
            const localUsers = getLocalUsers();
            const localUser = localUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

            if (localUser) {
                if (localUser.password === password) {
                    // Success - Local User
                    const token = 'local-token-' + Date.now();
                    localStorage.setItem('authToken', token);
                    // Ensure shape consistency
                    const userToSave = { ...localUser, type: 'local' };
                    localStorage.setItem('currentUser', JSON.stringify(userToSave));

                    setUser(userToSave);
                    setIsAuthenticated(true);
                    return true;
                } else {
                    throw new Error("Invalid password");
                }
            }

            // 3. User Not Found
            throw new Error("No account detected");

        } catch (err) {
            setAuthError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // SIGNUP FUNCTION
    const signup = async (userData) => {
        setLoading(true);
        setAuthError(null);

        try {
            const { name, email, password } = userData;

            // 1. Check duplicates in API
            const apiUsers = await fetchApiUsers();
            if (apiUsers.some(u => u.email.toLowerCase() === email.toLowerCase())) {
                throw new Error("Account already exists (API User)");
            }

            // 2. Check duplicates in Local Storage
            const localUsers = getLocalUsers();
            if (localUsers.some(u => u.email.toLowerCase() === email.toLowerCase())) {
                throw new Error("Account already exists");
            }

            // 3. Create New User Object
            const newUser = {
                id: `local-${Date.now()}`,
                name: name,
                username: name.replace(/\s+/g, '').toLowerCase(),
                email: email,
                password: password, // In real app, hash this!
                phone: "000-000-0000",
                website: "local-user.com",
                company: {
                    name: "Self Employed",
                    catchPhrase: "Local Account",
                    bs: "startup"
                },
                address: {
                    street: "Local St",
                    suite: "Apt 1",
                    city: "Internet",
                    zipcode: "00000",
                    geo: { lat: "0", lng: "0" }
                }
            };

            // 4. Save to Local Storage
            const updatedUsers = [...localUsers, newUser];
            localStorage.setItem('localUsers', JSON.stringify(updatedUsers));

            // Optional: Auto-login
            // return login(email, password); 
            // Better UX: redirect to login or dashboard. The prompt says "Store new user".
            // We'll let the component handle navigation.
            return true;

        } catch (err) {
            setAuthError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // LOGOUT FUNCTION
    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        setUser(null);
        setIsAuthenticated(false);
    };

    const value = {
        isAuthenticated,
        user,
        login,
        signup,
        logout,
        loading,
        authError
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
