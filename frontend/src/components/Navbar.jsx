import React from 'react';
import { Link } from 'react-router-dom';
import './cssComponents/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <Link to="/" className="logo">Your Logo</Link>
        <ul>
          <li><Link to="/users/new">Create User</Link></li>
          <li><Link to="/houses/new">Create House</Link></li>
          <li><Link to="/users/:id">User profile</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
