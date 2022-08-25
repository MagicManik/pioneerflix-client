import React from 'react';

const DbSingleMainPageCard = ({ data }) => {
    const { title, backGround, boxShadow, barValue, update } = data;
    return (
        <div
            style={{ background: `${backGround}`, boxShadow: `${boxShadow}` }}
            className="card w-full text-white">
            <div>
                <div>
                <div className="radial-progress w-18 text-4xl text-white" style={{ '--value': `${barValue}` }}>{barValue}</div>
                <p className="card-title uppercase">{title}</p>
                </div>
                <div>

                </div>
                <data.icon />
                <p>{update}</p>
            </div>
        </div>
    );
};

export default DbSingleMainPageCard;