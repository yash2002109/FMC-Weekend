import * as React from 'react';
import EventCard from '../EventCard';

function Photography() {

  return (
    <section className="section">
      <a href="/events" className="back-btn">Back</a>
      <div className="card-container">
        <div className="event-cards">
          {Array(3).fill(
            <EventCard className="event" />
          )}
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
