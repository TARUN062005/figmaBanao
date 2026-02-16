import React from 'react';
import './Shared.css';

const Input = ({ label, type = "text", placeholder, className = "", ...props }) => {
    return (
        <div className={`input-ui-wrapper ${className}`}>
            {label && <label className="input-label">{label}</label>}
            <input
                type={type}
                className="input-field"
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;
