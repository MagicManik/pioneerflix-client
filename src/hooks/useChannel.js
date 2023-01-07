import React, { useEffect, useState } from 'react';

const useChannel = (id) => {
    const [channel, setChannel] = useState({})

    useEffect(() => {
        fetch(`https://server-production-b237.up.railway.app/channels/${id}`)
            .then(res => res.json())
            .then(data => setChannel(data))

    }, [id, channel])
    return [channel, setChannel];
};

export default useChannel;