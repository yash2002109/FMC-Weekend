import React from 'react';
import MobileLayout from './MobileLayout';
import SideBar from '../../Sidebar';
import './events.css';
import Footer from '../../Footer';
import CartModal from './CartModal';
import { CartProvider } from 'react-use-cart';
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
      </div>
    </div>
  );
}

export default Events;
