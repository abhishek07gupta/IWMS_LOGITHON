import React from 'react';
// Assume you create a corresponding CSS file
import '../css/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
    
        <div className='navbar-item'><Link className="nav-link " to = "/Layout">Layout</Link></div>
        <div className='navbar-item'><Link className="nav-link " to = "/Analytics">Analytics</Link></div>
        <div className='navbar-item'><Link className="nav-link " to = "/Data_entry">Data Entry</Link></div>
        <div className='navbar-item'><Link className="nav-link " to = "/Data_exit">Data Exit</Link></div>
        
      </div>
    </nav>
  );
}


export default Navbar;