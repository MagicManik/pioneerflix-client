import React from 'react';

const DbSingleMainPageCard = ({ data }) => {
    const { title } = data;
    return (
        <div className="card w-full text-white">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default DbSingleMainPageCard;