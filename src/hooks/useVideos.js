import { useEffect, useState } from "react"

const useVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // fetch('https://infinite-island-65121.herokuapp.com/videos')
        fetch('http://localhost:5000/videos')
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);

    return [videos, setVideos];
}

export default useVideos;