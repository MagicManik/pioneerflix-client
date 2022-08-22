import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import useUploadedVideo from '../../../../hooks/useUploadedVideo';


const UploadedVideo = () => {
    const { uId } = useParams();
    const [videos] = useUploadedVideo()
    const[video,setVideo]=useState({})
    useEffect(()=>{
        if(videos?.length){
            const remaining=videos?.find(v=>v?._id===uId)
            setVideo(remaining)
        }
    },[videos,uId])

    return (
        <div className='py-16 bg-primary'>        
         <div className='w-full flex justify-center items-center'>
         <iframe
            width="95%"
            className="mt-1"
            height="500px"
            src={video.videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
         </div>
        </div>
    );
};

export default UploadedVideo;