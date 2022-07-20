import  React from 'react';
import { Email } from '../shared/textfields/email';
import { CustomButton } from '../shared/buttons/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { validateEmail,validatePassword } from '../../utils/validators';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Welcome from '../../resources/images/signIn/welcome.jpg';
import PasswordSetupCode from './code';
import PasswordStrength from './setUpNewPass';




export default function ForgotPassword(){

    return(
        <Box sx={{display:'flex',width:"100%",height:"100vh"}}>
           
     {/* <PasswordRecoveryMail/> */}
   <PasswordSetupCode/>
   {/* <PasswordStrength/> */}
        
        </Box>
    )
}



function PasswordRecoveryMail(){
    const [email,setEmail] = useState({value:"",is_valid:false});
    const [password,setPassword] = useState({value:"",is_valid:false});
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


    return(<>

        <Grid container  sx={{flex:1.5,backgroundImage: `url(${Welcome})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',
        height:'100vh',justifyContent:'center',alignItems:'center'}}><div style={{ color: '#FFFFFF',
            fontFamily: 'Ageo',
            width:329,
            fontSize: 60,
            fontWeight: 'bold',
            letterSpacing: 0}}></div></Grid>
             <Grid  sx={{flex:1,flexDirection:'column',
    height:'100vh',padding:4,position:'relative'}}> 
<div style={{position:'absolute',top:'50%',left:'50%',alignSelf:'center',transform: 'translate(-50%, -50%)'}}>
    <div style={{display:'flex', color: '#343365',
  fontFamily: 'Ageo',
  fontSize: 30,
  fontWeight:'bold',marginBottom:19,justifyContent:'center'}}>Password Recovery</div>
  <div style={{color: "#444271",
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,
  lineHeight: 2,marginBottom:21}}>
  Forgot your password? No worries, we can help you!
Please enter your registered email address below and check
your inbox for instructions to set up your password.
  </div>
   <div style={{marginBottom:13}}><Email value={email.value} warn={email.is_valid} onChange={onfieldChange}/></div>
   
 
   <div style={{ marginBottom:17}}><CustomButton label="Send recovery email" onClick={onfieldChange}/></div>
 
   <div style={{display:'flex',justifyContent:'center',color: '#444271',
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,lineHeight: 1,}}>Didn’t receive the email? <span style={{color:'#0063F0'}} onClick={()=>navigate('/support')}> Click here</span> to resend</div>
 
  
   </div>
   </Grid>
   </>
    )
}
