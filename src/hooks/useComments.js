// import { useEffect, useState } from "react"

// const useComments = () => {
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         fetch('https://server-production-b237.up.railway.app/comments')
//             .then(res => res.json())
//             .then(data => setComments(data));
//     }, [comments]);

//     return [comments, setComments];
// }

// export default useComments;