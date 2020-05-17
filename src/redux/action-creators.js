import {ADD_MESSAGE ,ADD_POST , UPDATE_NEW_MESSAGE,UPDATE_NEW_POST} from './actions'

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