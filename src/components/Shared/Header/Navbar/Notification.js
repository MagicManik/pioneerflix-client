import React, {  useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUploadedVideo from "../../../../hooks/useUploadedVideo";


const Notification = () => {
    const [videos] = useUploadedVideo()
    const[notification,setNotification]=useState(false)
    let getNotificationMode = localStorage.getItem("notificationMode");

const handleNotification=()=>{
    setNotification(!notification)
    localStorage.setItem('notificationMode', false)
}

  return (
 <>
    <div className="relative">
      <button type="button" className=" text-white mx-2 md:mx-3">
        <span className="sr-only">View notifications</span>
        <div class="indicator">
          {!getNotificationMode ?<span class="indicator-item badge ">0</span> :<span class="indicator-item badge ">{videos.length}</span>}
          <FaRegBell onClick={handleNotification} className="h-6 w-6" aria-hidden="true" />
        </div>
      </button>
{  notification  &&    <div className="bg-amber-400 mx-h-80 w-80 absolute rounded-sm top-10 left-[-150px]">
{
   videos?.map(v=><>
 <div key={v._id} className="flex px-3 py-3 justify-start items-center">
 <img src={v.adminImg} className='h-14 w-14 rounded-full' alt="" />
 <Link to={`/uploadedVideo/${v._id}`}>
 <div  className="text-black ml-3">
  <p className="text-lg font-semibold">{v.adminName}</p>
  <p className="text-sm">{v.title}</p>
  </div>
 </Link>
 </div>
   
   </>) 
}
    </div>}
    </div>
    
 
 </>
  );
};

export default Notification;
