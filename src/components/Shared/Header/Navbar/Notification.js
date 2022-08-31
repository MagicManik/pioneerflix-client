import React, { useState } from "react";
import { useEffect } from "react";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUploadedVideo from "../../../../hooks/useUploadedVideo";

const Notification = ({notification, setNotification}) => {
  const [videos] = useUploadedVideo();

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
  else if(getNotificationMode==='false'){
    setShowN(false)
  }
},[getNotificationMode])
  return (
    <>
      <div className="relative">
        <button type="button"  onClick={handleNotification} className=" text-white mx-2 md:mx-3">
          <span className="sr-only">View notifications</span>
          <div class="indicator text-lg ">
            {showN ? (<span class="indicator-item badge ">{videos.length}</span> ) :( <span class="indicator-item badge w-4 md:w-6 text-sm  ">0</span>
            )
              }
            <FaRegBell
             
              className="h-6 w-6"
              aria-hidden="true"
            />
          </div>
        </button>

{
  videos?.length && <>
  
  {notification && (
          <div className="bg-[#222] text-white max-h-80 overflow-auto  w-80 absolute rounded-sm top-10 left-[-200px]">

  {videos?.map((v) => (
    <>
      <div
        key={v?._id}
        className="flex px-3 py-3 justify-start items-center"
      >
        <img
          src={v?.imgLink}
          className="h-12 w-12 rounded-full"
          alt=""
        />
        <Link to={`/uploadedVideo/${v?._id}`}>
          <div
           onClick={()=>setNotification(false)} className=" ml-3">
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
