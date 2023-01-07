import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useLikes from '../../../hooks/useLikes';

const LikedVideos = () => {

    const [user] = useAuthState(auth);

    const [likes] = useLikes();
    const likedUser = likes?.filter((li) => li.email === user?.email);

    console.log(likedUser)

    const navigate = useNavigate();

    const handlePlay = (id) => {
        navigate(`/play/${id}`)
    }
// console.log(likes)
    return (
        <section className='bg-[#141414] lg:pt-16 pt-1'>
            <h1 className='px-2 md:px-16 lg:px-18 bg-black text-xl lg:text-2xl pt-5'>You liked total {likedUser.length} video. Thank you so much Dear, <span className='text-[#ff9501]'>{user?.displayName}</span></h1>
            <div className='search-container bg-black px-2 md:px-8 lg:px-16 pt-5'>
                {
                    likedUser.map(video =>
                        <div key={video._id} className='zoom-div-2'>
                            <button onClick={() => handlePlay(video.id)} className='search-video-play-button'>
                                <img className='search-img rounded-lg' src={video.imgLink} alt="" />
                                <p className='block mx-auto'>{video.title}</p>
                            </button>

                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default LikedVideos;