import React from "react";
import './Users.css'


const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div className="wrapper">
          <div>
            <div>
              <img src={u.photoUrl} alt="" />
            </div>
           {u.followed? (
             <div>
             <button className='btn btn-info' onClick={()=>props.follow(u.id)}>Unfollow</button>
            </div>
           ):( <div>
           <button  onClick={()=>props.unfollow(u.id)}>Follow</button>
            </div>)}
          </div>
          <div>
            <div>
              Full name:
              <span> {u.fullName}</span>
              <p></p>
              <span>status: {u.status}</span>
            </div>
            <div>
              <span> Country: {u.location.country}</span>
              <p></p>
              <span> City: {u.location.city}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
