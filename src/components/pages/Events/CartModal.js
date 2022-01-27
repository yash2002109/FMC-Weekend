import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '../../Button';
import { useCart } from 'react-use-cart';
import Events from './events';
import './events.css';

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
export default function Cart(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
  const handlePayment = () => {
    document.querySelector('.payment-modal').style.display = 'block';
    document.querySelector('.cart-modal').style.display = 'none';
  };
  if (cartTotal > 699) {
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="cart-modal">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1>My Cart</h1>
          </Typography>
          <hr />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="col-12">
              <h5>Total Items: ({totalItems})</h5>
              <table className="table m-0">
                <tbody>
                  <tr>
                    <th>Event Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.type}</td>
                        <td>
                          <i className="fas fa-rupee-sign"></i> {item.price}
                        </td>
                        <td className="trash-btn" onClick={() => removeItem(item.id)}>
                          <i className="fas fa-trash"></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-auto ms-auto">
              <h3>
                Total Price: <span className="iconify" data-icon="ph:currency-inr"></span>{' '}
                {cartTotal}
              </h3>
            </div>
            <div className="col-auto ms-auto btns">
              <span>
                <h3 style={{ color: 'white' }}>Cart Cutoff Price:</h3>
                <p>
                  10% off on total bill in excess of{' '}
                  <span className="iconify" data-icon="ph:currency-inr"></span> 699 and access to
                  all Events+Workshops (Pre-weekend+Post-weekend included)+Pronites
                </p>
              </span>
              <button className="btn btn-danger" onClick={() => emptyCart()}>
                Clear Cart
              </button>
              <button onClick={() => handlePayment()} className="btn btn-primary">
                Pay Now
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="payment-modal">
        <Box sx={style}>
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
    </div>
  );
}
