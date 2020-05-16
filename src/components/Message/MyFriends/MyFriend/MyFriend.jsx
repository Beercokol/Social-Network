import React from 'react';
import { NavLink } from "react-router-dom";
const MyFriend =(props)=>{
 return(
   <div>
         <img src={props.online} /><NavLink to={'/message/'+props.id}>{props.name}</NavLink>
      </div> 
 )
}
export default MyFriend;