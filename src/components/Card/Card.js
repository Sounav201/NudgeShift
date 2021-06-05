import React, { useState } from 'react'
import './Card.css'

const Card = ({experience,emphasis,name,image,position}) => {
    
  const emojipicker = ['star' , 'smiley' , 'fire' , 'heart' , 'beer', 'hundred' , 'thumbsup']
  

  //const [emoji, setEmoji] = useState("#fff")

  let mouse = event => {

    
      const el = event.target
      console.log(el.classList);
      const randomIndex = Math.floor(Math.random() * emojipicker.length);
      const item = emojipicker[randomIndex]
      el.classList.add(item)
      
  }


  

 /* const EmojiGenerate = () =>{
    let areas = document.querySelectorAll('.sn-student-quote');
    
    areas.forEach(area => {
      const randomIndex = Math.floor(Math.random() * emojipicker.length);
      const item = emojipicker[randomIndex]
      console.log(item)
      console.log(typeof(item));
      area.classList.add(item);
      
    });
  }
  */
 
  return (
        
       <div className="sn-student-quote item "  onMouseEnter={(event) => mouse(event)}   >
         <p> {experience} <em>{emphasis}</em></p>
         <div className="sn-student">
           <div className="sn-student-avatar"><img src={image} alt="avatar"></img></div>
           <div className="sn-student-info">
             <p className="sn-quote-name">{name}</p>
             <p className="sn-quote-title">{position}</p>
           </div>
         </div>
         
       </div>
        
    )
}

export default Card
