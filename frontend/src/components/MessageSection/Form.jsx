import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { MessageForm, FormLabel, FormInput, RowM, RowMT, RowB, FormButton } from './FormElements';



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

  const [style, setStyle] = useState({});
  const [style1, setStyle1] = useState({});
  const [style2, setStyle2] = useState({});
  const [style3, setStyle3] = useState({});


  function myStyle(e) {
    if (e.target.value === '')
    setStyle ({border: 'none', borderBottom: '2px solid #0e153a'});
    else
    setStyle ({ border: '2px solid #0e153a', borderRadius: '5px'});
  }

  function myStyle1(e) {
    if (e.target.value === '')
    setStyle1 ({borderBottom: '2px solid #0e153a'});
    else
    setStyle1 ({ border: '2px solid #0e153a', borderRadius: '5px'});
  }

  function myStyle2(e) {
    if (e.target.value === '')
    setStyle2 ({borderBottom: '2px solid #0e153a'});
    else
    setStyle2 ({ border: '2px solid #0e153a', borderRadius: '5px'});
  }

  function myStyle3(e) {
    if (e.target.value === '')
    setStyle3 ({borderBottom: '2px solid #0e153a'});
    else
    setStyle3 ({ border: '2px solid #0e153a', borderRadius: '5px'});
  }

  return (
    <MessageForm onSubmit={sendEmail}>
      <RowM>
        <FormInput style={style} onChange={myStyle} type='text' name='name' placeholder="" required></FormInput>
        <FormLabel htmlFor='name'>Név</FormLabel>
      </RowM>
      <RowM>
        <FormInput style={style1} onChange={myStyle1} type='tel' name='phone' placeholder="" required></FormInput>
        <FormLabel htmlFor='phone'>Telefon</FormLabel>
      </RowM>
      <RowM> 
        <FormInput style={style2} onChange={myStyle2} type='email' name='email' required></FormInput>   
        <FormLabel htmlFor='email'>Email</FormLabel>
      </RowM>
      <RowMT>    
        <FormInput style={style3} onChange={myStyle3} htmlFor='messages' type="text" name='messages' placeholder="Üzenet..." required></FormInput>
      </RowMT>  
      <RowB>
        <FormButton type='submit' value='Hibabejelentés'></FormButton>
      </RowB>     
    </MessageForm>
  )
}
export default Form
