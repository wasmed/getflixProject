import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function SubscriptionPage() {
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubscription = async () => {
    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setCardError(error.message);
      setIsProcessing(false);
    } else {
      // Send payment method ID to server to create subscription
      console.log(paymentMethod.id);
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h2>Subscribe to our service:</h2>
      <div>
        <label htmlFor="card-element">Enter your card details:</label>
        <CardElement
          id="card-element"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {cardError && <div>{cardError}</div>}
      </div>
      <button onClick={handleSubscription} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Subscribe'}
      </button>
    </div>
  );
}

export default SubscriptionPage;




