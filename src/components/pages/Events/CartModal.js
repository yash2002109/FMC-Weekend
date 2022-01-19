import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '../../Button';
import { useCart } from "react-use-cart";
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
  p: 3,
};
    

export default function Cart(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    removeItem,
    emptyCart,
  } = useCart();
  
  if (isEmpty) return <p>Your cart is empty</p>;  
  return (
    <div>
        <button onClick={handleOpen} className="cart">
              <span id="quantity">{totalItems} </span>
              <i className="fas fa-shopping-cart"></i>
        </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
                                
                              </tr>
                        {items.map((item, index) => {
                            return (
                              
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.type}</td>
                                <td><i class="fas fa-rupee-sign"></i> {item.price}</td>
                                <th className="trash-btn" onClick={() =>removeItem(item.id)}><i class="fas fa-trash"></i></th>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                        <h3>Total Price: {cartTotal}</h3>
                </div>
                <div className="col-auto ms-auto btns">
                      <button
                        className="btn btn-danger"
                        onClick={() =>emptyCart()}
                        >Clear Cart</button>
                      <button className="btn btn-primary">Pay Now</button>
                </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
