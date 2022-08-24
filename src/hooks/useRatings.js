import { useEffect } from "react";
import { useState } from "react"

const useRatings = (id, rating) => {

    const [ratings, setRatings] = useState();

    useEffect(() => {
        fetch(`https://infinite-island-65121.herokuapp.com/ratings/${id}`)
            .then(res => res.json())
            .then(data => setRatings(data));
    }, [id, rating])

    return [ratings, setRatings];
}

export default useRatings;