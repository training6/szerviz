import React, { useState } from 'react';
import Icon1 from '../../images/plasma-tv-oled.jpg';
import Icon2 from '../../images/orion.jpg';
import Icon3 from '../../images/controller.jpg';
import Icon4 from '../../images/delivery.png';
import './cards.css';


function Card(){
  const [isRotated, setIsRotated] = useState(false);
  const onRotate = () => setIsRotated((rotated) => !rotated);

  const [isRotated1, setIsRotated1] = useState(false);
  const onRotate1 = () => setIsRotated1((rotated1) => !rotated1);
  
  const [isRotated2, setIsRotated2] = useState(false);
  const onRotate2 = () => setIsRotated2((rotated2) => !rotated2);

  const [isRotated3, setIsRotated3] = useState(false);
  const onRotate3 = () => setIsRotated3((rotated3) => !rotated3);

  const mystyle = {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    position: 'relative',

  };
  
  return(
<div className='row'>
<div className='col'>
    <div className="cardTrans">
    <div className={`card ${isRotated ? 'rotated' : ''}`} style={mystyle}>

      <div className="front" onClick={onRotate} > 
            <img className='imgflip' src={Icon1} alt='2'/>
            <h2 className='h2flip'>TV Szerviz</h2>
          </div>

          <div className="back" onClick={onRotate} > 
            <p className='pflipb'>Gyors munkavégzés, garanciális javítás márkától függetlenül</p>
            </div>

         </div>
</div>
</div>
<div className='col'>
    <div className="cardTrans">
    <div className={`card ${isRotated1 ? 'rotated1' : ''}`} style={mystyle}>


            <div className="front" onClick={onRotate1}> 
            <img className='imgflip' src={Icon2} alt='2'/>
            <h2 className='h2flip'>Garancia</h2>
            </div>

          <div className="back" onClick={onRotate1} > 
            <p className='pflipb'>3-6 hónapig terjedő garancia a beépített alkatrészre, illetve a javított részegységre</p>
            </div>
         </div>
</div>
</div>
<div className='col'>
    <div className="cardTrans">
    <div className={`card ${isRotated2 ? 'rotated2' : ''}`} style={mystyle}>


    <div className="front" onClick={onRotate2}> 
            <img className='imgflip' src={Icon3} alt='3'/>
            <h2 className='h2flip'>Távirányítók</h2>
            </div>

            <div className="back" onClick={onRotate2}> 
            <p className='pflipb'>Távirányítók beszerzése TV készülékéhez</p>
            </div>
         </div>
</div>
</div>
<div className='col'>
    <div className="cardTrans">
    <div className={`card ${isRotated3 ? 'rotated3' : ''}`} style={mystyle}>


    <div className="front" onClick={onRotate3}> 
    <img className='imgflip' src={Icon4} alt='4'/>

            <h2 className='h2flip'>Kiszállás</h2>
         </div>
      

         <div className="back" onClick={onRotate3}> 
            <p className='pflipb'>Kiszállási díj és bevizsgálási díj a készülék típusától és a hiba fajtájától függ </p>
         </div>
         </div>
</div>
</div>
</div>
  )
}
export default Card
 