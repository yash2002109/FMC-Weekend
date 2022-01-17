import React from "react";
import Card from "./Card";
import classes from "./Cards.module.css";

function Cards() {
  return (
    <div className={classes.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
