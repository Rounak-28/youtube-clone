
const SidebarOptions = (props) => {
  return (
    <div className="w-[80%] h-10 hover:bg-[#605f5f] rounded flex flex-col lg:flex-row items-center px-3 space-x-4 text-xl">
        {props.icon}
        <p className="text-sm">{props.text}</p>
    </div>
  )
}

export default SidebarOptions