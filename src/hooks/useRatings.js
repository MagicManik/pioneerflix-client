import { useEffect } from "react";
import { useState } from "react"

const useRatings = (id, rating) => {

    const [ratings, setRatings] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/ratings/${id}`)
            .then(res => res.json())
            .then(data => setRatings(data));
    }, [id, rating])

    return [ratings, setRatings];
}

export default useRatings;