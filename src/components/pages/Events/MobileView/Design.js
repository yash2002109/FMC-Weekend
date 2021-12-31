import * as React from 'react';
import EventCard from '../EventCard';
// import SideBar2 from '../../../SideBar2';
function Design() {

  return (
    <section className="section">
      <a href="/events" className="back-btn">Back</a>
      <div className="card-container">
        <div className="event-cards">
          {Array(3).fill(
            <EventCard />
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

export default Design;
