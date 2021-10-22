import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';

import { useAppContext } from '../context/AppContext';

const Information = () => {
  const { cart, addToBuyer } = useAppContext();
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <>
      <Helmet>
        <title>Informacion de contacto - Platzi Conf Merch</title>
      </Helmet>
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Información de contacto:</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" name="name" placeholder="Nombre completo" />
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
              />
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
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>
                pagar
              </button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          {cart.map((item) => (
            <div className="Information-item" key={item.id}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
