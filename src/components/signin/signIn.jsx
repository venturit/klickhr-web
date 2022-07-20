import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { setUserDetail } from '../../redux/auth/authReducer';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Email } from '../shared/textfields/email';
import { Password } from '../shared/textfields/password';
import { CustomSwitch } from '../shared/buttons/switch';
import { CustomButton } from '../shared/buttons/button';
import GroupImage from '../../resources/images/signIn/Group.jpg';
import Welcome from '../../resources/images/signIn/welcome.jpg';
import { validateEmail,validatePassword } from '../../utils/validators';



export default function SignIn(){

    // const dispatch =  useDispatch();
    // const user_details= useSelector((store)=>{
    //     if(store.auth_data){
    //         return store.auth_data
    //     }
    //     return null;
    // });
   
   
    

    return(
        <Box sx={{display:'flex'}}>
             <Grid container  sx={{flex:1.5,backgroundImage: `url(${Welcome})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',
    height:'100vh',justifyContent:'center',alignItems:'center'}}><div style={{ color: '#FFFFFF',
        fontFamily: 'Ageo',
        width:329,
        fontSize: 60,
        fontWeight: 'bold',
        letterSpacing: 0}}>Welcome to 
    KlickHR</div></Grid>
     <Grid container   sx={{flex:1,flexDirection:'column',
    height:'100vh',padding:4,position:'relative'}}>
      
   <div style={{backgroundImage:`url(${GroupImage})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:50,width:55.6,alignSelf:'flex-end'}}></div>
   <LogInCard/>
   
   </Grid>

        </Box>
    )
}


function LogInCard(){
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


    return(
<div style={{position:'absolute',top:'50%',alignSelf:'center',transform: 'translate(0, -50%)'}}>
    <div style={{ color: '#343365',
  fontFamily: 'Ageo',
  fontSize: 25,
  fontWeight:'bold',marginBottom:31}}>Login</div>
   <div style={{marginBottom:19}}><Email value={email.value} warn={email.is_valid} onChange={onfieldChange}/></div>
   <div style={{marginBottom:25}}><Password value={password.value} warn={password.is_valid} onChange={onfieldChange}/></div>
   <div style={{display:'flex',justifyContent:'flex-end',alignItems:'baseline'}}>
    <div style={{ color: '#444271',
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,
  marginBottom:62}}>Remember me</div>
  <CustomSwitch/>
  </div>
   <div style={{ marginBottom:17}}><CustomButton onClick={onfieldChange}/></div>
   <div style={{display:'flex', color: '#2216AC',
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  fontWeight:600,
  letterSpacing: 0,
  marginBottom:17,justifyContent:'center'}}>Forgot password?</div>
   <div style={{display:'flex',justifyContent:'center',color: '#444271',
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,lineHeight: 1,}}>Problems signing in? <span style={{color:'#0063F0'}} onClick={()=>navigate('/support')}> Click here</span> for assistance</div>
 
  
   </div>
    )
}