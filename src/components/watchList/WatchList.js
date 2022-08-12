import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const WatchList = () => {
  const [user] = useAuthState(auth);
  const [vData, setVData] = useState([]);
  useEffect(() => {
    fetch(`https://infinite-island-65121.herokuapp.com/library/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVData(data);
      });
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2  lg:grid-cols-4 px-14 gap-5 pr-5 bg-primary  py-20 ">
        {vData.map((v, index) => (
          <>
            <div key={index} className="rounded-sm  h-64  p-2 shadow-sm shadow-white bg-black">
              <iframe
                width="100%"
                className="mt-1"
                height="200px"
                src={v?.videoLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="flex text-white justify-between p-3 items-center">
                <p className="text-sm">{v.videoTitle}</p>
                <Link to={`/play/${v.videoId}`}>
                  <button className="badge badge-white">Details</button>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default WatchList;
