import React from "react";
import MyFriends from './MyFriends/MyFriends';
import MyDialogs from './MyDialogs/MyDialogs';
import './Message.css';
import { BrowserRouter ,Route} from "react-router-dom";

const Message = (props) => {
  
  return (
   <BrowserRouter>
    <div className='message'>
    <MyFriends friendData={props.messagePage.friendData}/>
      <Route path='/message/1'  render={()=><MyDialogs dispatch={props.dispatch} 
        newMessageText={props.messagePage.newMassageText}  messageData={props.messagePage.messageData}/>} />

      <Route path='/message/2'  render={()=><MyDialogs dispatch={props.dispatch} 
        newMessageText={props.messagePage.newMassageText}  messageData={props.messagePage.messageData}/>} />

      <Route path='/message/3'  render={()=><MyDialogs  dispatch={props.dispatch} 
        newMessageText={props.messagePage.newMassageText} messageData={props.messagePage.messageData}/>} />
    </div>
    </BrowserRouter>
  );
};
export default Message;
