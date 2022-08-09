import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Library = () => {
    const [user] = useAuthState(auth);
    const [vData,setVData]=useState([])
  //  const {email,photoURL,displayName}=user
  //  console.log(user)
  //  console.log(email,photoURL,email)
  
   useEffect(() => {
    fetch(`http://localhost:5000/library/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVData(data)
        // console.log(data)
      });
  }, []);
  
  console.log(vData)
    return (
        <>
            <h1>from library componant</h1>
        </>
    );
};

export default Library;