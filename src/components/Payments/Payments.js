import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Payments.css';

const Payments = () => {
    const myElement = useRef()
    const currentDate = new Date();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleHover = (e) => {
        const x = e.pageX - myElement.current.offsetLeft
        const y = e.pageY - myElement.current.offsetTop

        myElement.current.style.setProperty('--x', x + 'px')
        myElement.current.style.setProperty('--y', y + 'px')
    }
    const myElement2 = useRef()
    const handleHover2 = (e) => {
        const x = e.pageX - myElement2.current.offsetLeft
        const y = e.pageY - myElement2.current.offsetTop

        myElement2.current.style.setProperty('--x', x + 'px')
        myElement2.current.style.setProperty('--y', y + 'px')
    }
    const myElement3 = useRef()
    const handleHover3 = (e) => {
        const x = e.pageX - myElement3.current.offsetLeft
        const y = e.pageY - myElement3.current.offsetTop

        myElement3.current.style.setProperty('--x', x + 'px')
        myElement3.current.style.setProperty('--y', y + 'px')
    }
    const myElement4 = useRef()
    const handleHover4 = (e) => {
        const x = e.pageX - myElement4.current.offsetLeft
        const y = e.pageY - myElement4.current.offsetTop

        myElement4.current.style.setProperty('--x', x + 'px')
        myElement4.current.style.setProperty('--y', y + 'px')
    }

    const paymentApi = [
        {
            package: 1,
            month: 'One month',
            taka: 10,
            ref: myElement,
            onMouseMove: handleHover,
            description: [
                'Ad Free Premium Access',
                'Offline Download',
                '2-Device Login',
                '1 Simultaneous Stream',
            ]
        },
        {
            package: 2,
            month: 'Three month',
            taka: 20,
            ref: myElement2,
            onMouseMove: handleHover2,
            description: [
                'Ad Free Premium Access',
                'Offline Download',
                '4-Device Login',
                '1 Simultaneous Stream',
            ]
        },
        {
            package: 3,
            month: 'Half Yearly',
            taka: 40,
            ref: myElement3,
            onMouseMove: handleHover3,
            description: [
                'Ad Free Premium Access',
                'Offline Download',
                '6-Device Login',
                '2 Simultaneous Stream',
            ]
        },
        {
            package: 4,
            month: 'One Year',
            taka: 60,
            ref: myElement4,
            onMouseMove: handleHover4,
            description: [
                'Ad Free Premium Access',
                'Offline Download',
                '7-Device Login',
                '3 Simultaneous Stream',
            ]
        }
    ];

    const bookingButton = (a) => {
        const userBooking = {
            package: a?.package,
            month: a?.month,
            taka: a?.taka,
            userEmail: user?.email,
            userName: user?.displayName,
            bookingTime: currentDate
        }
        if (user) {
            const url = `https://infinite-island-65121.herokuapp.com/userBooking/${user?.email}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userBooking)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    navigate('/paymentPage');
                })
        }
        else{
            navigate('/login');
        }
    }

    // #ff0055 #f68a23
    // #73074d
    // previous bg-[#f0ebe3]
    // bg-gradient-to-r from-[#ff0055] to-[#f68a23]/
    return (
        <div className="bg-black pt-16">
            <div className='bg-primary pb-8'>
                <h1 className='mx-auto text-center pt-8
                 text-2xl pb-3 font-bold text-secondary'>CHOOSE A PLAN AND</h1>
                <p className='mx-auto text-center
                 text-xl pb-3 font-bold mb-4 text-secondary'>ENJOY ALL PIONEERFLIX PREMIUM CONTENTS</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden sm:w-[60%] mx-auto">
                    {
                        paymentApi?.map(a =>
                            <div key={a.package} className={`flex flex-col relative rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 mx-2 shadow-lg gap-4 post post-2 post-3 post-4 overflow-hidden`} ref={a?.ref} onMouseMove={a?.onMouseMove}>
                                <h1 className='text-2xl text-center font-bold pt-2 leading-none post-title'>{a?.month}</h1>
                                <p className="post-des text-center font-bold my-0 py-0">USD-<span className='text-xl'>{a.taka}$</span></p>
                                {
                                    a?.description?.map((d, index) =>
                                        <ul key={index}>
                                            <li className='inline-flex font-semibold post-des'><AiOutlinePlusCircle className='text-green-500 pt-2 text-xl' /> <span>{d}</span></li>
                                        </ul>
                                    )
                                }
                                <button
                                    className='subscribe-btn w-[80%] text-center text-xl font-semibold mx-auto mb-2'
                                    onClick={() => bookingButton(a)}
                                >
                                    Subscribe Now</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Payments;