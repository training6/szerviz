import React from 'react'
import { MessageContainer, FormWrap, FormContent } from './MessageElements';
import Form from './Form';

function Message() {

  return (
    <>
    <MessageContainer id='message'>
      <FormWrap>
        <FormContent>
          <Form />
          </FormContent>
      </FormWrap>
    </MessageContainer>
      
    </>
  )
}

export default Message
