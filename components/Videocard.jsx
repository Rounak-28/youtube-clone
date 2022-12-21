import Image from "next/image";
import Link from "next/link";
import React from "react";

const Videocard = (props) => {
  return (
    <Link href={`/video/${props?.id?.videoId}`}>
      <div className="w-full md:w-72 h-[320px] md:h-60 text-white">
        <div className="video w-full h-56 md:h-40 rounded-lg bg-black relative">
          {/* <img src={props?.snippet?.thumbnails?.medium?.url} alt="" /> */}
          <Image src={props?.snippet?.thumbnails?.medium?.url} alt="" fill />
          {/* <div className="duration bg-black w-10 h-5 absolute bottom-2 right-2 text-sm rounded">10:10</div> */}
        </div>
        <div className="texts flex space-x-2 h-20 items-center">
          <div className="logo w-8 h-8 bg-gray-600 rounded-full"></div>
          <div className="">
            <p className="">{props?.snippet?.title.slice(0, 30)}</p>
            <p className="text-sm text-[#b6b6b6]">
              {props?.snippet?.channelTitle}
            </p>
            {/* <div className='flex space-x-2 text-sm text-[#b6b6b6]'>
                    <p>10k views</p>
                    <p>.</p>
                    <p>{props?.snippet?.publishTime}</p>
                </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Videocard;
