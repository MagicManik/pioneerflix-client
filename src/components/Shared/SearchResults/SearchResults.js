import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetAllVideosQuery } from '../../../services/post';
// import useVideos from '../../../hooks/useVideos';
import './SearchResults.css';

const SearchResults = () => {
    // const [videos] = useVideos();
    const { data, refetch, isLoading } = useGetAllVideosQuery();
    const { id } = useParams();

    const result = data?.filter(video => video.title.toLowerCase().includes(id.toLowerCase()));

    const navigate = useNavigate();

    const handlePlay = (id) => {
        navigate(`/play/${id}`)
    }

    return (
        <section className='bg-[#141414] pt-16'>
            <h1 className='px-2 md:px-16 lg:px-18 text-red-600 bg-black text-xl lg:text-2xl pt-5'>Your Search Result For "{id}"</h1>
            <div className='search-container bg-black px-2 md:px-8 lg:px-16 pt-5'>
                {
                    result.map(video =>
                        <div key={video._id} className='zoom-div-2'>
                            <button onClick={() => handlePlay(video._id)} className='search-video-play-button'>
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

export default SearchResults;