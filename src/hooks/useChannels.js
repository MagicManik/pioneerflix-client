import React, { useEffect, useState } from 'react';

const useChannels = () => {
    const [channels, setChannels]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/channels')
        .then(res=>res.json())
        .then(data=>setChannels(data))
    },[])
    return [channels, setChannels]
};

export default useChannels;