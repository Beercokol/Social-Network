import {ADD_MESSAGE ,ADD_POST , UPDATE_NEW_MESSAGE,UPDATE_NEW_POST,FOLLOW ,UNFOLLOW ,SET_USERS} from './actions'

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
export let followUsersActionCreator = (id) =>{
  return {type: FOLLOW , userId:id}
}
export let unfollowUsersActionCreator = (id) =>{
  return {type: UNFOLLOW , userId:id}
}
export let setAllUsersActionCreator = (users)=>{
  return {type:SET_USERS , users:users};
}