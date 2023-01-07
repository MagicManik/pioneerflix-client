import React from 'react';
import './DbCardMainPage.css';
import { dbCardData } from '../../../src/Data/Data';
import DbSingleMainPageCard from './DbSingleMainPageCard';

const DbCardMainPage = () => {

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 mb-4 mt-2'>
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