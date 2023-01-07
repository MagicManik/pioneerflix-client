import { useEffect, useState } from "react"

const useLikes = () => {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        fetch('https://server-production-b237.up.railway.app/likes')
            .then(res => res.json())
            .then(data => setLikes(data))
    }, [likes])

    return [likes, setLikes];
}

export default useLikes;