import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import '../styles/components/Checkout.css';

import { useAppContext } from '../context/AppContext';

const Checkout = () => {
  const { cart, removeFromCart } = useAppContext();
  const cartHasItems = cart.length > 0;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cartHasItems ? 'Lista de pedidos:' : 'Sin pedidos'}</h3>
        {cart.map((item) => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(item)}>
              <AiOutlineDelete />
            </button>
          </div>
        ))}
      </div>
      {cartHasItems && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
