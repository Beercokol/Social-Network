import React from "react";
import { connect } from "react-redux";
import Users from "./UsersUI/Users";
import {
  followUsersActionCreator,
  unfollowUsersActionCreator,
  setAllUsersActionCreator,
} from "../../redux/action-creators";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followUsersActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowUsersActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setAllUsersActionCreator(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
