import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {useNavigate} from "react-router-dom";
import logo from "../../../resources/AppBar/logo-final.svg";
import { useDispatch } from "react-redux";
import { CustomButton } from "../buttons/button";
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
// import { loginUser,setPinAuthentication } from "../../../redux/auth/authReducer";



const drawerWidth = 240;

const settings = [ {icon:"" ,value:"My Account",path:'/myaccount'}, {icon:"" ,value:"Setting",path:'/myaccount'},];

function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);

  };



  const handleCloseUserMenu = (path) => {
    navigate(path);
    setAnchorElUser(null);
    
  };
  const App = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  
  }));

  return (
    <App position="fixed" style={{display:'flex',flexDirection:'row', marginBottom: 10,backgroundColor:'#FFFFFF', }}>
      <span style={{color:'#8280B1',
            border:1,
            borderLeft:0,
            borderTop:0,
            borderBottom:0,
           borderStyle:'solid',
           borderColor:'#C4C4C4',
           fontFamily:'Feather-Icons',
           
           marginRight:5,
    padding:25,wordBreak:'break-word',display:'flex',flexDirection:'row',alignItems:'center'}} onClick={()=>props.setOpen()}> 
   </span>
      <Container maxWidth="xl" sx={{display:'flex',justifyContent:'space-between'}}>
     
        <Toolbar disableGutters sx={{display:'flex',}}>
   
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
           
           <img src={logo} style={{height: 35,
  width: 117.32,}}/>
           

          </Typography>

       

        
        </Toolbar>
        <Box style={{display:'flex',height:'inherit',}}>
        
            {/* <span style={{color:'#000000',
            border:1,
            borderLeft:0,
            borderTop:0,
            borderBottom:0,
           borderStyle:'solid',
           borderColor:'#C4C4C4',
    padding:10,wordBreak:'break-word',display:'flex',flexDirection:'row',justifyContent:'space-between'}} onClick={props.setMessager}> <CustomButton style={{width:150,height:40,marginRight:15,}}/> <CustomButton style={{width:150, height:40}}/>
   </span> */}
            {/* <span style={{color:'#000000',
            border:1,
           borderStyle:'solid',
           borderColor:'#C4C4C4',
         
           borderTop:0,
           borderBottom:0,
           padding:10,
  fontFamily:'Feather-Icons',
  fontSize: 25,
  fontWeight: 500,wordBreak:'break-word',display:'flex',flexDirection:'column',justifyContent:'center'}}></span> */}
            <span style={{alignSelf:'center',marginLeft:80}}>
           
              <Tooltip title="my account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{backgroundColor:'#0063F0',fontSize:13}} >IB</Avatar>
              
   <span style={{color:'#343365',
  fontFamily:  "Baloo Tammudu 2",
  fontSize: 13,
  fontWeight: 500,margin:10}}>Isabel Brown</span>
              </IconButton>
            </Tooltip></span>
            
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
             
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>handleCloseUserMenu(setting.path)}>
                  <Typography textAlign="center" sx={{display:'flex',alignItems:'center'}}><span style={{color: '#C4C4C4',
  fontFamily: 'Feather-Icons',
  marginRight:8,
  fontSize: 20}}>{setting.icon}</span>{setting.value}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={()=>{     
              }
                }>
                  <Typography textAlign="center" sx={{display:'flex',alignItems:'center'}}><span style={{color: '#C4C4C4',
  fontFamily: 'Feather-Icons',
  marginRight:8,
  fontSize: 20}}></span>Logout</Typography>
                </MenuItem>
            </Menu> */}
          </Box>
      </Container>
    </App>
  );
}

export default Header;
