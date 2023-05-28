
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useWatchHistory = (email) => {
    const [user] = useAuthState(auth);
    const [watchedVideo, setWatchedVideo] = useState([]);

    useEffect(() => {
        fetch(`https://pioneerflix-server.onrender.com/watched/${user?.email}`)
            .then(res => res.json())
            .then(data => setWatchedVideo(data))
    }, [user?.email]);

    return [watchedVideo, setWatchedVideo];
}

export default useWatchHistory;
