import './Cart.css';
import { useCart } from 'react-use-cart';
import EventCard from './pages/Events/EventCard';
import { NavLink } from 'react-router-dom';
// import { Button } from '../components/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Footer from './Footer';
import CheckoutButton from './CheckoutButton/CheckoutButton';
import CartCard_2 from './CartCard_2';
import { useState, useEffect } from 'react';
// import Button from './pages/LandingPage/Section/Button/Button';
import Button from './Button_2';

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
  const [cartItems, setCartItems] = useState([]);

  const handleClose = () => setOpen(false);
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  useEffect(() => {
    const getCartItems = async () => {
      // setIsLoading(true);
      const token = sessionStorage.getItem('tokenID');
      try {
        const res = await fetch('/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        });
        const data = await res.json();
        // console.log(data);

        if (data.message === 'success') {
          console.log(data);
          // console.log(data.user.userID.userCart.cartItems);
          if (data.user.userID) {
            setCartItems(data.user.userID.userCart.cartItems);
          } else {
            setCartItems(data.user.userCart.cartItems);
          }
        }
      } catch (e) {
        console.log(e);
        alert('Error with authentication, login again');
      }
    };
    getCartItems();
    // console.log(isTokenValid());
  }, []);

  async function checkoutHandler(e) {
    let paymentAmount = 0;
    for (const item of cartItems) {
      if (item.verifyStatus == false) {
        paymentAmount += item.price;
      }
    }
    console.log(paymentAmount);

    e.preventDefault();
    const obj = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      amount: paymentAmount,
      redirect_url: window.location.origin + '/dashboard'
    };
    // console.log(obj);

    const res = await fetch('api/pay', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log({ obj });
    const data = await res.json();
    console.log(data);
  }

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
          {cartItems.map((item, index) => {
            return (
              <div key={index} className="cart-container">
                <CartCard_2
                  className="cart-card"
                  img={item.img}
                  title={item.title}
                  type={item.Type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                  verified={item.verifyStatus}
                  mongooseId={item._id}
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
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="back"></div>

            <div className="register-form">
              <h1 className="reg-text">register</h1>
              <form className="reg-form" action="https://www.instagram.com/simeonleni" onSubmit={checkoutHandler}>
                <div className="text">
                  <input type="text" placeholder="Enter your name" required/>
                  <hr />
                  <input type="email" placeholder="Enter your email" required/>
                  <hr />
                  <input type="phone" placeholder="Enter your Phone No" required/>
                  <br></br>
                  <label htmlFor="cart-amount">
                    <h3>Total Price = ₹ {cartTotal} </h3>
                  </label>
                </div>
                <Button type="submit" name="registor-button">
                  Pay Now
                </Button>
              </form>
            </div>            
          </Typography> */}
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
              <Button>Registeration Form</Button>
            </a>
          </Typography>
        </Box>
      </Modal>
      <Footer />
    </section>
  );
}

export default Cart;
