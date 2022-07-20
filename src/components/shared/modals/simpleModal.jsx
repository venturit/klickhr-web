import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { CustomButton } from "../buttons/button";
import { useNavigate } from "react-router-dom";

const buttonColor='#FF0066';
const buttonWidth='20vh';
const style = {
 position:'absolute',
 top:10,
 left:10,
  width: '150vh',
  // backgroundColor:'red',
  margin:'10%',
  marginRight:'10%',
  borderRadius:100,
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(10),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, paddingTop: 4,paddingBottom:0, }} {...other}>
      {children}
      {/* {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null} */}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function SimpleModal(props) {
 const navigate =  useNavigate();
  const handleClose = () => {
    props.handleChange(false);
  };

  return (
<div>
      <BootstrapDialog
        onClose={handleClose}
   
       maxWidth={['maxWidth']>('sm')}
       
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle
          //   id="customized-dialog-title"
          style={{
            display: "flex",
            fontFamily: "Ageo",
            color: "#343365",
            fontWeight: 800,
            lineHeight:1.1,
            fontSize: 20,
            justifyContent:'center'
          }}
          onClose={handleClose}
        >
            <div style={{display:'flex',width:"auto",marginTop:20,marginBottom:1,flexDirection:'column'}}>
              <div>{props.text}</div>
              
             
</div>
<div>{props.additionalText}</div>


        </BootstrapDialogTitle>
        <div style={{display:'flex',alignSelf:'center',marginTop:20,marginBottom:10}}> 

 <CustomButton sx={{backgroundColor:'#0063F0',}} label={props.label} onClick={()=>navigate(props.navigate)}/>
</div>
       
      </BootstrapDialog>
       
    </div>
  );
}
