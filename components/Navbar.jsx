import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-screen h-16 text-white bg-[#202124] flex items-center justify-between px-6 sticky top-0 z-[50000]">
      <Link href="/"><div className="logo lg:mx-5 text-xs lg:text-lg">RK-Tube</div></Link>
      <div className="input w-[65%] lg:w-[45%] h-9 bg-[#2f2e2e] rounded relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-9 bg-[#2f2e2e] rounded border-[1px] border-[#7b7a7a] indent-5 outline-none"
          />
        <AiOutlineSearch
         className="absolute right-0 rounded-r top-[1px] text-2xl bg-[#615f5f] h-[35px] w-12"
         />
      </div>
      <div className="rightSide flex items-center space-x-7 text-xl">
        <BiVideoPlus className="hidden lg:block"/>
        <BsBell className="hidden lg:block"/>
        <div className="user w-8 h-8 bg-red-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
