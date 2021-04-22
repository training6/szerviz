import React from 'react'
import { MessageContainer, MessageH1 } from './MessageElements';
import Form from './Form';

function Message() {

  return (
    <>
    <MessageContainer id='message'>
    <MessageH1>Hibabejelentés</MessageH1>
          <Form />
    </MessageContainer>
      
    </>
  )
}

export default Message
