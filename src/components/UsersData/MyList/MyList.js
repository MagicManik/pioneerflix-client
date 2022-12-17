import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TbHeartPlus } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useMyList from '../../../hooks/useMyList';

const MyList = () => {

    const [user] = useAuthState(auth);

    const [myList] = useMyList();

    const navigate = useNavigate();

    const handlePlay = (id) => {
        navigate(`/play/${id}`)
    };

    return (

        <section className='bg-[#141414] lg:pt-16 pt-1'>
            <h1 className='px-2 md:px-16 lg:px-18 bg-black text-xl lg:text-2xl pt-5'>You have {myList.length} videos in your list. Thank you so much Dear, <span>{user?.displayName}</span></h1>
            <div className='search-container bg-black px-2 md:px-8 lg:px-16 pt-5'>
                {
                    myList.map(video =>
                        <div key={video._id} className='zoom-div-2'>
                            <button onClick={() => handlePlay(video.id)} className='search-video-play-button'>
                                <img className='search-img rounded-lg' src={video.imgLink} alt="" />
                                <TbHeartPlus className='text-3xl mx-auto fill-[#d41821] pt-2' />
                                <p className='block mx-auto'>{video.videoTitle}</p>
                            </button>

                        </div>
                    )
                }

            </div>
        </section>
    );
};

export default MyList;