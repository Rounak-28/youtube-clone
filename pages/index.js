import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Bottombar from '../components/Bottombar'
import Sidebar from '../components/Sidebar'
import Videocard from '../components/Videocard'
import options from '../rapidApi/api'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7wtfhZwyrcc&part=id%2Csnippet&type=video&maxResults=50', options)
    // fetch("/api/video")
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.error(err));

    // console.log("hsjdvhcbs")
  }, [])

  

  return (
    <>
      <Sidebar />
      <div className="main lg:pl-52 xl:pl-64 min-h-[90vh] lg:min-h-screen bg-[#202124] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-y-6 lg:gap-x-0 overflow-y-scroll">
        {data?.items?.map(item => (
          <Videocard {...item} key={item.id.videoId} />
        ))}
      </div>
      <Bottombar />
    </>
  )
}
