import React from "react";
import './PostWriter.css'
import {addPostActionCreator,updatePostActionCreator} from '../../../redux/state'



const PostWriter = (props) => {
 let postValue= React.createRef();

 let addPost=()=>{
  props.dispatch(addPostActionCreator())
 };
  
  let onPostChange=()=>{
  let text = postValue.current.value;
props.dispatch(updatePostActionCreator(text))  }
 
  return (
    <div>
      <textarea 
      ref={postValue}
      onChange={onPostChange}
        placeholder="White post" className="postInput" 
        value={props.newPostText} />
        
      <button onClick={addPost}>Add new post</button>
    </div>
  );
};
export default PostWriter;
