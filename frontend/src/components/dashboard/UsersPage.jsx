import React, { useState, useEffect } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import './Users.css';

const UserModal = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div>
                        <h2 className="modal-title" style={{ fontSize: '24px', fontWeight: '600' }}>{user.name}</h2>
                        <p className="text-secondary">@{user.username}</p>
                    </div>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="info-group">
                    <div className="info-label">Contact</div>
                    <div className="info-value">{user.email}</div>
                    <div className="info-value">{user.phone}</div>
                </div>

                <div className="info-group">
                    <div className="info-label">Company</div>
                    <div className="info-value">{user.company.name}</div>
                    <div className="text-secondary" style={{ fontSize: '14px' }}>"{user.company.catchPhrase}"</div>
                </div>

                <div className="info-group">
                    <div className="info-label">Address</div>
                    <div className="info-value">
                        {user.address.street}, {user.address.suite}<br />
                        {user.address.city}, {user.address.zipcode}
                    </div>
                </div>

                <div className="info-group">
                    <div className="info-label">Website</div>
                    <a href={`http://${user.website}`} target="_blank" rel="noreferrer" style={{ color: '#8054ff' }}>
                        {user.website}
                    </a>
                </div>
            </div>
        </div>
    );
};

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' | 'desc'
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const USERS_PER_PAGE = 5;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setFilteredUsers(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch users", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let result = [...users];

        // Search
        if (searchTerm) {
            const lowerSearch = searchTerm.toLowerCase();
            result = result.filter(user =>
                user.name.toLowerCase().includes(lowerSearch) ||
                user.email.toLowerCase().includes(lowerSearch)
            );
        }

        // Sort
        result.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (sortOrder === 'asc') return nameA.localeCompare(nameB);
            return nameB.localeCompare(nameA);
        });

        setFilteredUsers(result);
        setCurrentPage(1); // Reset to page 1 on search/sort
    }, [searchTerm, sortOrder, users]);

    // Pagination
    const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * USERS_PER_PAGE,
        currentPage * USERS_PER_PAGE
    );

    const handleSortToggle = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    };

    if (loading) return <div>Loading users...</div>;

    return (
        <div>
            <h1 className="page-title">Users Management</h1>
            <p className="page-subtitle">View and manage your user base</p>

            <div className="users-controls" style={{ marginTop: '32px' }}>
                <div className="search-field">
                    <Input
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-0" // override shared margin
                    />
                </div>
                <Button variant="outline" onClick={handleSortToggle}>
                    Sort: {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
                </Button>
            </div>

            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.length > 0 ? paginatedUsers.map(user => (
                            <tr key={user.id} onClick={() => setSelectedUser(user)}>
                                <td>
                                    <div className="user-cell-flex">
                                        <div className="avatar-placeholder">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="user-row-name">{user.name}</div>
                                            <div className="text-secondary" style={{ fontSize: '12px' }}>@{user.username}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="user-row-email">{user.email}</td>
                                <td>{user.company.name}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}>
                                    No users found matching "{searchTerm}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        className="page-btn"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                    >
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            className={`page-btn ${currentPage === page ? 'active' : ''}`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="page-btn"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                    >
                        &gt;
                    </button>
                </div>
            )}

            {/* User Detail Modal */}
            {selectedUser && (
                <UserModal
                    user={selectedUser}
                    onClose={() => setSelectedUser(null)}
                />
            )}
        </div>
    );
};

export default UsersPage;
