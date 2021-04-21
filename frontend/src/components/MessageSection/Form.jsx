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

  const [style, setStyle] = useState({});
  const [style1, setStyle1] = useState({});
  const [style2, setStyle2] = useState({});
  const [style3, setStyle3] = useState({});


  function myStyle(e) {
    if (e.target.value === '')
    setStyle ({borderBottom: '2px solid #0e153a'});
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


  return(
    <div className="wrapper">
<form className='form' onSubmit={sendEmail}>
  <div className="rowM">
<input style={style} onChange={myStyle} type="text" id="name" className="form__input" autoComplete='off' name="name" placeholder=" " required/>
<label htmlFor="name" className="form__label">Név</label>
</div>
<div className="rowM">
<input style={style1} onChange={myStyle1} type="tel" id="phone" className="form__input" autoComplete='off' name="phone" placeholder=" " required/>
<label htmlFor="phone" className="form__label">Telefon</label>
</div>
<div className="rowM">
<input style={style2} onChange={myStyle2} type="email" id="email" className="form__input" autoComplete='off' name="email" placeholder=" " required />
<label htmlFor="email" className="form__label">Email</label>
</div>
<div className="rowMT">
  <textarea style={style3} onChange={myStyle3} htmlFor="messages" type="text" className="form__input" autoComplete='off' name="messages" placeholder="Üzenet..." required ></textarea>

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