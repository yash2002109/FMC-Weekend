import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import './events.css';
// import { Button } from '@mui/material';
// import unicorn from "./assets/test.png";
import styled from 'styled-components';
import Tilt from 'react-tilt';

// https://github.com/siddharthkp/react-vanilla-tilt



const CardTitle = styled.h3`
  transform: translateZ(55px);
`;


export default function EventCard(props) {
  const options = {
    reverse: true,
    max: 15,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 1000,
    scale: 1.06
  }

  return (
    <Tilt className="event-card" options={options}>
      <div>
        <img src="https://wallpapercave.com/wp/wp2831956.png" alt="unicorn" className="card-img" />
        <div className="separator">
          <div className="line"></div>
          <h2>{props.type}</h2>
          <div className="line"></div>
        </div>
        <CardTitle className="card-title">{props.title}</CardTitle>
      </div>
      <a href="#" className="btn1">{props.link}</a>
    </Tilt>
  );
}
EventCard.defaultProps = {
  type: 'Contest',
  title: "That’s How B’roll",
  link: "Problem Statement"
};