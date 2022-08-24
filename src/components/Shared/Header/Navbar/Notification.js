import React, { useState } from "react";
import { useEffect } from "react";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUploadedVideo from "../../../../hooks/useUploadedVideo";

const Notification = () => {
  const [videos] = useUploadedVideo();
  const [notification, setNotification] = useState(false);
  const [showN,setShowN]=useState(true)
  let getNotificationMode = localStorage.getItem("notificationMode");


  const handleNotification = () => {
    setNotification(!notification);
    setShowN(false)
    localStorage.setItem("notificationMode", "false");
  };
useEffect(()=>{
  if(getNotificationMode==='true'){
    setShowN(true)
  }
  // else{
  //   setShowN(false)
  // }
},[getNotificationMode])
// console.log(showN)
  return (
    <>
      <div className="relative">
        <button type="button" className=" text-white mx-2 md:mx-3">
          <span className="sr-only">View notifications</span>
          <div class="indicator">
            {showN ? (<span class="indicator-item badge ">{videos.length}</span> ):
             ( <span class="indicator-item badge ">0</span>
            ) }
            <FaRegBell
              onClick={handleNotification}
              className="h-6 w-6"
              aria-hidden="true"
            />
          </div>
        </button>
        {/* {
          getNotificationMode ? <p>this is true</p> : <p>this is false</p>
        } */}
        {notification && (
          <div className="bg-[#222] text-white max-h-80 overflow-auto  w-80 absolute rounded-sm top-10 left-[-200px]">
            {videos?.map((v) => (
              <>
                <div
                  key={v?._id}
                  className="flex px-3 py-3 justify-start items-center"
                >
                  <img
                    src={v?.adminImg}
                    className="h-12 w-12 rounded-full"
                    alt=""
                  />
                  <Link to={`/uploadedVideo/${v?._id}`}>
                    <div
                     onClick={()=>setNotification(false)} className=" ml-3">
                      <p className="text-lg font-semibold">{v?.adminName}</p>
                      <p className="text-sm">{v?.title}</p>
                    </div>
                  </Link>
                </div>
                <hr className="h-[.5px]  bg-black mx-3" />
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Notification;
