import { useEffect, useState } from "react"

const useVideo = (id) => {
    const [video, setVideo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/video/${id}`)
            .then(res => res.json())
            .then(data => setVideo(data))
    }, [id, video]);

    return [video, setVideo];
}

export default useVideo;