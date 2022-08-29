import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { TbHeartPlus } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const MyList = () => {

    const [user] = useAuthState(auth);

    const [myList, setMyList] = useState([]);

    const navigate = useNavigate();

    const handlePlay = (id) => {
        navigate(`/play/${id}`)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/mylist/${user?.email}`)
            .then(req => req.json())
            .then(data => setMyList(data))
    }, [user])

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