import React from 'react';
import MobileLayout from './MobileLayout';
import SideBar from '../../Sidebar';
import './events.css';
import Footer from '../../Footer';
import CartModal from './CartModal';
function Events() {
  return (
    <div>
      <CartModal />
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
