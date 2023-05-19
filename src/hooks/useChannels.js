import { useEffect, useState } from 'react';

const useChannels = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        fetch('https://pioneerflix-server-new.onrender.com/channels')
            .then(res => res.json())
            .then(data => setChannels(data))
    }, [])
    return [channels, setChannels]
};

export default useChannels;