import React, { useEffect, useState } from 'react'
import Videocard from './Videocard';

const Suggestionbar = () => {

    const [suggData, setSuggData] = useState([])

    useEffect(() => {
        // fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=8PhdfcX9tG0&part=id%2Csnippet&type=video&maxResults=50', options)
        fetch("/api/video")
        .then(response => response.json())
        .then(response => setSuggData(response))
        .catch(err => console.error(err));
    
        // console.log("hsjdvhcbs")
      }, [])

  return (
    <div className="w-[26vw] min-h-screen flex flex-col items-center">
        {suggData?.items?.map(item =>(
            <Videocard {...item} key={item.id.videoId}/>
        ))}
    </div>
  )
}

export default Suggestionbar