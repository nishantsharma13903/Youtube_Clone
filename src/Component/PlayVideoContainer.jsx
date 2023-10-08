import React from "react";
import img from '../Images/acc3.webp'
import Comments from "./Comments";
import VideoCardAfterPlay from "./VideoCardAfterPlay";
import { useLocation } from "react-router-dom";

export default function PlayVideoContainer() {

  const location = useLocation();
  const vidId = location.state.vidId;
  const data = location.state.allInfo;

  return (
    <div className="w-full h-[calc(100%-65px)] flex md:flex-row flex-col overflow-y-scroll overflow-x-hidden scrollbar">
      <div className="w-[100%] md:w-[70%] p-4 md:px-10">
        {/* Video Container */}
        <div className="">
          <iframe
            className="h-[300px] md:h-[550px] w-[100%]"
            src={`https://www.youtube.com/embed/${vidId}?autoplay=1`}
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="text-white font-medium text-xl my-2">
          {data.snippet.title}
        </h1>
        {/* buttons */}
        <div className="flex md:flex-row flex-col">
          <div className="md:w-[50%] w-full flex items-center mt-3">
            <div className="w-[40px]">
              <img src={data.snippet.thumbnails.medium.url} alt="" className="h-[40px] w-[40px] rounded-full" />
            </div>
            <div className="mx-3">
              <p className="text-white">{data.snippet.channelTitle}</p>
              <p className="text-[#323130] text-sm">879k subscriber</p>
            </div>
            <div className="">
              <button className="bg-[#323130] px-6 py-2 rounded-full text-white mx-3 flex">
                <i className="fa fa-bell-o mx-1 relative top-1"></i>
                Subcribe
                <i className="fa fa-angle-down mx-1 relative top-1"></i>
              </button>
            </div>
          </div>

          <div className="md:w-[50%] my-4 mx-2 w-full flex items-center md:justify-end">
            <button className="bg-[#323130] px-6 py-2 rounded-full text-white mx-3 flex">
              <i className="fa fa-thumbs-o-up mx-1 relative top-1"></i>
              <p className="mr-1">Like</p>|<i className="fa fa-thumbs-o-down mx-1 relative top-1"></i>
              <p className="ml-1">Dislike</p>
            </button>
            <button className="bg-[#323130] px-6 py-2 rounded-full text-white mx-3 md:flex hidden">
              <i className="fa fa-download mx-1 relative top-1"></i>
              Download
            </button>
            <button className="bg-[#323130] p-2 rounded-full text-white mx-3">
              <i className="fa fa-download mx-1"></i>
            </button>
          </div>
        </div>
        {/* DEscription */}
        <div className="text-white bg-[#272727] p-4 m-3 rounded-2xl">
            <p>{data.snippet.publishedAt}</p>
            <p>{data.snippet.description}</p>
        </div>

        <Comments />

      </div>

      <VideoCardAfterPlay search={data.snippet.title}/>
    </div>
  );
}
