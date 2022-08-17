import React from 'react';
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';

const PaymentPage = () => {
    return (
        <div className="bg-black pt-16">
            <div className='bg-primary'>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[60%] mx-auto min-h-screen">
                    <div className={`bg-accent rounded-2xl mx-2 shadow-lg my-auto`}>
                        <div className="card-body">
                            <p className="text-2xl text-center text-green-500 font-bold">Hello, Chanki panday</p>
                            <h2 className="card-title text-white">Please, pay for <span className='text-orange-500'>One Month </span></h2>
                            <p className="text-white">Quantity:  <span className='text-orange-500'>package 1 </span></p>
                            <p className='text-white'>Please pay $ <span className='text-orange-500'>$10</span></p>
                            <p className='flex'><FaCcMastercard className='text-4xl text-white' /> <FaCcPaypal className='mx-3 text-4xl text-white' /> <FaCcVisa className='text-4xl text-white' /></p>
                        </div>
                    </div>
                    <div className={`bg-accent rounded-2xl mx-2 shadow-lg my-auto`}>
                        <div className="card-body">
                            <p className="text-2xl text-center text-green-500 font-bold">Hello, Chanki panday</p>
                            <h2 className="card-title text-white">Please, pay for <span className='text-orange-500'>One Month </span></h2>
                            <p className="text-white">Quantity:  <span className='text-orange-500'>package 1 </span></p>
                            <p className='text-white'>Please pay $ <span className='text-orange-500'>$10</span></p>
                            <p className='flex'><FaCcMastercard className='text-4xl text-white' /> <FaCcPaypal className='mx-3 text-4xl text-white' /> <FaCcVisa className='text-4xl text-white' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;