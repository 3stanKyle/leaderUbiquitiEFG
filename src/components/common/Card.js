// components/common/Card.js
import React from 'react';
import './Card.css';

// Changed to named exports
export const Card = ({ children, className = '' }) => (
  <div className={`card ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="card-title">{children}</h2>
);

export const CardTitleWithIcon = ({ children, iconUrl }) => (
  <h2 className="card-title">
    <img 
      src={iconUrl} 
      alt="" 
      className="card-icon"
      style={{ 
        filter: 'brightness(0) invert(1)',
        width: '32px',
        height: '32px',
        marginRight: '12px'
      }} 
    />
    {children}
  </h2>
);

export const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);