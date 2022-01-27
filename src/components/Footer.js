import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import logo from './fmcfooter1.png';
import temp from './logo.png';

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="sub-footer">
          <p>
            <h6>Luv Bansal: </h6>
            <span className="phone1">9024552872</span>
            <h5>Manhar Joshi: </h5>
            <span className="phone2">7015461454</span>
          </p>
        </div>
        <div className="footer">
          <section1 />
          <section5>
            <h3>PRESENTS</h3>
          </section5>
          <section>
            <img src="/fmc_logo.png" className="image" alt="FMC" />
          </section>
          <section2>
            <div className="powered-by">
              <h2>POWERED BY</h2>
              <img src="/LAPCARE_LOGO.png" alt="POWERED BY" />
            </div>
            <br />
            <br />
            <br />
            <h3>CO-POWERED BY</h3>
          </section2>
        </div>
      </footer>

      <section className="social-media">
        <div className="social-icons">
          <a
            className="social-icon-link facebook"
            href="https://www.facebook.com/fmcweekendiitbhu"
            target="_blank"
            aria-label="Facebook"
            rel="noreferrer">
            <i className="fab fa-facebook" />
          </a>
          <a
            className="social-icon-link instagram"
            href="https://www.instagram.com/fmc_weekend/"
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a
            className="social-icon-link youtube"
            href="https://www.youtube.com/channel/UCt4-7kmQaPEZzPLil4RNRCw"
            target="_blank"
            aria-label="Youtube"
            rel="noreferrer">
            <i className="fab fa-youtube" />
          </a>
          <a
            className="social-icon-link linkedin"
            href="https://in.linkedin.com/company/fmc-weekend-creative"
            target="_blank"
            aria-label="LinkedIn"
            rel="noreferrer">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
