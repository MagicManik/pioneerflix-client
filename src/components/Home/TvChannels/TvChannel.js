import React from 'react';
import { useParams } from 'react-router-dom';
import useChannel from '../../../hooks/useChannel';

const TvChannel = () => {
    const { id } = useParams();
    const [channel, setChannel] = useChannel(id);
    return (
        <div className="pt-16 bg-black">
            <hr className='line-' />
            <div className="justify-center flex pt-4 ">

                <iframe
                    width="95%"
                    className="mt-1"
                    height="500px"
                    src={channel.channelLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                {/* <iframe
                    className="rounded-sm h-full md:h-[700px] md:p-1 shadow-2xl border-2 border-zinc-700 "
                    width="100%"
                    src={channel.channelLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe> */}
            </div>

        </div>
    );
};

export default TvChannel;