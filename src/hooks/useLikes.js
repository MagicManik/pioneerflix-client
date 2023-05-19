import { useEffect, useState } from "react"

const useLikes = () => {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        fetch('https://pioneerflix-server-new.onrender.com/likes')
            .then(res => res.json())
            .then(data => setLikes(data))
    }, [likes])

    return [likes, setLikes];
}

export default useLikes;