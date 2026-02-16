import React from 'react';
import './Shared.css';

const Button = ({ children, variant = "primary", className = "", ...props }) => {
    // Variants: primary, outline
    const variantClass = variant === "primary" ? "btn-primary-ui" : "btn-outline-ui";

    return (
        <button className={`btn-ui ${variantClass} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
