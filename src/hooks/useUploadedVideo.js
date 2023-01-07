import { useEffect, useState } from 'react';

const useUploadedVideo = () => {
    const [videos, setVideos] = useState({})
    useEffect(() => {
        fetch('https://server-production-b237.up.railway.app/notification')
            .then(res => res.json())
            .then(data => setVideos(data))

    }, [])
    return [videos, setVideos]
};

export default useUploadedVideo;