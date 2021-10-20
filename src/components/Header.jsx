import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import { useAppContext } from '../context/AppContext';

import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  const { cart } = useAppContext();
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Conf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FiShoppingCart />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
