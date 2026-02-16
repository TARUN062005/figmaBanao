import React, { useState } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext'; // Import Theme Context
import './DashboardLayout.css';
import '../shared/Shared.css';

const DashboardLayout = () => {
    const { logout } = useAuth();
    const { theme } = useTheme(); // Get current theme state
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        // Apply theme class ONLY to this wrapper
        <div className={`dashboard-layout ${theme}`}>
            {/* Mobile Header */}
            <div className="mobile-header">
                <div className="sidebar-logo" style={{ marginBottom: 0 }}>SaaS App</div>
                <button className="btn-outline-ui" onClick={toggleSidebar} style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>
                    Menu
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-logo">SaaS App</div>

                <nav className="nav-links">
                    <NavLink to="/dashboard" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}>
                        <span>Overview</span>
                    </NavLink>
                    <NavLink to="/dashboard/users" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}>
                        <span>Users</span>
                    </NavLink>
                    <NavLink to="/dashboard/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}>
                        <span>Settings</span>
                    </NavLink>

                    <Link to="/" className="nav-item" style={{ marginTop: 'auto' }}>
                        <span>Back to Home</span>
                    </Link>

                    <button className="nav-item logout-btn" onClick={handleLogout} style={{ marginTop: '8px' }}>
                        <span>Logout</span>
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="dashboard-content">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
