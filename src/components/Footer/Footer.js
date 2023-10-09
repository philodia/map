import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <p className="Footer-copyright">&copy; {currentYear} Sample Inc.</p>
    </footer>
  );
};

export default Footer;
