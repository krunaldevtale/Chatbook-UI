import React from "react";
import { Users } from "../../../Dummydata";
import OnlineFriends from "../onlinefriends/OnlineFriends";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer flex items-center">
          <img
            src="/src/assets/person/gift.png"
            alt=""
            className="birthdayImg w-10 h-10 mr-3"
          />
          <span className="birthdayText font-light text-sm">
            <b>Angel Priya</b> and <b>23 Others Friends</b> have a birthday
            today.
          </span>
        </div>
        <img
          className="rightbarAd w-full rounded-xl mt-7 mb-7"
          src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h4 className="rightbarTitle text-lg font-semibold mb-3">
          Online Friends
        </h4>
        <ul className="rightbarFriendList p-0 m-0 list-none">
          {Users.map((u) => (
            <OnlineFriends key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle text-lg font-semibold mb-2">
          User Information
        </h4>
        <div className="rightbarInfo mb-7">
          <div className="rightbarInfoItem mb-2">
            <span className="rightbarInfoKey font-medium mr-4 text-[#555]">
              City:{" "}
            </span>
            <span className="rightbarInfoValue font-light">Nagpur</span>
          </div>
          <div className="rightbarInfoItem mb-2">
            <span className="rightbarInfoKey font-medium mr-4 text-[#555]">
              From:{" "}
            </span>
            <span className="rightbarInfoValue font-light">Nagpur</span>
          </div>
          <div className="rightbarInfoItem mb-2">
            <span className="rightbarInfoKey font-medium mr-4 text-[#555]">
              Realtionship:
            </span>
            <span className="rightbarInfoValue font-light">Single</span>
          </div>
        </div>
        <h4 className="rightbarInfoItem mb-2">User Friends</h4>
        <div className="rightbarFollowings flex flex-wrap justify-between">
          <div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
            <img
              src="/src/assets/person/fb3.png"
              alt=""
              className="rightbarFollowingImg w-24 h-24 object-cover rounded-md"
            />
            <span className="rightbarFollowingName">Shraddha</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
            <img
              src="/src/assets/person/fb4.png"
              alt=""
              className="rightbarFollowingImg  w-24 h-24 object-cover rounded-md"
            />
            <span className="rightbarFollowingName">Liladhar</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
            <img
              src="/src/assets/person/fb3.png"
              alt=""
              className="rightbarFollowingImg  w-24 h-24 object-cover rounded-md"
            />
            <span className="rightbarFollowingName">Shraddha</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
            <img
              src="/src/assets/person/fb3.png"
              alt=""
              className="rightbarFollowingImg  w-24 h-24 object-cover rounded-md"
            />
            <span className="rightbarFollowingName">Shraddha</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
            <img
              src="/src/assets/person/fb3.png"
              alt=""
              className="rightbarFollowingImg  w-24 h-24 object-cover rounded-md"
            />
            <span className="rightbarFollowingName">Shraddha</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
            <img
              src="/src/assets/person/fb3.png"
              alt=""
              className="rightbarFollowingImg  w-24 h-24 object-cover rounded-md"
            />
            <span className="rightbarFollowingName">Shraddha</span>
          </div>
          <div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
            <img
              src="/src/assets/person/fb3.png"
              alt=""
              className="rightbarFollowingImg  w-24 h-24 object-cover rounded-md"
            />
            <span className="rightbarFollowingName">Shraddha</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar flex-[3.5]">
      <div className="rightbarWrapper pt-5 pb-5">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
