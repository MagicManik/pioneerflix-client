import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Library = () => {
  const [user] = useAuthState(auth);
  const [vData, setVData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/library/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVData(data);
      });
  }, []);

  console.log(vData);
  return (
    <>
      <div className="grid grid-cols-3 gap-5 pr-5  py-14 ">
        {vData.map((v) => (
          <>
            <div className="rounded-sm  h-64 bg-black">
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
                  <button className="badge badge-secondary">Details</button>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Library;
