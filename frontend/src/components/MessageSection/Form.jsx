import React, { useState } from 'react';
import './form.css';
import emailjs from 'emailjs-com';


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
/*
  const [style, setStyle] = useState({});
  const [style1, setStyle1] = useState({});
  const [style2, setStyle2] = useState({});
  const [style3, setStyle3] = useState({});


  function myStyle(e) {
    if (e.target.value === ' ')
    setStyle ({borderBottom: '2px solid #0e153a'});
    else
    setStyle ({ border: '2px solid #0e153a', borderRadius: '5px'});
  }

  function myStyle1(e) {
    if (e.target.value === ' ')
    setStyle1 ({borderBottom: '2px solid #0e153a'});
    else
    setStyle1 ({ border: '2px solid #0e153a', borderRadius: '5px'});
  }

  function myStyle2(e) {
    if (e.target.value === ' ')
    setStyle2 ({borderBottom: '2px solid #0e153a'});
    else
    setStyle2 ({ border: '2px solid #0e153a', borderRadius: '5px'});
  }

  function myStyle3(e) {
    if (e.target.value === ' ')
    setStyle3 ({borderBottom: '2px solid #0e153a'});
    else
    setStyle3 ({ border: '2px solid #0e153a', borderRadius: '5px'});
  }
*/

  return(
    <div className="wrapper">
<form className='form' onSubmit={sendEmail}>
  <div className="rowM">
<input type="text" id="name" className="forminput"  name="name" placeholder=" " required/>
<label htmlFor="name" className="formlabel">Név</label>
</div>
<div className="rowM">
<input type="tel" id="phone" className="forminput"  name="phone" placeholder=" " required/>
<label htmlFor="phone" className="formlabel">Telefon</label>
</div>
<div className="rowM">
<input type="email" id="email" className="forminput"  name="email" placeholder=" " required />
<label htmlFor="email" className="formlabel">Email</label>
</div>
<div className="rowMT">
  <textarea htmlFor="messages" type="text" className="forminput" name="messages" placeholder="Üzenet..." required ></textarea>

</div>
<div className="rowB">
<input type="submit" className="submit" value="Hibabejelentés">
  </input>
</div>
</form>
</div>
)
}

export default Form