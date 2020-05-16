import React from "react";
import {updateMessageActionCreator ,addMessageActionCreator} from '../../../../redux/state'
const MessageInput = (props) => {
 let  mesText = React.createRef()
  let addMessage=()=>{
  props.dispatch(addMessageActionCreator())
 };
  
  let onMessageChange=()=>{
  let text = mesText.current.value;
props.dispatch(updateMessageActionCreator(text))  }
  return (
    <div>
      <textarea ref={mesText} type="text" placeholder="your message"  value={props.newMessageText} onChange={onMessageChange}/>
      <button onClick={addMessage}>Add message</button>
    </div>
  );
};
export default MessageInput;
