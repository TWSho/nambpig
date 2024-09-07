// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';


const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <img src={icon} alt="Nambpig Icon" className="header-icon" />
        <Link to="/" className="home-link">嫩比金豬</Link>
      </nav>
    </header>
  );
};

export default Header;
