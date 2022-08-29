import React from 'react';
import { TbHeartPlus } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import useMyList from '../../../hooks/useMyList';

const MyList = () => {

    const [myList] = useMyList();

    const navigate = useNavigate();

    const handlePlay = (id) => {
        navigate(`/play/${id}`)
    };

    return (
        <section className='py-16 bg-black'>
            <h3 className='px-2 md:px-16 lg:px-18 text-white bg-slate-900 text-xl lg:text-2xl pt-5'>You have {myList.length} videos in your list</h3>
            <div className=' bg-slate-900 search-container px-2 md:px-8 lg:px-16 pt-6 pb-10'>
                {
                    myList.map(video =>
                        <div key={video._id} className='zoom-div-2 shadow-2xl mb-4'>
                            <button onClick={() => handlePlay(video.id)}>
                                <img src={video.imgLink} alt="" />
                                <TbHeartPlus className='text-3xl mx-auto fill-[#d41821] pt-2' />
                                <p className='text-lg text-left text-[#ff9501]'>{video.title}</p>
                            </button>
                        </div>
                    )
                }
            </div>

        </section>
    );
};

export default MyList;