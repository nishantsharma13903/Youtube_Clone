import React from 'react'

export default function CommentsCard(Props) {
  return (
    <div className="flex mt-4">
            <div className="w-[50px]">
                <img src={Props.comm.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className='h-[40px] w-[40px] rounded-full' />
            </div>
            <div className="w-[calc(100%-60px)]">
                <div className="flex  text-white">
                    <h1>{Props.comm.snippet.channelTitle}</h1>
                    <p className='ml-3 text-[grey]'>{Props.comm.snippet.topLevelComment.snippet.publishedAt}</p>
                </div>
                <div className="text-white">
                    <p>{Props.comm.snippet.topLevelComment.snippet.textOriginal}</p>
                </div>
                <div className="flex mt-2">
                    <div className="flex mx-2 cursor-pointer">
                        <i className='fa fa-thumbs-o-up relative top-1'></i>
                        <p className='ml-2'>Like</p>
                    </div>
                    <div className="flex mx-2 cursor-pointer">
                        <i className='fa fa-thumbs-o-down relative top-1'></i>
                        <p className='ml-2'>Dislike</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
