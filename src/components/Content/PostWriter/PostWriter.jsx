import React from "react";
import './PostWriter.css'



const PostWriter = (props) => {
 let postValue= React.createRef();
 //let text = postValue.current.value;
 let state = {
   newPostText:props.newPostText,
 }
  return (
    <div>
      <textarea 
      ref={postValue}
      onChange={props.onPostChange}
        placeholder="White post" className="postInput" 
        value={state.newPostText} />
        
      <button onClick={props.addPost}>Add new post</button>
    </div>
  );
};
export default PostWriter;
