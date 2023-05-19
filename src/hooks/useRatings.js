import { useQuery } from '@tanstack/react-query';

const useRatings = (id) => {

    const { data, refetch } = useQuery(['ratings'], () =>
        fetch(`https://pioneerflix-server-new.onrender.com/ratings/${id}`, {
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