import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useWatchHistory = () => {
    const [user] = useAuthState(auth);
    const [watchVideo, setWatchVideo] = useState({});

    useEffect(() => {
        fetch(`https://infinite-island-65121.herokuapp.com/watched/${user?.email}`)
            .then(res => res.json())
            .then(data => setWatchVideo(data))
    }, [user]);

    return [watchVideo, setWatchVideo];
};

export default useWatchHistory;

