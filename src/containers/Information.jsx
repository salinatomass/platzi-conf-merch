import React from 'react';
import '../styles/components/Information.css';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form>
            <input type="text" name="name" placeholder="Nombre completo" />
            <input type="email" name="email" placeholder="Correo Electrónico" />
            <input type="text" name="address" placeholder="Direccion" />
            <input type="number" name="apto" placeholder="Apto" />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="country" placeholder="País" />
            <input type="text" name="state" placeholder="Estado" />
            <input type="number" name="cp" placeholder="Código Postal" />
            <input type="number" name="phone" placeholder="Teléfono" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">pagar</div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM name</h4>
            <span>10$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
