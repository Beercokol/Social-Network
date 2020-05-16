import React from 'react';
 import './Content.css';
 import MyInfoWall from './MyInfoWall/MyInfoWall';
 import Posts from './Posts/Posts';
 import PostWriter from './PostWriter/PostWriter'

 const Content=(props)=>{
return(
  <div className='content'>
  <MyInfoWall />
        <PostWriter dispatch={props.dispatch} 
        newPostText={props.profilePage.newPostText}
         />
         <Posts  postData={props.profilePage.postData} />
       </div>
)
 }
 export default Content;