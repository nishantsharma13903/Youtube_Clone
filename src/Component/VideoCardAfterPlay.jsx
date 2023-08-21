import React, { useEffect, useState } from "react";
import { fetchAPI, getSearchVideos } from "../services/getAPIData";
import { Link } from "react-router-dom";

export default function VideoCardAfterPlay(Props) {
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    const data = await getSearchVideos(Props.search);
    setVideos(data.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="md:w-[30%] w-full py-4">
        {videos.map((vid) => {
          return (
            <Link to={`/video/${vid.id.videoId}`} state={{vidId : vid.id.videoId,allInfo :vid}}>
            <div className="flex md:flex-row flex-col items-center m-3 box-border hover:bg-[#272727] rounded-lg cursor-pointer">
              <div className="md:w-[40%] w-[90%]">
                <img
                  src={vid.snippet.thumbnails.medium.url}
                  alt=""
                  className="md:h-[100px] h-[220px] w-[100%] rounded-lg"
                />
              </div>
              <div className="pl-3 md:w-[60%] w-[95%] mt-2 p-2">
                <div className="flex items-center">
                <img src={vid.snippet.thumbnails.medium.url} alt="" className="h-[38px] w-[38px] rounded-full md:hidden" />
                <h1 className="text-white text-lg ml-1 font-normal truncate">
                  {vid.snippet.title}
                </h1>
                </div>
                <p className="text-[grey] text-sm">{vid.snippet.channelTitle}</p>
                <p className="text-[grey] text-xs">{vid.snippet.publishTime}</p>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
