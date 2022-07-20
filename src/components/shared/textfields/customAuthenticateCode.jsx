import React from 'react';


export function AuthenticateCodeField(){
 const style={width:40,height:40,border:'solid',borderColor:'#BABABA',borderRadius:4,backgroundColor:'#FFFFFF'};

    function  handleChange( e) {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
    
        // Check if they hit the max character length
        if (value.length >= maxLength) {
          // Check if it's not the last input field
          if (parseInt(fieldIndex, 10) < 6) {
            // Get the next input field
            const nextSibling = document.querySelector(
              `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
            );
    
            // If found, focus the next field
            if (nextSibling !== null) {
              nextSibling.focus();
            }
          }
        }else if(value.length ===0){
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) - 1}]`
          );
           // If found, focus the next field
           if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
    
    
      }


return(<div style={{display:'flex',width:'70%',justifyContent:'space-evenly'}}>

    <input style={style}
        type="text"
        name="ssn-1"
        onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }}}
        maxLength={1}
        onChange={handleChange} />
      <input
      style={style}
        type="text"
        name="ssn-2"
        onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }}}
        maxLength={1}
        onChange={handleChange} />
      <input
      style={style}
        type="text"
        name="ssn-3"
        onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }}}
        maxLength={1}
        onChange={handleChange} />
         <input
      style={style}
        type="text"
        name="ssn-4"
        onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }}}
        maxLength={1}
        onChange={handleChange} />
         <input
      style={style}
        type="text"
        name="ssn-5"
        onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }}}
        maxLength={1}
        onChange={handleChange} />
         <input
      style={style}
        type="text"
        name="ssn-6"
        onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }}}
        maxLength={1}
        onChange={handleChange} />


</div>)

}
