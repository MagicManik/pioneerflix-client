import { useEffect } from "react";
import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyList = () => {
    const [user] = useAuthState(auth);
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        fetch(`https://server-production-b237.up.railway.app/mylist/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyList(data))
    }, [user, myList])

    return [myList, setMyList];
}

export default useMyList;