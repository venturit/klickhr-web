
import './App.css';
import React from 'react';
import { Password } from './components/shared/textfields/password';
import { Email } from './components/shared/textfields/email';
import { CustomButton } from './components/shared/buttons/button';
import { CustomSwitch } from './components/shared/buttons/switch';



function App() {
  return (<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
Components

   <div style={{display:'flex',margin:10,justifyContent:'center',alignItems:'center',width:500,flexWrap:'wrap'}}>
    
    <Email/>
    <Password/>
    <CustomButton/>
    <CustomSwitch/>
 
   
       
    
   </div>
  </div>
 
  );
}

export default App;
