import React from "react";
import usersCss from "./Users.module.css";
import userPhoto from "../../../img/new-user.jpg";
import { NavLink } from "react-router-dom";
import { postFollow, deleteFollow } from "../../../API/api";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              onClick={() => props.currentPageHandler(p)}
              className={props.currentPage === p ? usersCss.active__page : null}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className={usersCss.wrapper}>
          <div>
            <div>
              <NavLink to={`profile/${u.id}`}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>
            </div>
            {!u.followed ? (
              <button
                disabled={props.inProgress}
                className="btn btn-info"
                onClick={() => {
                  props.isInProgress(true);
                  postFollow(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.follow(u.id);
                    }
                    props.isInProgress(false);
                  });
                }}
              >
                Follow
              </button>
            ) : (
              <button
                disabled={props.inProgress}
                onClick={() => {
                  props.isInProgress(true);
                  deleteFollow(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                     props.isInProgress(false);
                  });                
                }}
              >
                UnFollow
              </button>
            )}
          </div>
          <div>
            <div>
              Full name:
              <span> {u.name}</span>
              <p></p>
              <span>status: {u.status}</span>
            </div>
            <div>
              {/* <span> City: {u.address.city}</span>
              <p></p>
              <span> House: {u.address.street}</span> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
