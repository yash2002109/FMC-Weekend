import React from 'react';
import MobileLayout from './MobileLayout';
import SideBar from '../../Sidebar';
import './events.css';
import Footer from '../../Footer';
function Events() {
  return (
    <div className="event_page">
      <div className="sidebar">
        <SideBar />
        <Footer />
      </div>
      <div className="showOnMobile">
        <MobileLayout />
        <Footer />
      </div>
    </div>
  );
}

export default Events;
