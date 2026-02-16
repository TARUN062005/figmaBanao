import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import Input from '../shared/Input';
import Button from '../shared/Button';
import '../shared/Shared.css';

const SettingsPage = () => {
    const { user } = useAuth();
    const { theme, toggleTheme } = useTheme();

    // Local state for form
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [notifications, setNotifications] = useState(true);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    const handleSave = (e) => {
        e.preventDefault();
        // Here you would typically call an update API
        // For now, we simulate saving to localStorage
        const updatedUser = { ...user, name, email };
        localStorage.setItem('user', JSON.stringify(updatedUser)); // Update local storage mock
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div>
            <h1 className="page-title">Settings</h1>
            <p className="page-subtitle">Manage your preferences and profile.</p>

            <div className="settings-grid" style={{ display: 'grid', gap: '32px', marginTop: '32px' }}>

                {/* Profile Section */}
                <div className="card-ui">
                    <h2 className="text-secondary" style={{ fontSize: '18px', marginBottom: '24px' }}>Profile Information</h2>
                    <form onSubmit={handleSave}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <Input
                                label="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                label="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled // Start disabled for demo
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
                            {saved && <span style={{ color: '#4caf50' }}>Settings saved!</span>}
                            <Button type="submit">Save Changes</Button>
                        </div>
                    </form>
                </div>

                {/* Appearance Section */}
                <div className="card-ui">
                    <h2 className="text-secondary" style={{ fontSize: '18px', marginBottom: '24px' }}>Appearance</h2>
                    <div className="setting-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: '500', color: 'white' }}>Theme Mode</div>
                            <div className="text-secondary" style={{ fontSize: '14px' }}>Switch between dark and light themes</div>
                        </div>
                        <Button variant="outline" onClick={toggleTheme}>
                            {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        </Button>
                    </div>
                </div>

                {/* Notifications Section */}
                <div className="card-ui">
                    <h2 className="text-secondary" style={{ fontSize: '18px', marginBottom: '24px' }}>Notifications</h2>
                    <div className="setting-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: '500', color: 'white' }}>Email Notifications</div>
                            <div className="text-secondary" style={{ fontSize: '14px' }}>Receive updates about your account activity</div>
                        </div>
                        <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '28px' }}>
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={() => setNotifications(!notifications)}
                                style={{ opacity: 0, width: 0, height: 0 }}
                            />
                            <span className="slider" style={{
                                position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0,
                                backgroundColor: notifications ? '#8054ff' : '#ccc',
                                borderRadius: '34px',
                                transition: '.4s'
                            }}>
                                <span style={{
                                    position: 'absolute', content: "", height: '20px', width: '20px', left: '4px', bottom: '4px',
                                    backgroundColor: 'white', borderRadius: '50%', transition: '.4s',
                                    transform: notifications ? 'translateX(22px)' : 'translateX(0)'
                                }}></span>
                            </span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SettingsPage;
