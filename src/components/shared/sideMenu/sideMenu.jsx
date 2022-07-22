import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import Settings from '../../../resources/sideBar/admin/Administration.svg';
import Dashboard from '../../../resources/sideBar/dashboard/dashboard.svg';
import Users from '../../../resources/sideBar/users/users.svg';
import Global from '../../../resources/sideBar/global/global.svg';
import Support from '../../../resources/sideBar/support.png';
import { textAlign } from '@mui/system';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
       
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
      '& .MuiPaper-root':{
    
     
       zIndex:theme.zIndex.drawer,
      
      
      }
    }),
  );
  
  const menu = [{ icon:Dashboard,name:'Dashboard',path:'/dashboard'}, {icon:Users,name:'Users', path:'/users'},{icon:Settings,name:'Adminstrator',path:'/admin'},{icon:Global,name:'Global Administrator',path:'/global_admin'},];

function SideMenu({open}){
    const theme = useTheme();
  const navigate = useNavigate();



  const handleDrawerClose = () => {
    // setOpen(false);
  };

    return (<Drawer variant="permanent" open={open} style={{display:'flex',flexDirection:'column',justifyContent:'flex-end',boxShadow:'0 1px 16px 0 rgba(130,128,177,0.24)'}}>
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List sx={{marginTop:10,marginBottom:20}}>
      {menu.map((text, index) => {
        return(
          <ListItemButton
            key={`text-${index}`}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            onClick={()=>navigate(text.path)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
                  <img src={text.icon}/>
             
            </ListItemIcon>
            <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 ,"& .css-10hburv-MuiTypography-root":{ color: '#343365',
  fontFamily: "Baloo Tammudu 2",
  fontSize: 13,
  fontWeight: 500}}} />
          </ListItemButton>
        )
      })}
    </List>
    
    <List sx={{position:'absolute',bottom:10,}}>
    <Divider style={{width:drawerWidth}}/>
      {[{icon:'',name:'Logout',path:'/support'}].map((text, index) => (
        <ListItemButton
          key={text}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
        
          
          }}
          onClick={()=>navigate(text.path)}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
           
          <div style={{ color: '#0063F0',
  fontFamily: 'Iconly---Bold',
  fontSize: 24}}>{text.icon}</div>
          </ListItemIcon>
          {/* <div style={ { color: '#343365',
            fontFamily: "Baloo-Tammudu-2 !important",
            fontSize: 13,
            fontWeight: 500}}>{text.name}</div> */}
          <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0,     '& .css-10hburv-MuiTypography-root':{  color: '#343365',
  fontFamily: 'Baloo Tammudu 2',
  fontSize: 13 ,
  fontWeight: 500 },}} />
        </ListItemButton>
      ))}
    </List>
  </Drawer>)
}
export default SideMenu;