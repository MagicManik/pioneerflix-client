import React from 'react';

const DbSingleMainPageCard = ({ data }) => {
    const { title, backGround, boxShadow, barValue, update, count } = data;
    return (
        <div
            style={{ background: `${backGround}`, boxShadow: `${boxShadow}`, cursor: 'pointer' }}
            className="card w-full text-white"
        >
            <div className={`flex p-1 duration-300 hover:bg-[#b33e50]`}>
                <div className='w-full flex-col '>
                    <div
                        className="radial-progress mx-auto ml-2 my-2 text-2xl text-white"
                        style={{ '--value': `${barValue}`, '--thickness': '4px', '--size': '4rem' }}
                    >
                        {barValue}
                    </div>
                    <p className="card-title ml-2 uppercase">{title}</p>
                </div>
                <div className='w-full flex-col'>
                    <data.icon className='flex w-full justify-end ml-8 text-4xl mt-2' />
                    <span className='flex w-full justify-end my-2 pr-4'>{count}</span>
                    <p className='flex w-full justify-end text-sm pr-4 mt-2'>{update}</p>
                </div>
            </div>

        </div>
    );
};

export default DbSingleMainPageCard;