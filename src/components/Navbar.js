import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink exact to="/">
          <img src={logo} className="img" alt="FMC" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item first_item">
            <NavLink
              to="/events"
              className="nav-links"
              activeClassName="target"
              onClick={closeMobileMenu}>
              EVENTS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/team"
              className="nav-links"
              activeClassName="target"
              onClick={closeMobileMenu}>
              TEAM
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/sponsors"
              className="nav-links"
              activeClassName="target"
              onClick={closeMobileMenu}>
              SPONSORS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/FAQ"
              className="nav-links"
              activeClassName="target"
              onClick={closeMobileMenu}>
              FAQ
            </NavLink>
          </li>
          <li className="nav-item">
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
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
