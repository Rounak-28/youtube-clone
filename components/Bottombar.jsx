import React from 'react'
import { AiFillHome, AiOutlinePlaySquare, AiTwotoneFire } from 'react-icons/ai'
import { MdOutlineSubscriptions } from 'react-icons/md'
import SidebarOptions from './SidebarOptions'

const Bottombar = () => {
  return (
    <div className="w-full text-white h-14 bg-[#202124] sticky bottom-0 flex items-center select-none lg:hidden z-[500000]">
        <SidebarOptions text="Home" icon={<AiFillHome />} />
        <SidebarOptions text="Trending" icon={<AiTwotoneFire />} />
        <SidebarOptions text="Subscriptions" icon={<MdOutlineSubscriptions />} />
        <SidebarOptions text="Library" icon={<AiOutlinePlaySquare />} />
    </div>
  )
}

export default Bottombar