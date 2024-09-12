import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;