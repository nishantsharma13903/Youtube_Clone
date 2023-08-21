import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function VideoCard(Props) {

  const navigate = useNavigate();

  const playVideo = ()=>{
    navigate(`/video/${Props.video.id.videoId}`, {state : {vidId : Props.video.id.videoId,allInfo : Props.video}});
  }

  return (
    <>
    <div className="w-[90%] md:w-[270px] h-auto m-2 rounded-md overflow-hidden hover:scale-[1.05] transition-[transform] cursor-pointer" onClick={playVideo}>
          <img src={Props.video.snippet.thumbnails.high.url} alt="" className="w-full h-[220px]"/>
          <div className="p-2 pt-0">
            <div className="text-white flex">
              <img src={Props.video.snippet.thumbnails.medium.url} alt="" className="h-[40px] w-[40px] rounded-full"/>
              <h1 className="p-3 pb-0 text-lg truncate">{Props.video.snippet.title}</h1>
            </div>
            <div className="text-white">
              <p className="text-sm ml-14 text-slate-300">{Props.video.snippet.channelTitle}</p>
              <p className="text-sm ml-14 text-slate-300">{Props.video.snippet.publishTime}</p>
            </div>
          </div>
        </div>
    </>
  )
}
