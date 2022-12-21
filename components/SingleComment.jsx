import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

const SingleComment = (props) => {
  return (
    <div className="h-24 flex text-sm">
        <div className="profileIcon w-10 h-10 rounded-full bg-white"></div>
        <div className="w-full px-2 py-1">
            <div className="flex space-x-4 v">
                <div className="name">{props?.snippet?.topLevelComment?.snippet?.authorDisplayName}</div>
                <span>3 weeks ago</span>
            </div>
            <div className="m">
                <p>{props?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
            </div>
            <div className="likes flex text-2xl">
                <AiOutlineLike />
                <AiOutlineDislike />
            </div>
        </div>
    </div>
  )
}

export default SingleComment