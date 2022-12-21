import React, { useEffect, useState } from 'react'
import options from '../rapidApi/api';
import SingleComment from './SingleComment';

const Videocomments = (props) => {
    const [commentsData, setCommentsData] = useState([])

    useEffect(() => {
        // fetch("/api/comment")
        fetch(`https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${props.slug}&maxResults=100`, options)
        .then((response) => response.json())
        .then((response) => setCommentsData(response))
        .catch((err) => console.error(err));
    }, [])
    
// console.log(commentsData)

  return (
    <div className="min-h-[200px] space-y-2 hidden lg:block">
        {commentsData?.items?.map(item =>{
            return (
                <SingleComment {...item} />
            )
        })}
    </div>
  )
}

export default Videocomments