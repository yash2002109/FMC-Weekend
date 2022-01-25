import * as React from 'react';
import EventCard from '../EventCard';
import data from '../Data/data';
import { Link } from 'react-router-dom';
import CartModal from '../CartModal';

function Outreach() {
  return (
    <div>
      <CartModal />
      <section className="section">
        <Link to="/events" className="back-btn">
          Back
        </Link>
        <div className="card-container">
          <div className="event-cards">
            {data.outreachData.map((item, index) => {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Outreach;
