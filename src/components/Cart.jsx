// import React from 'react';
import './Cart.css';
import { useCart } from 'react-use-cart';
import EventCard from './pages/Events/EventCard';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Footer from './Footer';
import CheckoutButton from './CheckoutButton/CheckoutButton';
import CartCard_2 from './CartCard_2';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};
function Cart(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (sessionStorage.getItem('isLoggedIn') == 'true') {
      setOpen(true);
    } else {
      alert('Please Sign in first');
    }
  };
  const handleClose = () => setOpen(false);
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  return (
    <section className="cart-page">
      <h1>Cart</h1>
      <div className="purchase_details">
        <h3>Total Items: ({totalItems})</h3>
        <h3>Total Price = ₹ {cartTotal} </h3>

        <div className="checkout_button">
          <CheckoutButton onClick={handleOpen}>CHECKOUT</CheckoutButton>
        </div>

        {/* <a href="/events">
          <div className="add-more-cards">
            <span>+</span>
            <h3>Purchase More Cards</h3>
          </div>
        </a> */}
        <div className="cart_cards">
          {items.map((item, index) => {
            return (
              <div key={index} className="cart-container">
                <CartCard_2
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
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="payment-modal">
        <Box class={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1>Payment Details</h1>
          </Typography>
          <hr />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>The bank details are as follows:</h3>
            <ul>
              <li>
                <span>Account Name: </span>
                <h3>FMC Weekend IIT(BHU), Varanasi</h3>
              </li>
              <li>
                <span>Account Number: </span>
                <h3>33223440456</h3>
              </li>
              <li>
                <span>IFSC: </span>
                <h3>SBIN0011445</h3>
              </li>
              <li>
                <span>Current Bank: </span>
                <h3>State Bank of India</h3>
              </li>
              <li>
                <span>Branch: </span>
                <h3>IIT(BHU), Varanasi</h3>
              </li>
            </ul>
            <p className="form-para">
              {' '}
              We hereby request you to fill out this google form as soon as you complete the payment
              successfully and attach the screenshot of the payment with it. Do send the screenshot
              to your person of contact and feel free to enquire about the passes to them.<br></br>
              See you in large numbers at the fest!✨
            </p>
            <a href="https://forms.gle/Su8HRznfUAhfzjPcA" target="_blank" rel="noreferrer">
              Google Form
            </a>
          </Typography>
        </Box>
      </Modal>
      <Footer />
    </section>
  );
}

export default Cart;
