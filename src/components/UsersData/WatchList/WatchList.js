import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const WatchList = () => {
    const [user] = useAuthState(auth);
    const [watched, setWatched] = useState([]);

    // console.log(watched)

    useEffect(() => {
        fetch(`https://infinite-island-65121.herokuapp.com/watched/${user?.email}`)
            .then(res => res.json())
            .then(data => setWatched(data))
    }, [user?.email]);

    return (
        <section className='bg-[#141414] pt-16'>
            <h1 className='px-2 md:px-16 lg:px-18 bg-black text-xl lg:text-2xl pt-5'>You watched {watched.length} videos</h1>
            <div className='search-container bg-black px-2 md:px-8 lg:px-16 pt-5'>
                {
                    watched.map(video =>
                        <div key={video._id} className='zoom-div-2'>
                            <Link to={`/play/${video._id}`}>
                                <img className='search-img rounded-lg' src={video.imgLink} alt="" />
                            </Link>
                        </div>
                    )
                }

            </div>
        </section>
    );
};

export default WatchList;