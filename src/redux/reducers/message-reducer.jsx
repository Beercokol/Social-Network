 import {ADD_MESSAGE , UPDATE_NEW_MESSAGE} from '../actions'


  let newState ={ messageData: [
      { message: "first message", id: "1" },
      { message: "second message", id: "2" },
      { message: "third message", id: "3" },
    ],friendData: [
      { id: "1", name: "user1", online: true },
      { id: "1", name: "user1", online: true },
      { id: "1", name: "user1", online: false },
    ],newMessageText: "",}
  

   // reducers ( get old state and add new state!!!)
  export const messageReducer=(state = newState,action)=>{
  switch(action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messageData.length+1,
        message: state.newMessageText,
      };
      state.messageData.push(newMessage);
      state.newMessageText = "";
      return state;
  case UPDATE_NEW_MESSAGE: 
      state.newMessageText = action.newText;
      return state;
  
    default:
       return state;
    }
  };
 