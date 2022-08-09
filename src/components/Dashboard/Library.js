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

    <div className='grid grid-cols-4 gap-5 border-2 border-indigo-600 '>
    {
          vData.map(v=><>
        <div className='border-2 border-indigo-600 shadow-2xl rounded-sm h-50 shadow-red-600'>

        <iframe width="100%" height="200px" src={v?.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       
          
          
          </>)
        }
    </div>
        </>
    );
};

export default Library;