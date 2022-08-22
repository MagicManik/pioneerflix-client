import  { useEffect, useState } from 'react';

const useUploadedVideo = () => {
    const [videos, setVideos] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/uploadedVideo')
            .then(res => res.json())
            .then(data => setVideos(data))

    }, [])
    return [videos, setVideos]
};

export default useUploadedVideo;