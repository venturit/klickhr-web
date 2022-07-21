import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";


import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import logo from "../../../resources/images/background_1.png";
import {useNavigate} from "react-router-dom";
import { CustomButton } from "../buttons/button";



function Head() {
  const navigate = useNavigate();




  const handleCloseNavMenu = (link) => {
    // setAnchorElNav(null);

     navigate(link);
  };



  return (
    <AppBar position="fixed" style={{ marginBottom: 0,backgroundColor:'#FFFFFF',padding:0 }}>
       
               <Container fullWidth="xl" sx={{margin:0,width:'inherit',marginRight:0,}} >
        <Toolbar disableGutters   sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',}}>

           
        <img src={logo} style={{height: 35,
  width: 117.32,}}/>
  <CustomButton
              
              onClick={()=>handleCloseNavMenu()}
              style={{color: "white", display: "block", fontFamily: "Baloo Tammudu 2",
              fontWeight:  800,
              color:"#FFFFFF" ,
              height:42,
              borderRadius:14,
              width:116,
              fontSize: 13,
              backgroundColor: "#0063F0",
              textTransform: 'none',  }}/>
                  </Toolbar>
      </Container>
           

    
     
    </AppBar>
  );
}

export default Head;
