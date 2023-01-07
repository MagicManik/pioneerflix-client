import { useQuery } from '@tanstack/react-query';

const useRatings = (id) => {

    const { data, refetch } = useQuery(['ratings'], () =>
        fetch(`https://server-production-b237.up.railway.app/ratings/${id}`, {
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