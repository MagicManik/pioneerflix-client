import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useVideos from '../../../hooks/useVideos';
import './SearchResults.css';

const SearchResults = () => {
    const [videos] = useVideos();
    const { id } = useParams();

    let getTheme = localStorage.getItem("colorTheme");

    const result = videos.filter(video => video.title.toLowerCase().includes(id.toLowerCase()));

    const resultLength = result.length;

    return (
        <section className='bg-[#141414] pt-16'>
            <h1 className='px-2 md:px-16 lg:px-18 text-red-600 bg-black text-xl lg:text-2xl pt-5'>Your Search Result For "{id}"</h1>
            <div className='search-container bg-black px-2 md:px-8 lg:px-16 pt-5'>
                {
                    result.map(video =>
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

export default SearchResults;