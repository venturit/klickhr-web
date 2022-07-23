import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './mainHeader';
import SideMenu from '../sideMenu/sideMenu';





const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function Menu({children}) {

  const [open, setOpen] = React.useState(false);




  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     <Header setOpen={()=>setOpen(!open)}/>
     <SideMenu open={open} />
      
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <DrawerHeader />
       {children}
      </Box>
    </Box>
  );
}