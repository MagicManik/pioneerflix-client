import React from "react";

const Comment = ({ comment }) => {
  return (
    <div class="card w-80 items-center shadow-2xl bg-slate-500">
      <div class="card-body"> 
        <p className="font-bold text-gray-100 ">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
