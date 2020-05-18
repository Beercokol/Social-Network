import React from 'react';
import MessageField from './MessageField/MessageField';
import MessageInput from './MessageInput/MessageInput'
import './MyDialogs.css';

const MyDialogs =(props)=>{
 
 return(
  
<div>
<MessageField messageData={props.messageData}/>
<MessageInput onMessageChange={props.onMessageChange} addMessage={props.addMessage}/ >
</div>

 )
}
export default MyDialogs;
