import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
  return (
    <div>
      {props.postData.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
      ))}
    </div>
  );
};
export default Posts;
