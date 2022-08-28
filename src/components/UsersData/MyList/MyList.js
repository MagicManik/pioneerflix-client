import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FcLike } from 'react-icons/fc';

const MyList = () => {

    const [user] = useAuthState(auth);

    const [myList, setMyList] = useState([]);

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
                            <Link to={`/play/${video.id}`}>
                                <img src={video.imgLink} alt="" />
                                <div className='flex justify-between items-center px-3'>
                                    <p className='text-lg'>{video.title}</p>
                                    <FcLike className='text-2xl'></FcLike>
                                </div>
                            </Link>

                        </div>
                    )
                }
            </div>

        </section>
    );
};

export default MyList;