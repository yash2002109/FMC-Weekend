/* eslint-disable no-unused-vars */

import classes from "./Card.module.css";
import image_2 from "./logo.jpg";

function Card() {
  return (
    <div className={classes.parent_wrapper}>
        <div className={classes.card}>
          <img src={image_2} alt="Avatar" style={{ width: '100%' }} />
          <div className={classes.container}>
            {/* <h4><b>John Doe</b></h4> */}
            {/* <p>Architect  Engineer</p> */}
            <h1>Media Sponsor</h1>
          </div>
        </div>
    </div>
  );
}

export default Card;
