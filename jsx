import React, { useEffect } from 'react';

const PayPalButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID';
    script.addEventListener('load', () => {
      window.paypal.Buttons().render('#paypal-button-container');
    });
    document.body.appendChild(script);
  }, []);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
