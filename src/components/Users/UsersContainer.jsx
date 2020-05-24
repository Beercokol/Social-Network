import React from "react";
import { connect } from "react-redux";
import Users from "./UsersUI/Users";
import Loading from '../utils/Loading'
import {
  followUsersActionCreator,
  unfollowUsersActionCreator,
  setAllUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreactor,
  isFetchingActionCreator,
  isInProgressActionCreator,
} from "../../redux/action-creators";
import {getUsersThunkCreator} from '../../redux/action-creators'

class UserContainer extends React.Component {
  componentDidMount() {
  this.props.getUsersThunkCreator(this.props.currentPage , this.props.pageSize)
  }
  currentPageHandler = (page) => {
    debugger;
          this.props.setCurrentPageActionCreator(page);
      getUsersThunkCreator(page , this.props.pageSize);
  };

  render() {
    return (
      <>
      {this.props.isFetching ? <Loading /> : null }
      <Users
      {...this.props} currentPageHandler={this.currentPageHandler}

      />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    inProgress: state.usersPage.inProgress,
  };
};

   
export default connect(mapStateToProps, {followUsersActionCreator, unfollowUsersActionCreator,
  setAllUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreactor,
  isFetchingActionCreator,
  getUsersThunkCreator,
  isInProgressActionCreator,})(UserContainer);
