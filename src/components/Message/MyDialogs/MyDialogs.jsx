import React from 'react';
import MessageField from './MessageField/MessageField';
import MessageInput from './MessageInput/MessageInput'
import './MyDialogs.css';

const MyDialogs =(props)=>{
 
 return(
  
<div>
<MessageField messageData={props.messageData}/>
<MessageInput/>
</div>

 )
}
export default MyDialogs;
