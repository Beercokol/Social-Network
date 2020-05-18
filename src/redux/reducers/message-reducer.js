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
       let stateCopy = {...state}
  switch(action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: stateCopy.messageData.length+1,
        message: stateCopy.newMessageText,
      };
      stateCopy.messageData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
  case UPDATE_NEW_MESSAGE: 
      stateCopy.newMessageText = action.newText;
      return stateCopy;
  
    default:
       return stateCopy;
    }
  };
 