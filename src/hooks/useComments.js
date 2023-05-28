// import { useEffect, useState } from "react"

// const useComments = () => {
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         fetch('https://pioneerflix-server.onrender.com/comments')
//             .then(res => res.json())
//             .then(data => setComments(data));
//     }, [comments]);

//     return [comments, setComments];
// }

// export default useComments;