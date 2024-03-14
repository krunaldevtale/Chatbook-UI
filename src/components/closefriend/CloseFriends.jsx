import React from "react";

function CloseFriends({ user, status }) {
  return (
    <li
      className="sidebarFriend flex items-center mb-[15px]"
      style={{ visibility: status ? "visible" : "hidden" }}
    >
      <img
        src={user.profilePicture}
        alt=""
        className="sidebarFriendImg w-8 h-8 rounded-full object-cover mr-[10px]"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriends;
