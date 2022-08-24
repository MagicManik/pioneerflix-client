import { useState, useEffect } from 'react';

const usePaidUser = user => {
    const [paidUser, setPaidUser] = useState(false);
    const [paidLoading, setPaidLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/paidUser/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setPaidUser(data.paid)
                    setPaidLoading(false)
                })
        }

    }, [user])

};

export default usePaidUser;