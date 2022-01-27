import React from 'react';
import './Cart.css';
import { useCart } from 'react-use-cart';
import EventCard from './pages/Events/EventCard';
import { NavLink } from 'react-router-dom';
function Cart(props) {
  const { isEmpty, items, totalItems, cartTotal, removeItem, emptyCart, updateItemQuantity } =
    useCart();
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
        <h3>Total Price = Rs {cartTotal} </h3>
      </div>
    </section>
  );
}

export default Cart;
