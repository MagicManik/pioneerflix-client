import React from 'react';
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LXnkjI9VBJQHJJfhxESo52ItqIP3SXDLzDJKrzCyPJHe233oJNKFxWpjTO02WWRYbpv2w3qTu9HYwGgRnIRevds00glfIq8S7');

const PaymentPage = () => {
    const [user] = useAuthState(auth);
    const url = `https://pioneerflix-server.onrender.com/userBooking/?email=${user?.email}`;
    const { data, isLoading, refetch } = useQuery(['userBooking'], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    )
    const userBookingData = data;

    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(userBookingData);

    return (
        <div className="bg-black lg:pt-16 pt-3">
            <div className='bg-primary'>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[60%] mx-auto lg:min-h-screen min-h-0 lg:gap-0 gap-4">
                    <div className={`bg-[#333] rounded-2xl mx-2 shadow-lg my-auto`}>
                        {
                            userBookingData?.map(booking =>
                                <div key={booking?._id} className="card-body">
                                    <p className="text-2xl text-green-500 font-bold">Hello, {booking?.userName}</p>

                                    <h2 className="card-title text-white">
                                        Your package
                                        <span className='text-orange-500'>{booking?.month}</span>
                                    </h2>

                                    <p className='text-white'>Please pay $ <span className='text-orange-500'>{booking?.taka}</span></p>
                                    <p className="text-white">Date: <span className='text-orange-500'>{booking?.bookingTime}</span></p>
                                    <p className='flex'><FaCcMastercard className='text-4xl text-white' /> <FaCcPaypal className='mx-3 text-4xl text-white' /> <FaCcVisa className='text-4xl text-white' /></p>
                                </div>
                            )
                        }
                    </div>
                    <div className={`bg-[#333] py-2 rounded-2xl mx-2 shadow-lg my-auto`}>
                        <div className="card-body lg:py-1 py-0 lg:px-3 px-2">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm userBookingData={userBookingData} refetch={refetch} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;