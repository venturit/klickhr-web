import  React, {useState} from 'react';
import { CustomButton } from '../shared/buttons/button';
import { useNavigate } from 'react-router-dom';
import { Password } from '../shared/textfields/password';
import StrengthIndicator from '../shared/strengthIndicator/strength';
import { validatePassword } from '../../utils/validators';
import SimpleModal from '../shared/modals/simpleModal';

const primaryColor ="rgba(130,128,177,0.2)";
const secondaryColor ="#0063F0";

export default function PasswordStrength(){
    const navigate = useNavigate();
    const [newPass,setNewPassword] =  useState("");
    const [confirmPass,setConfirmPassword] =  useState("");
    const [validator,setValidator] =  useState({});
    const [color,setColor] = useState(primaryColor)
    const onfieldChange=(event)=>{
        const value = event.target.value;
        switch(event.target.name){
          case  'new_password':
            if(confirmPass==value){
              setColor(secondaryColor);
            }else{
              setColor(primaryColor);
            }
            setNewPassword(value);
            break;
          case  'confirm_password':
            if(newPass==value){
              setColor(secondaryColor);
            }else{
              setColor(primaryColor);
            }
            setConfirmPassword(value);
            break;
        }
        setValidator(validatePassword(value));
       
  
    };

    return(
       
<div style={{width:400,position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
    
    <div style={{display:'flex', color: '#343365',
  fontFamily: 'Ageo',
  fontSize: 30,
  fontWeight:'bold',marginBottom:19,justifyContent:'center'}}>Set up a new password</div>
  <div style={{color: "#444271",
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,
  lineHeight: 2,marginBottom:21}}>
  Your password must be different than your previous password. 
Please make sure that your new password contains at least 8 digits
and contains at least one special character @ # & ! \ - * $ % .
  </div>
   <div style={{marginBottom:13}}><Password name='new_password' label='Create a new password' value={newPass} onChange={onfieldChange}/></div>
   <div style={{marginBottom:17}}><Password name='confirm_password' label='Confirm your new password' value={confirmPass} onChange={onfieldChange}/></div>
   <div><StrengthIndicator strength={validator.strength}/></div>
   <div style={{ marginTop:35,marginBottom:17,}}><CustomButton sx={{textTransform: "none",
          color:color==="#0063F0"?"#FFFFFF":"#8280B1",
          margin: 1,
          width: '100%',
          backgroundColor:color,
          borderRadius:2,
          fontFamily: "Baloo Tammudu 2",
          fontSize: 13,'&:hover':{backgroundColor:color}}} label="Change password"  onClick={onfieldChange}/></div>
 
   <div style={{display:'flex',justifyContent:'center',color: '#444271',
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,lineHeight: 1,}}>Didn’t receive the email? <span style={{color:'#0063F0'}} onClick={()=>navigate('/support')}> Click here</span> to resend</div>
 
  <SimpleModal open={false} navigate="/signin" text="Password Updated!" label="GO TO LOGIN PAGE"/>
   </div>
 
    )
}