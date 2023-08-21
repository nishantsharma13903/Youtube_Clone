import React from 'react'

export default function SearchCard(Props) {
  return (
    <div className='flex md:flex-row flex-col m-3 rounded-lg hover:bg-[#272727] cursor-pointer'>
        <div className="md:w-[360px] w-full">
        <img src={Props.video.snippet.thumbnails.high.url} alt="" className='h-[250px] md:w-[360px] w-full' />
        </div>
        <div className="md:w-[calc(100%-400px)] w-full box-border md:px-8 px-4 py-2 text-white">
            <h1 className='text-xl mt-2 font-normal'>{Props.video.snippet.title}</h1>
            <p className='text-sm text-[grey]'>{Props.video.snippet.publishedAt}</p>
            <div className="flex items-center mt-6">
                <img src="https://th.bing.com/th/id/OIP.xddyM5Z5llwe5nz0xAnhvAHaD_?w=329&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='h-[35px] w-[35px] rounded-full'/>
                <p className='ml-4 text-[grey] text-sm'>{Props.video.snippet.channelTitle}</p>
            </div>
            <p className='mt-6 truncate text-sm text-[grey] hidden md:block'>{Props.video.snippet.description}</p>
        </div>
    </div>
  )
}
