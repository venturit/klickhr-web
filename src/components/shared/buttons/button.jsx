import React from 'react';
import { Button } from '@mui/material';

export function CustomButton(props){
return(<div>
  
   <Button variant="contained" size="small" style={{textTransform:'none',margin:10,width:348, backgroundColor: '#0063F0'}} {...props}>Sign in</Button>
   
   </div>)
}