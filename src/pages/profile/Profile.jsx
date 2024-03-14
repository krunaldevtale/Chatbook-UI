import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.css"
import Feed from "../../components/feed/Feed";

function Profile() {
  return (
    <>
      <div className="profile flex">
        <Sidebar />
        <div className="profileRight flex-[9]">
          <div className="profileRightTop">
            <div className="profileCover h-80 relative">
              <img
                className="profileCoverImg w-full h-64 object-cover"
                src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                className="profileUserImg w-36 h-36 rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] border-3 border-white object-right"
                src="src/assets/person/user.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo flex flex-col items-center justify-center">
              <h4 className="profileInfoName text-2xl">Krunal Devtale</h4>
              <span className="profileInfoDesc font-light">
                Hello my friends!
              </span>
            </div>
          </div>
          <div className="profileRightBottom flex">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
