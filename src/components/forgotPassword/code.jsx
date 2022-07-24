import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/validators';
import { validatePassword } from '../../utils/validators';
import { Grid } from '@mui/material';
import { CustomButton } from '../shared/buttons/button';
import Inbox from '../../resources/images/forgotPassword/inboxCheck.jpg';
import MobileImage from '../../resources/images/forgotPassword/passwordRecoveryMobile.svg';
import { AuthenticateCodeField } from '../shared/textfields/customAuthenticateCode';


const primaryColor ="rgba(130,128,177,0.2)";
const secondaryColor ="#0063F0";

export default function PasswordSetupCode({setStep,mobileView}){
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

      
             <Grid  sx={{flex:1.5,flexDirection:'column',
    height:'100vh',padding:4,position:'relative'}}> 
    {mobileView && <div style={{position:'absolute',top:0,left:0,backgroundImage:`url(${MobileImage})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:164,width:'100%',color: '#FFFFFF',
        fontFamily: 'Ageo',
        fontSize: 30,
        fontWeight: 'bold',}}></div>}
<div style={{display:'flex',flexDirection:'column',position:'absolute',top:'50%',left:'50%',alignSelf:'center',transform: 'translate(-50%, -50%)'}}>
    <div style={{display:'flex', color: '#343365',
  fontFamily: 'Ageo',
  fontSize: 30,
  fontWeight:'bold',marginBottom:19,justifyContent:'center'}}>Check your inbox!</div>
  <div style={{alignSelf:'center',color: "#444271",
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,
  lineHeight: 2,marginBottom:21}}>
  We have sent you an email with a 6-digit recovery code.
  </div>
   <div style={{display:'flex',flexDirection:'column',marginBottom:57,minWidth:450}}>
    <div style={{color: "#343365",
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  fontWeight:500,
  letterSpacing: 0,
  lineHeight: 2,alignSelf:'center',marginBottom:6}}>Please enter the code below</div>
<AuthenticateCodeField onChange={handleCode}/>


   </div>
   
 
   <div style={{ marginBottom:17}}><CustomButton name="button" label="Set up new password" sx={{textTransform: "none",
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
   {!mobileView &&<Grid container  sx={{flex:1.2,backgroundImage: `url(${Inbox})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',
        height:'100vh',justifyContent:'center',alignItems:'center'}}><div style={{ color: '#FFFFFF',
            fontFamily: 'Ageo',
            width:329,
            fontSize: 60,
            fontWeight: 'bold',
            letterSpacing: 0}}></div></Grid>}
   </>
    )
}