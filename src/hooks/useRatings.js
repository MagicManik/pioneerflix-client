import { useQuery } from '@tanstack/react-query';

const useRatings = (id) => {

    const { data, refetch } = useQuery(['ratings'], () =>
        fetch(`https://infinite-island-65121.herokuapp.com/ratings/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    );

    return [data, refetch]
    // const [ratings, setRatings] = useState();

    // useEffect(() => {
    //     fetch(`https://infinite-island-65121.herokuapp.com/ratings/${id}`)
    //         .then(res => res.json())
    //         .then(data => setRatings(data));
    // }, [id, rating])

    // return [ratings, setRatings];
}

export default useRatings;