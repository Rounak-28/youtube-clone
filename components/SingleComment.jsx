import millify from 'millify'
import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

const SingleComment = (props) => {
  return (
    <div className="min-h-[96px] flex text-sm">
        <div className="profileIcon w-10 h-10 rounded-full bg-white">
            <img src={props?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="" className='rounded-full' />
        </div>
        <div className="w-full px-2 py-1">
            <div className="flex space-x-4 v">
                <div className="name">{props?.snippet?.topLevelComment?.snippet?.authorDisplayName}</div>
                <span>3 weeks ago</span>
            </div>
            <div className="m">
                <p>{props?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
            </div>
            <div className="likes flex text-2xl items-center space-x-2">
                <AiOutlineLike /><span className='text-sm pr-4'>{millify(props?.snippet?.topLevelComment?.snippet?.likeCount)}</span>
                <AiOutlineDislike />
            </div>
        </div>
    </div>
  )
}

export default SingleComment