import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import logo from './navlogo.png';
import AuthContext from '../store/auth-context';

function Navbar() {
  const authCtx = useContext(AuthContext);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/';
    closeMobileMenu();
  };
  window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      nav.classList.add('add-shadow');
    } else {
      nav.classList.remove('add-shadow');
    }
  });
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} className="img" alt="FMC" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item first_item">
            <Link to="/events" className="nav-links active" onClick={closeMobileMenu}>
              EVENTS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/merchandise" className="nav-links active" onClick={closeMobileMenu}>
              MERCHANDISE
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-links active" onClick={closeMobileMenu}>
              TEAM
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sponsors" className="nav-links active" onClick={closeMobileMenu}>
              SPONSORS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/FAQ" className="nav-links active" onClick={closeMobileMenu}>
              FAQ
            </Link>
          </li>
        </ul>
        {button && !sessionStorage.getItem('tokenID') && (
          <Button
            isInternalLink
            toLink="/authentication"
            buttonStyle="btn--primary"
            className="nav-links sign"
            onClick={closeMobileMenu}>
            SIGN IN
          </Button>
        )}
        {button && sessionStorage.getItem('tokenID') && (
          <Button
            isInternalLink
            toLink="/"
            buttonStyle="btn--primary"
            className="nav-links sign"
            onClick={logoutHandler}>
            SIGN OUT
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
