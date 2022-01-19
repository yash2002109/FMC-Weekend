import * as React from 'react';
import EventCard from '../EventCard';
import data from '../Data/data';
import CartModal from '../CartModal';
function Photography() {

  return (
    <section className="section">
      <a href="/events" className="back-btn">Back</a>
      <div className="card-container">
        <div className="event-cards">
        {data.photographyData.map((item, index) => {
            return (
              <EventCard img={item.img} title={item.title} type={item.type} link={item.link} price={item.price} item={item} key={index} />
            )
          })}
        </div>

        <div className="workshop-cards">
          {Array(3).fill(
            <EventCard type="Workshop" title="The Art of Cinematography" link="By John Watts" />
          )}
        </div>
      </div>
    </section>
  );
}

export default Photography;
