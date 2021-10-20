import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Conf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FiShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Header;
