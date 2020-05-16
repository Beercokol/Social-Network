import React from "react";
import "./MyFriends.css";
import MyFriend from "./MyFriend/MyFriend";
import online from "../../../img/online.png";

const MyFriends = (props) => {
 
  return (
    <div className="myFriends">
      <h3>My friends</h3>
      {props.friendData.map((friend) => {
          return <MyFriend id={friend.id} name={friend.name} online={online} />;
      })}
    </div>
  );
};
export default MyFriends;
