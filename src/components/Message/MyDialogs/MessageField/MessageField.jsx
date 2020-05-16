import React from "react";
import Message from './Message/Message'
const MessageField = (props) => {
  
  return (
    <div>
    {
      props.messageData.map(mes=> <Message message={mes.message} />)
    }
     
    </div>
  );
};
export default MessageField;
