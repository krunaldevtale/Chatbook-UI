import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../../Dummydata";

function Post({ post }) {
  const [heart, setHeart] = useState(post.heart);
  const [isheart, setisHeart] = useState(false);

  const [like, setLike] = useState(post.like);
  const [isliked, setisLiked] = useState(false);

  const heartHandler = () => {
    setHeart(isheart ? heart - 1 : heart + 1);
    setisHeart(!isheart);
  };

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setisLiked(!isliked);
  };

  return (
    <div className="post w-full rounded-[10px]  mt-7 mb-7 font-['bold'] ">
      <div className="postWrapper p-[10px]">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center">
            <img
              className="postProfileImg w-8 h-8 rounded-full object-cover object-right"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUserName text-[15px] font-medium ml-3 mr-2">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate text-[12px] font-['light']">
              {post.date}
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter mt-5 mb-5">
          <span className="postText"> {post?.desc}</span>
          <img
            src={post.photo}
            alt=""
            className="postImg mt-5 w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="postBottom flex items-center justify-between">
          <div className="postBottomLeft flex items-center">
            <img
              className="likeIcon w-6 h-6 mr-1 cursor-pointer"
              src="src\assets\person\like.png"
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter text-[15px] mr-2">{like}</span>
            <img
              className="likeIcon w-6 h-6 mr-1 cursor-pointer"
              src="src\assets\person\heart.png"
              alt=""
              onClick={heartHandler}
            />
            <span className="postLikeCounter text-[15px] ">{heart}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText cursor-pointer border-dashed border-b-2 border-indigo-600 text-[15px]">
              {post.comment} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
