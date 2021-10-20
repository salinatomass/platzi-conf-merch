import React from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { useAppContext } from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const { cart, buyer, addNewOrder } = useAppContext();
  const history = useHistory();

  const paypalOptions = {
    clientId:
      'AUKtf8JEDBxRHqqdsxCOf4og4teJereh8XkHW8I-as7nEw6BRn9Ma29mr4eiGyAY4a9XRMP_mEvnKJET',
    currency: 'USD',
    intent: 'capture',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);

      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onCancel={(data) => console.log(data)}
            onError={(err) => console.log(err)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
