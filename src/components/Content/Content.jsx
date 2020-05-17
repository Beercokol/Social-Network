import React from "react";
import "./Content.css";
import MyInfoWall from "./MyInfoWall/MyInfoWall";
import Posts from "./Posts/Posts";
import PostWriter from "./PostWriter/PostWriter";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "./../../redux/action-creators";

const Content = (props) => {
  return (
    <div className="content">
      <MyInfoWall />
      <PostWriter newPostText={props.newPostText} />
      <Posts postData={props.postData} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postData: state.profilePage.postData,
  };
};

const mapDispatchToProps =(dispatch)=>{
return{
   onPostChange:(text)=>{
dispatch(updatePostActionCreator(text))
   },
   addPost:()=>{
     dispatch(addPostActionCreator())
   } };
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);
