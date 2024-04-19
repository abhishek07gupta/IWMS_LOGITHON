import React from 'react';
// Assume you create a corresponding CSS file
import '../css/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-item">Layout</div>
        <div className="navbar-item">Data Entry</div>
        <div className="navbar-item">Analytics</div>
        <div className="navbar-item">Data Exit</div>
      </div>
    </nav>
  );
}


export default Navbar;