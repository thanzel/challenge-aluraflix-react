import React from 'react';
import './NotFound.module.css'; 

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-subtitle">Oops! Page not found</p>
      <a href="/" className="not-found-button">Go back to Home</a>
    </div>
  );
}

export default NotFound;
