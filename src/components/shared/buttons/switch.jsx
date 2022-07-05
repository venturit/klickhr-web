import { Switch } from '@mui/material';
import React from 'react';


export function CustomSwitch(props){
return(<div>
  
   <Switch sx={{"& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked":{color:'#2216AC'},"& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":{backgroundColor:'#8280B1'}}} />
   
   </div>)
}