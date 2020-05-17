import React from "react";
const MessageInput = (props) => {
 let  mesText = React.createRef()
  return (
    <div>
      <textarea ref={mesText} type="text" placeholder="your message"  value={props.newMessageText} onChange={props.onMessageChange}/>
      <button onClick={props.addMessage}>Add message</button>
    </div>
  );
};
export default MessageInput;
