import * as React from 'react';
import EventCard from '../EventCard';
import data from '../Data/data';
function Cinematography() {

  return (
    <section className="section">
      <a href="/events" className="back-btn">Back</a>
      <div className="card-container">
        <div className="event-cards">
        {data.cineData.map((item, index) => {
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

export default Cinematography;
