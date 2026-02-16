import React, { useEffect, useState } from 'react';
import '../shared/Shared.css';

const DashboardSummary = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        activeCompanies: 0,
        apiUsersCount: 0,
        localUsersCount: 0,
        loading: true
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // 1. Fetch API Users
                const apiRes = await fetch('https://jsonplaceholder.typicode.com/users');
                const apiUsers = await apiRes.json();

                // 2. Fetch Local Users
                const localUsersData = localStorage.getItem('localUsers');
                const localUsers = localUsersData ? JSON.parse(localUsersData) : [];

                // 3. Merge for Stats
                const allUsers = [...apiUsers, ...localUsers];

                // Calculate companies
                const companies = new Set(allUsers.map(user =>
                    user.company?.name || "Independent"
                ));

                setStats({
                    totalUsers: allUsers.length,
                    activeCompanies: companies.size,
                    apiUsersCount: apiUsers.length,
                    localUsersCount: localUsers.length,
                    loading: false
                });

            } catch (err) {
                console.error("Failed to fetch stats", err);
                setStats(s => ({ ...s, loading: false }));
            }
        };

        fetchStats();
    }, []);

    if (stats.loading) return <div className="text-secondary">Loading dashboard...</div>;

    return (
        <div>
            <h1 className="page-title">Dashboard Overview</h1>
            <p className="page-subtitle">Welcome to your control center</p>

            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
                <div className="card-ui">
                    <h3 className="text-secondary" style={{ fontSize: '14px', marginBottom: '8px' }}>Total Registered Users</h3>
                    <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--text-primary)' }}>{stats.totalUsers}</div>
                    <div style={{ color: '#4caf50', fontSize: '12px', marginTop: '4px' }}>
                        {stats.apiUsersCount} from API + {stats.localUsersCount} Local
                    </div>
                </div>

                <div className="card-ui">
                    <h3 className="text-secondary" style={{ fontSize: '14px', marginBottom: '8px' }}>Active Companies</h3>
                    <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--text-primary)' }}>{stats.activeCompanies}</div>
                    <div style={{ color: '#ff9800', fontSize: '12px', marginTop: '4px' }}>Global reach</div>
                </div>

                <div className="card-ui">
                    <h3 className="text-secondary" style={{ fontSize: '14px', marginBottom: '8px' }}>System Status</h3>
                    <div style={{ fontSize: '24px', fontWeight: '600', color: '#4caf50' }}>Operational</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '4px' }}>Local Storage Database Active</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSummary;
