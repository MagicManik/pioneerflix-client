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
}

export default useRatings;