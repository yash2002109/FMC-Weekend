/* eslint-disable react/prop-types */
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
// import addToCart from './CartModal';

import { useCart } from 'react-use-cart';

const CardTitle = styled.h3`
  transform: translateZ(55px);
`;

function EventCard(props) {
  const { addItem } = useCart();
  const options = {
    reverse: true,
    max: 15,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    perspective: 1000,
    scale: 1.06
  };

  return (
    <Tilt className="event-card" options={options}>
      <div>
        <img src="/EVENTSS.png" alt="unicorn" className="card-img" />
        <div className="separator">
          <div className="line" />
          <h2>{props.type}</h2>
          <div className="line" />
        </div>
        <CardTitle className="card-title">{props.title}</CardTitle>
        <a href={props.link} target="_blank" className="btn1" rel="noreferrer">
          {props.ps}
        </a>
      </div>
      <button className="cart-btn" onClick={() => addItem(props.item)}>
        Add to Cart
        <i className="fas fa-arrow-right" />
      </button>
    </Tilt>
  );
}
EventCard.defaultProps = {
  type: 'Contest',
  title: 'That’s How B’roll',
  ps: 'Problem Statement',
  price: 150
};
export default EventCard;
