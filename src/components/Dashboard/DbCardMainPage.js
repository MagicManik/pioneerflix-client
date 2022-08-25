import React from 'react';
import './DbCardMainPage.css';
import { dbCardData } from '../../../src/Data/Data';
import DbSingleMainPageCard from './DbSingleMainPageCard';

const DbCardMainPage = () => {

    return (
        <div className='grid grid-cols-4 gap-4 px-2 mb-4 mt-2'>
            {
                dbCardData.map(data =>
                    <DbSingleMainPageCard 
                    key={data.id} 
                    data={data}
                />
                )
            }

        </div>
    );
};

export default DbCardMainPage;