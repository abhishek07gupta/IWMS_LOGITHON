import React from 'react';
// Assume you create a corresponding CSS file
import '../css/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex">
        <Link className="w-100 p-5 text-white hover:bg-white hover:text-black grow text-center" to = "/Layout">Layout</Link>
        <Link className="w-100 p-5 text-white hover:bg-white hover:text-black grow text-center" to = "/">Analytics</Link>
        <Link className="w-100 p-5 text-white hover:bg-white hover:text-black grow text-center" to = "/Data_entry">Data Entry</Link>
        <Link className="w-100 p-5 text-white hover:bg-white hover:text-black grow text-center" to = "/Data_exit">Data Exit</Link>
      </div>
    </nav>
  );
}


export default Navbar;