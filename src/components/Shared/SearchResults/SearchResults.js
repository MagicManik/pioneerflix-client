import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import useVideos from '../../../hooks/useVideos';

const SearchResults = () => {
    const [videos] = useVideos();
    const { id } = useParams();

    // const result = videos.filter(video => video.title.toLowerCase().indexOf(id.toLowerCase()) !== -1);

    const result = videos.filter(video => video.title.toLowerCase().includes(id.toLowerCase()));


    const resultLength = result.length;

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 2.2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className='pt-16 bg-black'>
            <div className='bg-primary pl-5 video-container-II'>
                <h1 className='text-2xl pt-6'>Your Search result {resultLength}</h1>

                <div className='pb-10'>
                    <Slider {...settings}>

                        {
                            result.map(video =>

                                <div key={video._id}>
                                    <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={video._id}>
                                        <Link to={`/play/${video._id}`}>
                                            <img className='popular-movie' src={video.imgLink} alt="" />
                                        </Link>


                                    </div>

                                </div>)
                        }

                    </Slider>
                </div >
                <i className="fa fal fa-angle-double-down"></i>
            </div >
        </div>
    );
};

export default SearchResults;