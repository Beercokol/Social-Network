import React from 'react';
import './MyInfoWall.css';
import MyDescription from './MyDescription/MyDescription'
import Loading from '../../utils/Loading';


const MyInfoWall=(props)=>{
 if(!props.profile.photos){
  return <Loading />
 }
 
return(
  <div className='myInfo'>
  <img src={props.profile.photos.large}className="myPhoto" />
  <MyDescription  profile={props.profile}/>
  </div>
 )
 
 
}
export default MyInfoWall;