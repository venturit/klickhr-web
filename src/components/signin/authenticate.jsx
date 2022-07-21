import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/validators';
import { validatePassword } from '../../utils/validators';
import { Grid } from '@mui/material';
import { CustomButton } from '../shared/buttons/button';
import Inbox from '../../resources/images/forgotPassword/inboxCheck.jpg';
import { AuthenticateCodeField } from '../shared/textfields/customAuthenticateCode';


const primaryColor ="rgba(130,128,177,0.2)";
const secondaryColor ="#0063F0";

export default function AuthenticateAccount({setStep}){
    const [email,setEmail] = useState({value:"",is_valid:false});
    const [password,setPassword] = useState({value:"",is_valid:false});
    const [otp,setOtp] = useState("");
    const [color,setColor] = useState(primaryColor)
    const navigate = useNavigate();

const onfieldChange=(event)=>{
    const value = event.target.value;
switch(event.target.name){
case 'email':
    const obj= email;
    // obj.is_valid=validateEmail(value);
    obj.value=value;
    setEmail({...obj});
    break;
case 'password':
    const ob= password;
    // ob.is_valid=validatePassword(value).all;
    ob.value=value;
    setPassword({...ob});
    break;
case 'button':
    setStep(2);
    break;
default:
    const mail=email;
    const pass = password;
    mail.is_valid=validateEmail(mail.value);
    pass.is_valid =validatePassword(pass.value);
    setEmail({...mail});
    setPassword({...pass});
    break;
}
};
const handleCode = (a)=>{
   setOtp(a)
   if(a.length===6){
    setColor(secondaryColor);
   }else{
    setColor(primaryColor);
   }
};

    return(<>

      
             <Grid  sx={{flex:1,flexDirection:'column',
    height:'100vh',padding:4,position:'relative'}}> 
<div style={{display:'flex',flexDirection:'column',position:'absolute',top:'50%',left:'50%',alignSelf:'center',transform: 'translate(-50%, -50%)',maxWidth:450}}>
    <div style={{display:'flex', color: '#343365',
  fontFamily: 'Ageo',
  fontSize: 30,
  fontWeight:'bold',marginBottom:19,alignSelf:'center',}}>Authenticate Account</div>
  <div style={{alignSelf:'center',color: "#444271",
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,
  lineHeight: 2,marginBottom:42,width:230}}>
  Please enter the code we just sent 
to your email is*****own@g****mem.org
  </div>
   <div style={{display:'flex',flexDirection:'column',marginBottom:57,minWidth:450}}>
    <div style={{color: "#343365",
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,
  lineHeight: 2,alignSelf:'center',marginBottom:6}}>Please enter the code below</div>
<AuthenticateCodeField onChange={handleCode}/>


   </div>
   
 
   <div style={{ marginBottom:17}}><CustomButton name="button" label="OK" sx={{textTransform: "none",
          color:color==="#0063F0"?"#FFFFFF":"#8280B1",
          margin: 1,
          width: '100%',
          backgroundColor:color,
          borderRadius:2,
          fontFamily: "Baloo Tammudu 2",
          fontSize: 13,'&:hover':{backgroundColor:color}}} textColor="#8280B1" col="rgba(130,128,177,0.2)" onClick={onfieldChange}/></div>
 
   <div style={{alignSelf:'center',color: '#444271',
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,lineHeight: 1,}}>Didn’t receive the email? <span style={{color:'#0063F0'}} onClick={()=>navigate('/support')}> Click here</span> to resend</div>
 
  
   </div>
   </Grid>
 
   </>
    )
}