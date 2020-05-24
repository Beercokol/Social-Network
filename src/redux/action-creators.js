import {
  ADD_MESSAGE,
  ADD_POST,
  UPDATE_NEW_MESSAGE,
  UPDATE_NEW_POST,
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
  IS_FETCHING,
  SET_PROFILE,
  SET_AUTH_USER,
  IN_PROGRES,
} from "./actions";
import { getUsers } from "../API/api";

export let addPostActionCreator = () => {
  return { type: ADD_POST };
};
export let updatePostActionCreator = (text) => {
  return { type: UPDATE_NEW_POST, newText: text };
};
export let addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};
export let updateMessageActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE, newText: text };
};
export let followUsersActionCreator = (id) => {
  return { type: FOLLOW, userId: id };
};
export let unfollowUsersActionCreator = (id) => {
  return { type: UNFOLLOW, userId: id };
};
export let setAllUsersActionCreator = (users) => {
  return { type: SET_USERS, users: users };
};
export let setCurrentPageActionCreator = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export let setTotalCountActionCreactor = (totalCount) => {
  return { type: SET_TOTAL_COUNT, totalCount };
};
export let isFetchingActionCreator = (isFetching) => {
  return { type: IS_FETCHING, isFetching };
};
export let setProfilePageActionCreator = (profile) => {
  return { type: SET_PROFILE, profile };
};
export let setAuthUserActionCreator = (id, login, email) => {
  return { type: SET_AUTH_USER, data: { id, login, email } };
};
export let isInProgressActionCreator = (inProgress, id) => {
  return { type: IN_PROGRES, inProgress, id };
};
export let getUsersThunkCreator = (currentPage, pageSize)=>{
  return  (dispatch) => {
        dispatch(isFetchingActionCreator(true));
  getUsers(currentPage, pageSize).then((data) => {
    dispatch(isFetchingActionCreator(false));
        dispatch(setAllUsersActionCreator(data.items));
    dispatch(setTotalCountActionCreactor(data.totalCount))
  });
}
};
