import React from 'react';
import './Header.css';
const Header = ({ darkMode, toggleDarkMode, fontSize, changeFontSize }) => {
  return (
    <header className="header">
      <div className="logo">ChatterBee</div>
      <div className="header-controls">
        <div className="font-controls">
          <select
            value={fontSize}
            onChange={(e) => changeFontSize(e.target.value)}
            aria-label="Font size"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">Extra Large</option>
          </select>
        </div>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="mode-toggle"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="user-profile">
          <div className="user-avatar">
            <img src="image.png" alt="" />
          </div>
          <span>Vidharshana</span>
        </div>
      </div>
    </header>
  );
};

export default Header;