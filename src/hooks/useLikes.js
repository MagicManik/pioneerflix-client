import { useEffect, useState } from "react"

const useLikes = () => {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        fetch('https://infinite-island-65121.herokuapp.com/likes')
            .then(res => res.json())
            .then(data => setLikes(data))
    }, [])

    return [likes, setLikes];
}

export default useLikes;