import React from "react";
import SidebarOptions from "./SidebarOptions";
import {
  AiFillHome,
  AiOutlineLike,
  AiOutlinePlaySquare,
  AiTwotoneFire,
} from "react-icons/ai";
import { MdOutlineHistory, MdOutlineSubscriptions } from "react-icons/md";

const Icon = () => {
  return <div className="w-8 h-8 bg-white rounded-full"></div>;
};

const Sidebar = () => {
  return (
    <div className="hidden lg:block text-white fixed left-0">
      <div className="min-h-screen lg:w-52 xl:w-64 bg-[#202124] flex flex-col items-center space-y-3">
        <SidebarOptions text="Home" icon={<AiFillHome />} />
        <SidebarOptions text="Trending" icon={<AiTwotoneFire />} />
        <SidebarOptions
          text="Subscriptions"
          icon={<MdOutlineSubscriptions />}
        />

        <div className="w-full h-[1px] bg-[#4e4d4d]"></div>

        <SidebarOptions text="Library" icon={<AiOutlinePlaySquare />} />
        <SidebarOptions text="History" icon={<MdOutlineHistory />} />
        <SidebarOptions text="Your videos" icon={<AiOutlinePlaySquare />} />
        <SidebarOptions text="Liked videos" icon={<AiOutlineLike />} />

        <div className="w-full h-[1px] bg-[#4e4d4d]"></div>

        <p>Subscription</p>
        <SidebarOptions text="Rounak lol xd" icon={<Icon />} />
        <SidebarOptions text="Rounak lol xd" icon={<Icon />} />
      </div>
    </div>
  );
};

export default Sidebar;
