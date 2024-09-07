// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer>
                       {/* Instagramアイコン */}
                       <a href="https://www.instagram.com/nambipigpig/" target="_blank" rel="noopener noreferrer" className="instagram-link">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <span className="instagram-name">@nambipigpig</span> {/* ユーザー名を追加 */}
        </a>
      <p><Link to="/access" className="link">Access</Link></p>
      <p><Link to="/menu" className="link">Menu</Link></p>
      <p>&copy; 2024 Nambpig</p>
    </footer>
  );
};

export default Footer;
