import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutForm = ({ userBookingData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const price = userBookingData[0]?.taka;
    const userEmail = userBookingData[0]?.userEmail;
    const userName = userBookingData[0]?.userName;
    const id = userBookingData[0]?._id;
    // console.log(id);

    useEffect(() => {
        fetch('https://pioneerflix-server-new.onrender.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false);
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent?.id)
            setSuccess('Congrats! Your payment is complemented.')

            // store payment on database
            const payment = {
                id: id,
                transactionId: paymentIntent?.id
            }
            const url = `https://pioneerflix-server-new.onrender.com/booking/${id}`;
            // console.log(url);
            // console.log(payment);
            fetch(url, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);

                })
        }
        event.target.reset();
        navigate(from, { replace: true });
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ padding: "13px", backgroundColor: "black", borderRadius: "10px" }}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                backgroundColor: "black",

                                color: '#FFFFFF',
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

            </form>

            <button className='text-white btn btn-success px-10 btn-xs mt-6' type="submit" disabled={!stripe || !clientSecret || success}>
                Pay
            </button>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;