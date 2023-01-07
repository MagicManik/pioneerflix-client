import { useState, useEffect } from 'react';

const usePaidUser = user => {
    // console.log(user)
    const [paidUser, setPaidUser] = useState(false);
    const [paidLoading, setPaidLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://server-production-b237.up.railway.app/paidUser/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setPaidUser(data)
                    // console.log(data);
                    setPaidLoading(false)
                })
        }

    }, [user])

    return [paidUser, paidLoading]

};

export default usePaidUser;