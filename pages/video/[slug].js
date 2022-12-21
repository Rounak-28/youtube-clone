import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Suggestionbar from "../../components/Suggestionbar";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import millify from "millify";
import { format,formatDistance } from 'date-fns'
import Videocomments from "../../components/Videocomments";
import options from "../../rapidApi/api";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [singleVidData, setSingleVidData] = useState([]);

  useEffect(() => {
    // fetch("/api/singlevideo")
    fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${slug}`, options)
      .then((response) => response.json())
      .then((response) => setSingleVidData(response))
      .catch((err) => console.error(err));
  }, []);

  let dataSnippet = singleVidData?.items?.find(x=>x!==undefined)?.snippet
  let dataStats = singleVidData?.items?.find(x=>x!==undefined)?.statistics

  let title = dataSnippet?.title
  let viewCnt = dataStats?.viewCount
  let releaseDate = dataSnippet?.publishedAt?.substring(0, 10)
  let channelTitle = dataSnippet?.channelTitle
  let likeCount = dataStats?.likeCount
  const [desc, setDesc] = useState("")
  const [descClosed, setDescClosed] = useState(true)

  useEffect(() => {
    setDesc(dataSnippet?.description?.substring(0, 150) + "...")

  }, [singleVidData?.items])
  

  const expandDesc = ()=> {
    setDesc(dataSnippet?.description)
    setDescClosed(false)
  }

  // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  // This is to remove a goddamn hydration error
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||

console.log(releaseDate)
console.log(typeof releaseDate)
  return (
    <>
      <div className="bg-[#202124] w-screen min-h-screen px-6 lg:px-16 pt-4 flex flex-col lg:flex-row space-x-[2vw] text-white items-center lg:items-start overflow-hidden">
        <div className="main space-y-3">
          <div className="player bg-black w-full h-[27vh] lg:w-[62vw] md:h-[40vh] lg:h-[70vh]">
            {hasWindow && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${slug}`}
                width="100%"
                height="100%"
              />
            )}
          </div>
          <div className="title text-xl my-2">
            {title}
          </div>
          <div className="channel lg:h-14 my-2 flex space-y-2 lg:space-y-0 lg:items-center justify-between max-w-[400px] lg:max-w-none overflow-hidden flex-col lg:flex-row w-[100vw] lg:w-full px-2 lg:px-0">
            <div className="left flex items-center space-x-4 text-lg">
              <div className="logo w-10 h-10 rounded-full bg-white"></div>
              <div>{channelTitle}</div>
            </div>
            <div className="right flex space-x-2">
              <div className="w-28 h-10 bg-[#3c3b3b] rounded flex items-center justify-between px-2">
                <span>{millify(viewCnt)} views</span>
              </div>
              <div className="likeDislike w-36 h-10 bg-[#3c3b3b] rounded flex items-center text-2xl justify-between px-2">
                <div className="flex space-x-1">
                  <AiOutlineLike />
                  <span className="text-base">
                    {millify(likeCount)}
                  </span>
                </div>
                <AiOutlineDislike />
              </div>
            </div>
          </div>
          <div className={`description min-h-[96px] px-2 rounded space-y-3 bg-[#3c3b3b] ${descClosed && "hover:bg-[#5c5b5b]"}`}>
            <div className="flex space-x-2">
              <p>{millify(viewCnt)} views</p>
              <p>{singleVidData?.items && formatDistance(new Date(releaseDate), new Date())} ago</p>
            </div>
            <p className="whitespace-pre-line">{desc}</p>
            <button className="font-semibold" onClick={expandDesc}>{descClosed && "Show more"}</button>
          </div>
          <Videocomments slug={slug} />
        </div>
        {/* <div className=" h-12 bg-black w-[100vw]"></div> */}
        <Suggestionbar slug={slug}/>
      </div>
    </>
  );
};

export default Post;
