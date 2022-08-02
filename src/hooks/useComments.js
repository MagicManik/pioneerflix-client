import { useEffect, useState } from "react"

const useComments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, []);

    return [comments, setComments];
}

export default useComments;