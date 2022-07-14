import React from "react";
import { Button, IconButton } from "@mui/material";

export function CustomButton(props) {
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        style={{
          textTransform: "none",
          margin: 10,
          width: 348,
          backgroundColor: "#0063F0",
        }}
        {...props}
      >
        Sign in
      </Button>
    </div>
  );
}

export function EditRoundedButton(props) {
  return (
    <div>
      <IconButton sx={{ backgroundColor:"#2216AC", "&:hover":{backgroundColor:"#2216AC"} }} >
        <div
          style={{
            fontFamily: "Iconly-Icon",
            fontSize: 20,
            color: "white",
            padding: "4px", //I used 40px and it's massive 
          }}
        >
          
        </div>
      </IconButton>
    </div>
  );
}

export function DeleteRoundedButton(props) {
   return (
     <div>
       <IconButton sx={{ backgroundColor:"#0063F0", "&:hover":{backgroundColor:"#0063F0"} }} >
         <div
           style={{
             fontFamily: "Iconly-Icon",
             fontSize: 20,
             color: "white",
             padding: "4px", //I used 40px and it's massive 
           }}
         >
           
         </div>
       </IconButton>
     </div>
   );
 }

 export function HideRoundedButton(props) {
   return (
     <div>
       <IconButton sx={{ backgroundColor:"#00A8ED", "&:hover":{backgroundColor:"#00A8ED"} }} >
         <div
           style={{
             fontFamily: "Iconly-Icon",
             fontSize: 20,
             color: "white",
             padding: "4px", //I used 40px and it's massive 
           }}
         >
           
         </div>
       </IconButton>
     </div>
   );
 }

 export function DashedButton({text='+ Create an announcement'}){
  return (
    <div style={{
      boxSizing:"border-box",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"55px",
      border: "2px dashed #B7B5E7",
      borderRadius:10,
      cursor:"pointer",
    }} >
      <span style={{
        color:"#0063F0",
        fontFamily:"Baloo Tammudu 2",
        fontSize:14,
        fontWeight:"bold",
      }} >{`${text}`.toUpperCase()}</span>
    </div>
  )
 }