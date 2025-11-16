import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '/testlogo.png';
import NotesButton from './NotesButton.tsx';
import dashboardIcon from '/dashboardicon.svg';
import notesIcon from '/notesshopicon.svg';
import profileIcon from '/profileicon.svg';
import settingsIcon from '/settingsicon.svg';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img 
            src={logo} 
            alt="Flowstate Logo" 
            className="navbar-logo" 
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        <div className="navbar-right">
          <NotesButton count={10} />
          <button className="menu-button" onClick={toggleMenu}>
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
        </div>
        
        <div className="menu-items">
          <button className="menu-item" onClick={() => handleNavigation('/dashboard')}>
                <img src={dashboardIcon} className="menu-icon" alt="Dashboard" />
                <span>Dashboard</span>
            </button>

            <button className="menu-item" onClick={() => handleNavigation('/shop')}>
                <img src={notesIcon} className="menu-icon" alt="Shop" />
                <span>Notes Shop</span>
            </button>

            <button className="menu-item active" onClick={() => handleNavigation('/profile')}>
                <img src={profileIcon} className="menu-icon" alt="Profile" />
                <span>Profile</span>
            </button>

            <button className="menu-item" onClick={() => handleNavigation('/settings')}>
                <img src={settingsIcon} className="menu-icon" alt="Settings" />
                <span>Settings</span>
            </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={toggleMenu}></div>
      )}
    </>
  );
};

export default Navbar;