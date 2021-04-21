import React from 'react'
import emailjs from 'emailjs-com';
import { MessageForm, FormH1, FormLabel, FormInput, FormText, FormButton } from './FormElements';



function Form() {

  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_8ibl1ou', 'template_nh078c8', e.target, 'user_wuARvCF0fV0bgn7bkaGdh')
      .then((result) => {
        alert("Üzenetét elküldtük, hamarosan válaszolunk!")
          console.log(result.text);
      }, (error) => {
        alert("Hiba történt, kérem próbálja meg újra!")
        console.log(error.text);
    });
      e.target.reset();
  }

  return (
<MessageForm onSubmit={sendEmail}>
          <FormH1>Hibabejelentés</FormH1>
          <FormLabel htmlFor='for'>Név</FormLabel>
          <FormInput type='text' name='name' required></FormInput>
          <FormLabel htmlFor='for'>Telefon</FormLabel>
          <FormInput type='tel' name='phone' required></FormInput>
          <FormLabel htmlFor='for'>Email</FormLabel>
          <FormInput type='email' name='email' required></FormInput>
          <FormText htmlFor='for' type="text" name='messages' required></FormText>
          <FormButton type='submit' value='Hibabejelentés'></FormButton>
          </MessageForm>
  )
}
export default Form
