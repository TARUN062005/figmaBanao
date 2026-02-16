import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../shared/Button';
import Input from '../shared/Input';
import '../shared/Shared.css';
import './Auth.css';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [localError, setLocalError] = useState('');

    const { signup, authError, loading } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLocalError('');

        // Validation
        if (!name || !email || !password || !confirmPassword) {
            setLocalError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setLocalError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setLocalError("Password must be at least 6 characters");
            return;
        }

        const success = await signup({ name, email, password });
        if (success) {
            // Auto login logic is handled or we redirect to login
            // For better UX, let's login automatically or redirect to login page with success message
            // Given the requirement "Store new user... Login Success", we'll redirect to login for clarity or auto-login.
            // Let's modify behavior: redirect to Login to force them to use their new credentials (or auto-login inside context context).
            // Actually, context 'signup' just saves. Let's auto-login here if needed.
            // But 'login' function is available. Let's redirect to login for simplicity and security demonstration.
            navigate('/login');
        }
    };

    return (
        <div className="auth-page-wrapper">
            <div className="card-ui auth-card">
                <h2 className="auth-title">Get Started</h2>
                <p className="auth-subtitle">Create a new account</p>

                {authError && <div className="auth-error">{authError}</div>}
                {localError && <div className="auth-error">{localError}</div>}

                <form onSubmit={handleSubmit}>
                    <Input
                        label="Full Name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </Button>
                </form>

                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
                    <div style={{ marginTop: '16px' }}>
                        <Link to="/" className="text-secondary" style={{ fontSize: '13px', textDecoration: 'none' }}>
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
