import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {

        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser = {
            profileEmail: email,
            profileName: name
        };

        if (email) {

            fetch(`https://infinite-island-65121.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data?.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })

            // .then(res=>res.json())
            // .then(data=>{
            //     console.log('data inside useToken', data);
            //     const accessToken = data?.token;
            //     localStorage.setItem('accessToken', accessToken);
            //     setToken(accessToken);
            // })
        }

    }, [user])
    return [token];
}

export default useToken;