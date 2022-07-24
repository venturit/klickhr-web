import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { setUserDetail } from '../../redux/auth/authReducer';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Email } from '../shared/textfields/email';
import { Password } from '../shared/textfields/password';
import { CustomSwitch } from '../shared/buttons/switch';
import { CustomButton } from '../shared/buttons/button';
import GroupImage from '../../resources/images/signIn/Group.jpg';
import MobileImage from '../../resources/images/signIn/mobileSignin.svg';
import Welcome from '../../resources/images/signIn/welcome.jpg';
import { validateEmail,validatePassword } from '../../utils/validators';



export default function SignIn(){

   
    // const user_details= useSelector((store)=>{
    //     if(store.auth_data){
    //         return store.auth_data
    //     }
    //     return null;
    // });
    const [mobileView,setMobileView] = useState(false);
   useEffect(()=>{
    if(window.innerWidth<767){
setMobileView(true);
    }
   },[]);
   useEffect(()=>{
   const handleResize =()=>{
    if(window.innerWidth<767){
        setMobileView(true);
            }else{
                setMobileView(false);
            }
          
   } 
   window.addEventListener('resize',handleResize); 
   return ()=>{
    window.removeEventListener('resize',handleResize);
   }
   },[]);
   
    

    return(
        <Box sx={{display:'flex',backgroundColor:'#F5F6FC'}}>
             {!mobileView && <Grid container  sx={{flex:1.5,backgroundImage: `url(${Welcome})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',
    height:'100vh',justifyContent:'center',alignItems:'center'}}><div style={{ color: '#FFFFFF',
        fontFamily: 'Ageo',
        width:329,
        fontSize: 60,
        fontWeight: 'bold',
        letterSpacing: 0}}>Welcome to 
    KlickHR</div></Grid> }
    {mobileView && <div style={{position:'absolute',top:0,left:0,backgroundImage:`url(${MobileImage})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:164,width:'100%',color: '#FFFFFF',
        fontFamily: 'Ageo',
        fontSize: 30,
        marginTop:48,
        fontWeight: 800,display:'flex',justifyContent:'center',alignItems:'center'}}><div style={{position:'absolute',top:'50%'}}>Welcome to KlickHR</div></div>}
   
     <Grid container   sx={{flex:1,backgroundCflexDirection:'column',
    height:'100vh',padding:4,position:'relative',width:'inherit'}}>
        {!mobileView &&<div style={{position:'absolute',top:10,right:10,backgroundImage:`url(${GroupImage})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:50,width:55.6,}}></div>}
        {mobileView &&<div style={{position:'absolute',bottom:0,left:'50%',backgroundImage:`url(${GroupImage})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:50,width:55.6,}}></div>}
       
   

   <LogInCard mobileView={mobileView}/>
   
   </Grid>

        </Box>
    )
}


function LogInCard({mobileView}){
    const [email,setEmail] = useState({value:"",is_valid:false});
    const [password,setPassword] = useState({value:"",is_valid:false});
    const navigate = useNavigate();
    const dispatch =  useDispatch();
    
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
case 'submit':
    dispatch(setUserDetail({user_id:1,is_authenticated:true,user_role:'client admin'}));
    navigate('/dashboard');

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
<div style={{display:'flex',flexDirection:'column',margin:2,position:'absolute',top:'50%',alignSelf:'center',transform: 'translate(0, -50%)'}}>
    <div style={{ color: '#343365',alignSelf:mobileView?'center':'none',
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
   <div style={{ marginBottom:17}}><CustomButton name='submit' onClick={onfieldChange}/></div>
   <div style={{display:'flex', color: '#2216AC',
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  fontWeight:600,
  letterSpacing: 0,
  marginBottom:17,justifyContent:'center'}} onClick={()=>navigate('/forgot_password')}>Forgot password?</div>
   <div style={{color: '#444271',
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  letterSpacing: 0,lineHeight: 1,}}>Problems signing in? <span style={{color:'#0063F0'}} onClick={()=>navigate('/support')}> Click here</span> for assistance</div>
 
  
   </div>
    )
}