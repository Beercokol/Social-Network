import React from "react";
import "./Content.css";
import MyInfoWall from "./MyInfoWall/MyInfoWall";
import Posts from "./Posts/Posts";
import PostWriter from "./PostWriter/PostWriter";
import Loading from "../utils/Loading";


const Content = (props) => {
return (
    <div className="content">
      <MyInfoWall  profile={props.profile}/>
      <PostWriter newPostText={props.newPostText} onPostChange={props.onPostChange} addPost={props.addPost} />
      <Posts postData={props.postData} />
    </div>
  );
  
};
export default Content;

