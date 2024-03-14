import React from "react";

function OnlineFriends({ user }) {
  return (
    <li className="rightbarFriend flex items-center mb-[15px]">
      <div className="rightbarProfileImgContainer mr-2.5 relative">
        <img
          src={user.profilePicture}
          alt=""
          className="rightbarProfileImg w-10 h-10 rounded-full object-cover"
        />
        <span className="rightbarOnline w-3 h-3 rounded-full bg-green-600 absolute top-[-2px] right-0 border-2 border-white"></span>
      </div>
      <span className="rightbarUsername font-medium">{user.username}</span>
    </li>
  );
}

export default OnlineFriends;
