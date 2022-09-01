import { useEffect, useState } from 'react';

const useUploadedVideo = () => {
    const [videos, setVideos] = useState({})
    useEffect(() => {
        fetch('https://infinite-island-65121.herokuapp.com/notification')
            .then(res => res.json())
            .then(data => setVideos(data))

    }, [])
    return [videos, setVideos]
};

export default useUploadedVideo;