import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
const PUBLISHABLE_KEY = 'pk_test_vdWgSye63TfSHEhkyzYU3Art';

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post('/api/items',
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={"name test"}
    description={'description test'}
    amount={fromEuroToCent(1000)}
    token={onToken(1000, 'description test')}
    currency={CURRENCY}
    stripeKey={PUBLISHABLE_KEY}
  />

export default Checkout;