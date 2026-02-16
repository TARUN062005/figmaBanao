import React, { useEffect, useState } from 'react';
import '../shared/Shared.css';

const DashboardSummary = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        activeCompanies: 0,
        loading: true
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                // Calculate stats
                const companies = new Set(data.map(user => user.company.name));
                setStats({
                    totalUsers: data.length,
                    activeCompanies: companies.size,
                    loading: false
                });
            })
            .catch(err => {
                console.error("Failed to fetch stats", err);
                setStats(s => ({ ...s, loading: false }));
            });
    }, []);

    if (stats.loading) return <div className="text-secondary">Loading dashboard...</div>;

    return (
        <div>
            <h1 className="page-title">Dashboard Overview</h1>
            <p className="page-subtitle">Welcome to your control center</p>

            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginTop: '32px' }}>
                <div className="card-ui">
                    <h3 className="text-secondary" style={{ fontSize: '14px', marginBottom: '8px' }}>Total Users</h3>
                    <div style={{ fontSize: '36px', fontWeight: '700', color: 'white' }}>{stats.totalUsers}</div>
                    <div style={{ color: '#4caf50', fontSize: '12px', marginTop: '4px' }}>+12% from last month</div>
                </div>

                <div className="card-ui">
                    <h3 className="text-secondary" style={{ fontSize: '14px', marginBottom: '8px' }}>Active Companies</h3>
                    <div style={{ fontSize: '36px', fontWeight: '700', color: 'white' }}>{stats.activeCompanies}</div>
                    <div style={{ color: '#ff9800', fontSize: '12px', marginTop: '4px' }}>Global reach</div>
                </div>

                <div className="card-ui">
                    <h3 className="text-secondary" style={{ fontSize: '14px', marginBottom: '8px' }}>System Status</h3>
                    <div style={{ fontSize: '24px', fontWeight: '600', color: '#4caf50' }}>Operational</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '4px' }}>Last check: 2 min ago</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSummary;
