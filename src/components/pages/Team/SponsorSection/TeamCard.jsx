import React from 'react';
import styled from 'styled-components';
import "../SponsorSection/Card.css";

const CardTitle = styled.h3`
  transform: translateZ(55px);
`;


const TeamCard = (props) => {
  const options = {
    reverse: true,
    max: 15,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 1000,
    scale: 1.06
  }
  
  return (
    <div className="team-card" options={options}>
      <div>
        <div className="card-img">
        <img src={props.img} alt="unicorn" className="card-img" />
        </div>
        <div className="separator">
          <div className="line"></div>
          <h3 className="position">{props.position}</h3>
          <div className="line"></div>
        </div>
        <CardTitle className="card-title">{props.name}</CardTitle>
      </div>
    </div>
  );
}
TeamCard.defaultProps = {
  img: "https://wallpapercave.com/wp/wp2831956.png"
}
export default TeamCard;