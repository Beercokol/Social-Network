import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
 let  state={
    postData:props.postData,
  }
  return (
    <div>
      {state.postData.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
      ))}
    </div>
  );
};
export default Posts;
