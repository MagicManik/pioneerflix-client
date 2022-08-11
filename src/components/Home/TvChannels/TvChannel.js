import React from 'react';
import { useParams } from 'react-router-dom';
import useChannel from '../../../hooks/useChannel';

const TvChannel = () => {
    const { id } = useParams();
    const [channel, setChannel] = useChannel(id);
    return (
        <div className="">
            <div className="justify-center flex  ">
                <iframe
                    className="rounded-sm h-full md:h-[700px] md:p-1 shadow-2xl border-2 border-zinc-700 "
                    width="100%"
                    src={channel.channelLink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            
        </div>
    );
};

export default TvChannel;