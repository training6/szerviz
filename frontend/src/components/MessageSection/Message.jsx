import React from 'react';
import Form from './Form';
import { MessageContainer, MessageH1, } from './MessageElements';


function Message() {


  
  
  return (
  <>
   <MessageContainer id="message">
    <MessageH1>Hibabejelentés</MessageH1>
    <Form />
  </MessageContainer>
  </>
 )
}

export default Message
