import React,{useState} from 'react';


export function AuthenticateCodeField({onChange,warn=false}){
    const [code,setCode] = useState([]);
 const style={width:51,height:40,textAlign:'center',border:warn?'solid':'none',borderColor:'#FF6969',borderWidth:2,boxShadow:'0 5px 18px 0 rgba(52,51,101,0.16)',borderRadius:4,backgroundColor:'#FFFFFF'};

    function  handleChange( e) {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
        let array = code;
        // Check if they hit the max character length
        if (value.length >= maxLength) {
          // Check if it's not the last input field
          array.push(value);
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
            array.pop(value);
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) - 1}]`
          );
          
           // If found, focus the next field
           if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
    setCode([...array]);
    onChange(array.join(""))
      }


return(<div style={{display:'flex',flexDirection:'column'}}>
<div style={{display:'flex',justifyContent:'space-evenly'}}>

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


</div>
{warn && <div style={{display:'flex',flexDirection:'column'}}><div style={{alignSelf:'center',color: "#FF6969",
  fontFamily: "Baloo Tammudu 2",
  fontSize: 11,
  letterSpacing: 0,
  lineHeight: 2,marginTop:15}}>The number entered does not match the most recent number sent to your email. 
</div>
<div style={{alignSelf:'center',color: "#FF6969",
  fontFamily: "Baloo Tammudu 2",
  fontSize: 11,
  letterSpacing: 0,
  lineHeight: 2,}}>
Please try again.
</div>
</div>}
</div>
)

}
