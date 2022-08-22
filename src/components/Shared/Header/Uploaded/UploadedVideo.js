import React from 'react';
import { useParams } from "react-router-dom";
import useUploadedVideo from '../../../../hooks/useUploadedVideo';

const UploadedVideo = () => {
    const { uId } = useParams();
    const [videos] = useUploadedVideo()

    console.log(uId)
    console.log(videos)
    const remaining=videos?.find(v=>v._id===uId)
    console.log(remaining)
    return (
        <div className='py-14'>
    
            
          <iframe
            width="95%"
            className="mt-1"
            height="500px"
            src={remaining?.videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
    );
};

export default UploadedVideo;