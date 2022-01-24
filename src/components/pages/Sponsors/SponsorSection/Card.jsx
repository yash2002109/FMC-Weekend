/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import './Card.css';

const CardTitle = styled.h3`
  transform: translateZ(55px);
`;

function SponsorCard(props) {
  return (
    <div className="sponsor-card">
      <div>
        <div className="cardImg">
          <a href="#">
            <img src={props.img} alt="unicorn" className="cardImg" />
          </a>
        </div>
        <h2>{props.name}</h2>
        <h6>{props.sponsor}</h6>
      </div>
    </div>
  );
}
SponsorCard.defaultProps = {
  img: 'https://wallpapercave.com/wp/wp2831956.png'
};
export default SponsorCard;
