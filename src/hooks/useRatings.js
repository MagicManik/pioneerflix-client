import { useQuery } from '@tanstack/react-query';

const useRatings = (id) => {

    const { data, refetch } = useQuery(['ratings'], () =>
        fetch(`http://localhost:5000/ratings/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    );

    return [data, refetch]
}

export default useRatings;