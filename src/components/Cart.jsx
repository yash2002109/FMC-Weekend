import React from 'react';
import './Cart.css';
import { useCart } from 'react-use-cart';
import EventCard from './pages/Events/EventCard';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  bgcolor: '#1D033E',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3
};
function Cart(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const handlePayment = () => {
    document.querySelector('.payment-modal').style.display = 'block';
  };
  return (
    <section className="cart-page">
      <h1>Cart</h1>
      <div className="col-12">
        <h3>Total Items: ({totalItems})</h3>

        <a href="/events">
          <div className="add-more-cards">
            <span>+</span>
            <h3>Purchase More Cards</h3>
          </div>
        </a>
        {items.map((item, index) => {
          return (
            <div key={index} className="cart-container">
              <EventCard
                className="cart-card"
                img={item.img}
                title={item.title}
                type={item.type}
                link={item.link}
                price={item.price}
                prize={item.prize}
                item={item}
                key={index}
              />
            </div>
          );
        })}
      </div>
      <div className="price-data">
        <h3>Total Price = ₹ {cartTotal} </h3>
      </div>
      <Button onClick={() => handlePayment()} buttonStyle="btn--primary" className="">
        CHECKOUT
      </Button>
    </section>
  );
}

export default Cart;
