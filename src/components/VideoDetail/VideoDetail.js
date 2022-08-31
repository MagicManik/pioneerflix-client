import React, { useEffect } from "react";
import { useState } from "react";
import useVideos from "../../hooks/useVideos";
import { FaShareAlt, FaStar } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const VideoDetail = () => {
  const [videos] = useVideos();
  const [video, setVideo] = useState({});
  const [uVideo, setUVideo] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (videos?.length) {
      const remaining = videos?.filter(
        (v) => v?.category === "Exclusive Movies"
      );
      setVideo(remaining);
      setUVideo(remaining[0]);
    }
  }, [videos]);

  return (
    <div className=" md:px-14 px-3 bg-primary py-20">
      <div className="grid grid-cols-12 gap-4">
        <div className=" w-full col-start-1 col-end-13 md:col-end-10">
          <iframe
            width="100%"
            className="p-[.5px] md:h-[550px]"
            src={uVideo.videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="py-5 text-white">
            <div className="md:flex justify-between items-center">
              <div>
                <div className="flex items-center pl-5">
                  {[...Array(5)].map((start, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label key={i}>
                        <input
                          type="radio"
                          className="hidden"
                          name="rating"
                          value={ratingValue}
                        />

                        <FaStar className="ml-2"></FaStar>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="grid grid-cols-3 mr-6 md:ml-0 ml-5  md:mt-0 mt-5">
                <div className="flex items-center ">
                  <button
                    className={"btn btn-circle like-btn liked-btn"}
                    title="Like here"
                  >
                    <BiLike />
                  </button>
                  <div className={"text-[#ff9501]"}>Like</div>
                </div>
                <div className="flex items-center mr-3">
                  <button
                    className="btn btn-circle like-btn"
                    title="Add your list"
                  >
                    <AiOutlinePlus />
                  </button>
                  <span>My List</span>
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="my-share-modal-3"
                    className="btn btn-circle like-btn"
                    title="Share"
                  >
                    <FaShareAlt className="text-xl" />
                  </label>
                  <span>Share</span>
                </div>
              </div>
            </div>

            <hr className="h-[0.5px] my-3 bg-[#222] " />
          </div>
          <div className="flex items-center">
            {user?.photoURL ? (
              <img
                className="w-14 h-14 rounded-full mt-2 p-1"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <AiOutlineUser className="commenter-img-icon" />
            )}

            <div className="w-full ml-2">
              <form>
                <div className="relative">
                  <input
                    autoComplete="off"
                    type="text"
                    name="comment"
                    className="block comment-line p-3 pl-5 focus:outline-none w-full text-sm   bg-primary rounded-sm pr-40"
                    placeholder="Add a comment…"
                    required
                  />
                  <button
                    type="submit"
                    className="btn bg-[#ff9501] hover:bg-[#d37c02] text-[#f5f5f7] absolute right-2.5 disabled bottom-1 font-medium rounded-lg text-sm px-6"
                  >
                    {" "}
                    Comment
                  </button>
                </div>
                <hr className="h-[0.5px] bg-slate-900  " />
              </form>
            </div>
          </div>

          <div className=" md:py-5 pt-5 gap-5">
            {user?.photoURL ? (
              <img
                className="mt-1 w-10 h-10 rounded-full mr-3"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <AiOutlineUser className="commenter-img-icon w-10 h-10 rounded-full mr-3" />
            )}
            <div className="rounded-2xl pb-2 border-[2px #222] ">
              <p className="text-amber-400"> This is firs comment</p>
            </div>
          </div>
        </div>
        <div className=" w-full col-start-1 md:col-start-10 col-end-13">
          {video?.length && (
            <div>
              {video?.map((v) => (
                <>
                  <div
                  key={v?._id}
                    onClick={() => setUVideo(v)}
                    className="flex px-3 bg-[#222] rounded-sm  py-3 mb-3"
                  >
                    <img
                      src={v?.imgLink}
                      className="h-[80px] rounded-sm w-[100px]"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className=" text-lg font-semibold ">{v?.title}</p>
                      <p className="text-sm">
                        {v?.description.slice(0, 50)}....
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
