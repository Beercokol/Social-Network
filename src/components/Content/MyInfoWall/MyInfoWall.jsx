import React from 'react';
import './MyInfoWall.css';
import MyDescription from './MyDescription/MyDescription'


const MyInfoWall=()=>{
 return(
  <div className='myInfo'>
  <img src='https://i.pinimg.com/236x/b7/b8/96/b7b8961adbeb1dcdbe1570bdc8b508b7.jpg'className="myPhoto" />
  <MyDescription />
  </div>
 )
}
export default MyInfoWall;