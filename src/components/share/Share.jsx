import React from "react";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import "./share.css";

function Share() {
  return (
    <div className="share w-full h-[170px] rounded-[10px] shadow-[0px 0px 16px -8px rgba(0, 0, 0, 0.68)] font-['bold']">
      <div className="shareWrapper p-2.5">
        <div className="shareTop flex items-center">
          <img
            className="shareProfileImg w-[50px] h-[50px] rounded-full object-cover object-right mr-2.5"
            src="src\assets\person\user.jpg"
            alt=""
          />
          <input
            placeholder="Good Morning"
            className="shareInput border-0 focus:outline-none w-4/5"
          />
        </div>
        <hr className="shareHr m-5" />
        <div className="shareBottom flex items-center justify-between">
          <div className="shareOptions flex ml-5">
            <div className="shareOption flex items-center mr-[15px] cursor-pointer">
              <PermMedia
                htmlColor="tomato"
                className="shareIcon text-[18px] mr-[3px]"
              />
              <span className="shareOptionText text-sm font-medium">
                Photo and Video
              </span>
            </div>
            <div className="shareOption flex items-center mr-[15px] cursor-pointer">
              <Label
                className="shareIcon text-[18px] mr-[3px]"
                htmlColor="blue"
              />
              <span className="shareOptionText text-sm font-medium">Tag</span>
            </div>
            <div className="shareOption flex items-center mr-[15px] cursor-pointer">
              <Room
                className="shareIcon text-[18px] mr-[3px]"
                htmlColor="green"
              />
              <span className="shareOptionText text-sm font-medium">
                Location
              </span>
            </div>
            <div className="shareOption flex items-center mr-[15px] cursor-pointer">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shareIcon text-[18px] mr-[3px]"
              />
              <span className="shareOptionText text-sm font-medium">
                Feelings
              </span>
            </div>
          </div>
          <button className="shareButton border-0 p-2 rounded-[5px] bg-blue-600 font-medium mr-[4.5] cursor-pointer text-white">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
