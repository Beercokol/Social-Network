import React from 'react';
import "./Post.css"

const Post =(props)=>{

 return(
  <div>
  <span className="spanname">Post name</span>
  <div><span>Add like</span><span>{props.likeCount}</span>{props.message}</div>
  </div>
 )
}
export default Post;