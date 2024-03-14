import React from "react";
import Search from "@mui/icons-material/Search";
import {
  Chat,
  MarkChatUnread,
  Notifications,
  Person,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbarContainer h-[50px] w-full bg-[#222222] flex items-center sticky top-0 z-[999] font-['bold']">
      <div className="topbarLeft flex-[3]">
        <span className="logo flex items-center ml-2">
          <MarkChatUnread htmlColor="blue" />
          <h1 className="p-2 text-blue-600 text-md">
            CHAT<span className="text-green-400">BOOK</span>
          </h1>
        </span>
      </div>
      <div className="topbarCenter flex-[5]">
        <div className="searchbar w-full h-[30px] bg-white rounded-2xl flex items-center">
          <Search className="searchIcon text-[20px] ml-2.5" />
          <input
            type="text"
            className="searchInput rounded-none w-[70%] focus:outline-none"
            placeholder="Search friends name, Post or Videos"
          />
        </div>
      </div>
      <div className="topbarRight flex-[4] flex items-center justify-around text-white">
        <div className="topbarLinks mr-2.5 text-[14px] cursor-pointer">
          <Link to="home">
            <span className="topbarLinks mr-2.5">HomePage</span>
          </Link>
          <span className="topbarLinks">TimeLine</span>
        </div>
        <div className="topbarIcons flex">
          <div className="topbarIconItem mr-[15px] cursor-pointer relative">
            <Link>
              <Person />
            </Link>
            <span className="topbarIconBadge w-[15px] h-[15px] bg-red-600 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-xs">
              2
            </span>
          </div>
          <div className="topbarIconItem mr-[15px] cursor-pointer relative">
            <Chat />
            <span className="topbarIconBadge w-[15px] h-[15px] bg-red-600 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-xs">
              5
            </span>
          </div>
          <div className="topbarIconItem mr-[15px] cursor-pointer relative">
            <Notifications />
            <span className="topbarIconBadge w-[15px] h-[15px] bg-red-600 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-xs">
              10
            </span>
          </div>
        </div>
        <Link to="profile">
          <img
            src="src\assets\person\user.jpg"
            alt="userImage"
            className="topbarImg w-8 h-8 rounded-full object-cover object-right cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
