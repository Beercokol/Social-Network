import {contentReducer} from './reducers/content-reducer';
import {messageReducer} from './reducers/message-reducer';
import {ADD_MESSAGE,UPDATE_NEW_MESSAGE} from './reducers/message-reducer';
import {ADD_POST,UPDATE_NEW_POST} from './reducers/content-reducer';

let store = {
  _state: {
    messagePage:{ messageData: [
      { message: "first message", id: "1" },
      { message: "second message", id: "2" },
      { message: "third message", id: "3" },
    ],friendData: [
      { id: "1", name: "user1", online: true },
      { id: "1", name: "user1", online: true },
      { id: "1", name: "user1", online: false },
    ],newMessageText: "",},
    profilePage:{
 newPostText: "fff",
    postData: [
      { id: "1", message: "Hi,good day", likeCount: "6" },
      { id: "2", message: "This is my second post", likeCount: "12" },
      { id: "3", message: "This is my third post", likeCount: "38" },
    ],
    }
  },
  getState() {
    return this._state;
  },

  _callSubr() {
    console.log("1");
  },

  subscribe(observer) {
    this._callSubr = observer;
  },
   dispatch(action) {
   this._state.profilePage = contentReducer( this._state.profilePage,action);
   this._state.messagePage = messageReducer( this._state.messagePage,action);

   this._callSubr(this._state);
 },
}

 // actions-generators
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

window.store = store;

export default store;
