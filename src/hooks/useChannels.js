import React, { useEffect, useState } from 'react';

const useChannels = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        fetch('https://infinite-island-65121.herokuapp.com/channels')
            .then(res => res.json())
            .then(data => setChannels(data))
    }, [])
    return [channels, setChannels]
};

export default useChannels;