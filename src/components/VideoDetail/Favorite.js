import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Favorite = () => {
  const [user] = useAuthState(auth);
  const [fData, setFData] = useState([]);
  useEffect(() => {
    fetch(`https://infinite-island-65121.herokuapp.com/favorite/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFData(data);
      });
  }, [user.email]);

  // console.log(fData)
  return (
    <>
      <div className='px-20 grid  py-14 bg-primary'>
        {
          fData.map((f, index) => <>
            <div key={index} className='flex justify-start  items-center '>
              <iframe
                width="15%"
                className="my-2"
                height="150px"
                src={f?.videoLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className='ml-5'>
                <p>{f.videoTitle}</p>
                <Link to={`/play/${f.videoId}`}>
                  <button className="badge badge-white">Details</button>
                </Link>
              </div>
            </div>
            <hr className='h-[1px] bg-white' />

          </>
          )}</div>
    </>
  );
};

export default Favorite;