import React from 'react'
import Sidebar from './Sidebar'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'

export default function BottomContainer() {
  return (
    <div className='flex h-[calc(100%-65px)] w-full'>
        <Sidebar />
        <VideoContainer />

    </div>
  )
}
