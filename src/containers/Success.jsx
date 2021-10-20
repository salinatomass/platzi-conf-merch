import React from 'react';
import { useAppContext } from '../context/AppContext';
import '../styles/components/Success.css';

import Map from '../components/Map';

const Success = () => {
  const { buyer } = useAppContext();

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 dias a tu dirección</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;
