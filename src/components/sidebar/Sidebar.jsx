import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./sidebar.css";
import { Users } from "../../../Dummydata";
import CloseFriends from "../closefriend/CloseFriends";

function Sidebar() {
  const [show, setShow] = useState(false);

  const showList = () => {
    setShow(!show);
  };

  return (
    <div className="sidebar flex-[3] h-[calc(100vh-50px)] overflow-y-scroll sticky top-[50px] font-['bold']">
      <div className="sidebarWrapper p-5">
        <ul className="sidebarList p-0 m-0 list-none">
          <li className="sidebarListItem flex items-center mb-5">
            <RssFeed className="sidebarIcon mr-[15px]" />
            <span className="sidebarListItemText cursor-pointer">Feed</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Chat className="sidebarIcon mr-[15px]" />
            <span className="sidebarListItemText cursor-pointer">Chats</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <PlayCircleFilledOutlined className="sidebarIcon mr-[15px]" />
            <span className="sidebarListItemText cursor-pointer">Videos</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Group className="sidebarIcon mr-[15px]" />
            <span className="sidebarListItemText cursor-pointer">Groups</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Bookmark className="sidebarIcon mr-[15px]" />
            <span className="sidebarListItemText cursor-pointer">
              Bookmarks
            </span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <HelpOutline className="sidebarIcon mr-[15px]" />
            <span className="sidebarListItemText cursor-pointer">
              Questions
            </span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <WorkOutline className="sidebarIcon mr-[15px]" />
            <span className="sidebarListItemText cursor-pointer">Jobs</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Event className="sidebarIcon mr-[15px]" />
            <span className="sidebarListItemText cursor-pointer">Events</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <School className="sidebarIcon mr-[15px]" />
            <span className="sidebarListItemText cursor-pointer">Courses</span>
          </li>
          <button
            onClick={showList}
            className="sidebarButton w-[150px] border-none p-[10px] rounded-[5px] font-medium bg-black text-white active:scale-95"
          >
            Show More
          </button>
          <hr className="sidebarHr mt-5 mb-5" />

          <ul className="sidebarFriendList p-0 m-0 list-none ">
            {Users.map((u) => (
              <CloseFriends status={show} key={u.id} user={u} />
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
