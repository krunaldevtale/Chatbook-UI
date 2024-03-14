import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../../Dummydata";


function Feed() {
  return (
    <div className="feed flex-[5.5]">
      <div className="feedWrapper p-5">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
