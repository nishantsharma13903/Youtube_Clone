import React, { useEffect, useState } from "react"
import VideoCard from "./VideoCard";
import {fetchAPI} from '../services/getAPIData';
import { Link } from "react-router-dom";

export default function VideoContainer() {

  const [videos , setVideos] = useState([]);
  
  const getData = async () => {
    const data = await fetchAPI();
    setVideos(data.items);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="w-[100%] md:w-[82%] h-[100%] pt-2">

      <div className="h-[60px] mt-1 flex items-center overflow-x-scroll scrollbar-none">
        <button className="h-[33px] px-4 bg-white text-black rounded-md mx-3 whitespace-nowrap">All</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">Music</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">Gaming</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">Trailers</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">Computer Science</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">Full Stack</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">Web Development</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">HTML</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">CSS</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">React Framework</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">JS Framework</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">Fun Fact</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">Animals</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">Food</button>
        <button className="h-[33px] px-4 bg-[#272727] text-white rounded-md mx-2 whitespace-nowrap">Fashion</button>
      </div>

      <div className="h-[calc(100%-90px)] w-[100%] mt-2 p-3  flex justify-evenly items-center flex-wrap overflow-y-scroll scrollbar">
          
          {
            videos.map((vid)=>{
              return <VideoCard video={vid} />
            })
          }
          
      </div>

    </div>
  );
}
