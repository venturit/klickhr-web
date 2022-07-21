import * as React from "react";
import AppBar from "@mui/material/AppBar";
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
import logo from "../../../resources/images/background_1.png";
import { useDispatch } from "react-redux";
// import { loginUser,setPinAuthentication } from "../../../redux/auth/authReducer";



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

  return (
    <AppBar position="fixed" style={{ marginBottom: 10,backgroundColor:'#FFFFFF' }}>
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
            borderRight:0,
            borderTop:0,
            borderBottom:0,
           borderStyle:'solid',
           borderColor:'#C4C4C4',
    padding:10,
          fontFamily:'Feather-Icons',
  fontSize: 25,

  fontWeight: 500,wordBreak:'break-word',display:'flex',flexDirection:'column',justifyContent:'center'}} onClick={props.setMessager}> </span>
            <span style={{color:'#000000',
            border:1,
           borderStyle:'solid',
           borderColor:'#C4C4C4',
         
           borderTop:0,
           borderBottom:0,
           padding:10,
  fontFamily:'Feather-Icons',
  fontSize: 25,
  fontWeight: 500,wordBreak:'break-word',display:'flex',flexDirection:'column',justifyContent:'center'}}></span> */}
            <span style={{alignSelf:'center'}}>
           
              <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                {/* <span style={{color: '#C4C4C4',
  fontFamily:'Iconly---Bold',
  fontSize: 20}}></span> */}
   <span style={{color:'#000000',
  fontFamily: 'Gotham',
  fontSize: 14,
  fontWeight: 500,margin:10}}>Clare McNeil</span>
              </IconButton>
            </Tooltip></span>
            
            <Menu
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
                //  dispatch(setPinAuthentication(false));
                // dispatch(loginUser({is_logged:false}));
               
              }
                }>
                  <Typography textAlign="center" sx={{display:'flex',alignItems:'center'}}><span style={{color: '#C4C4C4',
  fontFamily: 'Feather-Icons',
  marginRight:8,
  fontSize: 20}}></span>Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
