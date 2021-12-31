import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          FMC Weekend Annual Digital Art Fest of IIT BHU
        </p>
        <p className='footer-subscription-text'>
          Come and be a part of it
        </p>
      </section>
      
          
          
      <section class='social-media'>

          <div class='social-icons'>
            <a 
              class='social-icon-link facebook'
              href = "https://www.facebook.com/fmcweekendiitbhu"
              target='_blank'
              aria-label='Facebook' rel="noreferrer"
            >
              <i class='fab fa-facebook' />
            </a>
            <a
              class='social-icon-link instagram'
              href = "https://www.instagram.com/fmc_weekend/"
              target='_blank'
              aria-label='Instagram' rel="noreferrer"
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href = "https://www.youtube.com/channel/UCt4-7kmQaPEZzPLil4RNRCw"
              target='_blank'
              aria-label='Youtube' rel="noreferrer"
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link linkedin'
              href = "https://www.youtube.com/channel/UCt4-7kmQaPEZzPLil4RNRCw"
              target='_blank'
              aria-label='LinkedIn' rel="noreferrer"
            >
              <i class='fab fa-linkedin' />
            </a>
            
            
          </div>
        
      </section>
    </div>
  );
}

export default Footer;