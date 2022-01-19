/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Banner from './Banner/Banner';
import Image from './merchandise.png';
import sectionImage from '../../bg.png';
import Section from './Section/Section';
import Classes from './LandingPage.module.css';
import Footer from '../../Footer';
import { Button } from '../../Button';
import closeMobileMenu from '../../../components/Navbar';
function landingPage() {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth > 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  
  const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href ="/";
    closeMobileMenu();
  }

  return (
    <div className={Classes.landing_page}>
      {/* <h1> Landing Page</h1> */}
      <div className={Classes.login_button}>
        {/* <Button /> */}
        {button && !sessionStorage.getItem('tokenID') && (
          <Button
            isInternalLink={true}
            toLink="/authentication"
            buttonStyle="btn--primary"
            className="nav-links sign"
          >
            SIGN IN
          </Button>
        )}        
        {button && sessionStorage.getItem('tokenID') && (
          <Button
            isInternalLink={true}
            toLink="/"
            buttonStyle="btn--primary"
            className="nav-links sign"
            onClick={logoutHandler}>
            SIGN OUT
          </Button>
        )}
      </div>
      
      <Banner imagePath={Image} />
      <Section title="ABOUT US" imagePath={sectionImage} buttonText="KNOW MORE">
        After weeks of speculation, uncertainty and postponement, the FMC Weekend is back with a
        bang. After 6 hugely successful editions, this year's edition is going to be just as
        majestic as ever. What's even better this time around is the fact that you can have the same
        surreal experience in its entirety from the comfort of your own homes. Participate in
        various events to put your mettle to test, attend various workshops conducted by masters of
        their respective craft to refine your skills, all without getting out of your PJs.
      </Section>

      <Section title="EVENTS" imagePath={sectionImage} buttonText="KNOW MORE">
        After weeks of speculation, uncertainty and postponement, the FMC Weekend is back with a
        bang. After 6 hugely successful editions, this year's edition is going to be just as
        majestic as ever. What's even better this time around is the fact that you can have the same
        surreal experience in its entirety from the comfort of your own homes. Participate in
        various events to put your mettle to test, attend various workshops conducted by masters of
        their respective craft to refine your skills, all without getting out of your PJs.
      </Section>

      <Banner imagePath={Image} />
      <Footer />
    </div>
  );
}

export default landingPage;