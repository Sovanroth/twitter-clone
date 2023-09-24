import { FaUser } from "react-icons/fa";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import {BiLogOut} from 'react-icons/bi'
import SideBarLogo from "../SideBarLogo";
import SideBarItem from "./SideBarItem";
import SideBarTweetButton from "./SideBarTweetButton";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notification",
      href: "notification",
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
    },
  ];
  return (
    <div className=" col-span-1 h-full pr-4 md:pr-6">
      <div className=" flex flex-col items-end">
        <div className=" space-y-2 lg:w-[230px]">
          <SideBarLogo />
          {items.map((item) => (<SideBarItem key={item.href} href={item.href}
          label={item.label} icon={item.icon}/>))}
          <SideBarItem onClick={() => {}} icon={BiLogOut} label="Logout" href=" "/>
          <SideBarTweetButton/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
