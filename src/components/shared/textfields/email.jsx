import React from 'react';
import {InputLabel} from '@mui/material';
import { InputAdornment } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

export function Email(props){
return(<div> 
    <InputLabel htmlFor='email' style={{color: '#343365',
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  fontWeight: 500,
  marginBottom:4}}>Email</InputLabel>
     <OutlinedInput
    size="small" type="text"
      id="email"
     
      sx={{paddingLeft:1,paddingRight:1,'& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{border:'none',borderColor:'#FF6969'},border:'none',boxShadow:'0 5px 18px 0 rgba(52,51,101,0.16)'}}
      startAdornment={<InputAdornment position="end" ><div style={{fontFamily: 'Iconly-Icon',
      fontSize: 20,color:'#2216AC',marginRight:10}}></div></InputAdornment>}
      
      {...props}
    /></div>)
}