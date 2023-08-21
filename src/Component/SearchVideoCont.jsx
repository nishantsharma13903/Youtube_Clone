import React from 'react'
import Sidebar from './Sidebar'
import SearchCard from './SearchCard'
import { Link } from 'react-router-dom'

export default function SearchVideoCont(Props) {
  return (
    <div className='flex h-[calc(100%-65px)] w-full'>
        <Sidebar />
        <div className="md:w-[82%] w-full h-[100%] box-border pt-2 md:px-12 px-4 overflow-y-scroll scrollbar">
          {
            Props.searchData.map((vid) => {
              return (
              <Link to={`/video/${vid.id.videoId}`} state={{vidId : vid.id.videoId,allInfo :vid}}>
                <SearchCard video = {vid} />
              </Link>
            )})
          }
        </div>
    </div>
  )
}
