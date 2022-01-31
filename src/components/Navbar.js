import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import logo from './navlogo.png';
import AuthContext from '../store/auth-context';
import { useCart } from 'react-use-cart';
import GoogleLogin from 'react-google-login';

function Navbar() {
  const authCtx = useContext(AuthContext);

  const { totalItems } = useCart();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [IsnewUser, setIsNewUser] = useState(true);

  const handleFailure = (result) => {
    // alert('Unable to login using Google, Try again later!');
    console.log(result);
  };
  const handleLogin = async (googleData) => {
    console.log(googleData);
    const profile = googleData.profileObj;
    const email = googleData.profileObj.email;
    const name = googleData.profileObj.name;
    // authCtx.updateName(name);
    // authCtx.updateEmail(email);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);

    // send request to backend api and check if the user already exists or is a new one
    try {
      const res = await fetch('/api/google-login', {
        method: 'POST',
        body: JSON.stringify({
          token: googleData.tokenId
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('tokenID', googleData.tokenId);
      // authCtx.updateToken(googleData.tokenId)
      // Update context with value of token

      const isNewUser = data.user.newUser;
      // const isNewUser = true; // for trial purpose only // COMMENT THIS LINE

      sessionStorage.setItem('isNewUser', isNewUser);

      if (isNewUser) {
        window.location.href = '/register';
      } else {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      alert('Unable to login using Google, Try again later!');
    }
  };

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
          <img src="/FMC_GOLDEN_NAV.svg" className="img" alt="FMC" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <div className="navbar_cart">
          <NavLink to="/cart">
            {button && sessionStorage.getItem('isLoggedIn') == 'true' && (
              <button
                toLink="/cart"
                className={totalItems ? 'cartBtn' : 'cartBtn empty_cart'}
                onClick={closeMobileMenu}>
                <span id="quantity">{totalItems} </span>
                <i className="fas fa-shopping-cart"></i>
              </button>
            )}
          </NavLink>
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

          {/* <li className="nav-item">
            {button && sessionStorage.getItem('tokenID') && (
              <Button
                isInternalLink
                toLink="/"
                buttonStyle="btn--primary"
                className="nav-links sign"
                onClick={logoutHandler}>
                DASHBOARD
              </Button>
            )}
          </li> */}

          <li className="nav-item">
            {button && sessionStorage.getItem('isLoggedIn') == 'true' ? (
              <Button
                isInternalLink
                toLink="/dashboard"
                buttonStyle="btn--primary"
                className="nav-links sign">
                DASHBOARD
              </Button>
            ) : (
              <Button
                isInternalLink
                toLink="/authentication"
                buttonStyle="btn--primary"
                className="sign"
                onClick={closeMobileMenu}>
                SIGN IN
              </Button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
