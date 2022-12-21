import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment';

const Videocomments = () => {
    const [commentsData, setCommentsData] = useState([])

    useEffect(() => {
        fetch("/api/comment")
        .then((response) => response.json())
        .then((response) => setCommentsData(response))
        .catch((err) => console.error(err));
    }, [])
    
// console.log(commentsData)

  return (
    <div className="min-h-[200px] space-y-2">
        {commentsData?.items?.map(item =>{
            return (
                <SingleComment {...item} />
            )
        })}
    </div>
  )
}

export default Videocomments