import React, { useState } from "react";
import { useEffect } from "react";
import { FaRegBell, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUploadedVideo from "../../../../hooks/useUploadedVideo";

const Notification = ({ notification, setNotification }) => {
  const [videos] = useUploadedVideo();

  const [showN, setShowN] = useState(true)
  let getNotificationMode = localStorage.getItem("notificationMode");

  const handleNotification = () => {
    setNotification(!notification);
    setShowN(false)
    localStorage.setItem("notificationMode", "false");
  };
  useEffect(() => {
    if (getNotificationMode === 'true') {
      setShowN(true)
    }
    else if (getNotificationMode === 'false') {
      setShowN(false)
    }
  }, [getNotificationMode])

  const notificationStyle = {
    padding: '0 8px',
    paddingTop: '7px',
    position: 'relative'
  }

  return (
    <>
      <div style={notificationStyle}>
        <button type="button" onClick={handleNotification} className=" text-accent mx-2 md:mx-3">
          <span className="sr-only">View notifications</span>
          <div className="indicator text-lg ">
            {showN ? (<span className="indicator-item badge w-4 md:w-6 text-sm text-primary bg-primary ">{videos.length}</span>) : (<span className="indicator-item badge w-4 md:w-6 text-sm bg-white text-black ">0</span>
            )
            }
            <FaRegBell

              className="h-6 w-6 text-sn text-white"
              aria-hidden="true"
            />
          </div>
        </button>

        {
          videos?.length && <>

            {notification && (
              <div className="bg-[#222] z-50 text-white  max-h-80 overflow-auto  w-80 absolute rounded-sm top-10 left-[-200px]">

                {videos?.map((v) => (
                  <>
                    <div
                      key={v?._id}
                      className="flex px-3 py-3 hover:bg-stone-700 justify-start items-center"
                    >
                      <FaBell className=" text-4xl rounded-xl ml-2 bg-amber-800 p-2 duration-500 hover:bg-white hover:text-amber-800"
                      />
                      <Link to={`/uploadedVideo/${v?._id}`}>
                        <div
                          onClick={() => setNotification(false)} className=" ml-5">
                          <p className="text-lg font-semibold">{v?.category}</p>
                          <p className="text-sm">{v?.title}</p>
                        </div>
                      </Link>
                    </div>
                    <hr className="h-[.5px]  bg-black mx-3" />
                  </>
                ))}
              </div>

            )}
          </>
        }


      </div>

    </>
  );
};

export default Notification;
