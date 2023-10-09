import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <h2 className="header-title">REACT-GOOGLE-MAP</h2>
      <p className="header-description">
        Google Maps est un service mondial de cartographie en ligne.
        Le service a été créé par Google à la suite du rachat
        en octobre 2004 de la start-up australienne Where 2 Technologies.
      </p>
    </header>
  );
};

export default Header;
