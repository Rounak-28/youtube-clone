import React, { useEffect, useState } from 'react'
import options from '../rapidApi/api';
import Videocard from './Videocard';

const Suggestionbar = (props) => {

    const [suggData, setSuggData] = useState([])

    useEffect(() => {
        fetch(`https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${props?.slug}&part=id%2Csnippet&type=video&maxResults=50`, options)
        // fetch("/api/video")
        .then(response => response.json())
        .then(response => setSuggData(response))
        .catch(err => console.error(err));
    
        // console.log("hsjdvhcbs")
      }, [])

  return (
    <div className="w-full mt-5 lg:mt-0 lg:w-[26vw] min-h-screen flex flex-col items-center">
        {suggData?.items?.map(item =>(
            <Videocard {...item} key={item.id.videoId}/>
        ))}
    </div>
  )
}

export default Suggestionbar