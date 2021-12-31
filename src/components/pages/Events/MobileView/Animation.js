import * as React from 'react';
import EventCard from '../EventCard';
function Animation() {

  return (
    <section className="section">
      <a href="/events" className="back-btn">Back</a>
      <div className="card-container">
        <div className="event-cards">
          {Array(3).fill(
            <EventCard
              title="Infocus"
              content="Uphold the saying “A picture is worth a thousand words” by clicking captivating and surreal theme-based images. Of the themes provided, choose one or more themes and click a photograph best representing them."
              img="https://fmcweekend-angrycder.vercel.app/assets/events/photog1.jpg"
              className="event"
            />
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

export default Animation;
