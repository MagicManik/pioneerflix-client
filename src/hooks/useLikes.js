import { useEffect, useState } from "react"

const useLikes = () => {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/likes')
            .then(res => res.json())
            .then(data => setLikes(data))
    }, [])

    return [likes, setLikes];
}

export default useLikes;