import React, { useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import '../styles/components/Products.css';

import Product from './Product';

const Products = () => {
  const { products, addToCart } = useAppContext();

  const handleAddToCart = useCallback((product) => {
    addToCart(product);
  }, []);

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
