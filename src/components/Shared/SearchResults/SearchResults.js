import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import useVideos from '../../../hooks/useVideos';
import './SearchResults.css';

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
        <div className='bg-[#212121]'>

            <div className='search-section'>

                <div className='search-menu-bar pl-6 pt-16'>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                </div>

                <div>
                    {
                        result.map(video =>
                            <div className='search-container py-5'>
                                <div className='search-video pl-6'>
                                    {/* <img src={video.videoLink} alt="" /> */}
                                    <Link to={`/play/${video._id}`}>
                                        <iframe
                                            width="100%"
                                            className="mt-1"
                                            height="300px"
                                            src={video.videoLink}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </Link>

                                </div>
                                <div className='search-video-details pl-4 pt-10'>
                                    <h3>Lorem ipsum dolor sit amet consecteture</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam laboriosam similique, sint delectus porro accusamus dolor consequatur voluptatibus velit pariatur laborum eveniet ut necessitatibus ad obcaecati animi ea quis.</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchResults;