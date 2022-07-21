import { CustomButton } from "../shared/buttons/button";
import * as React from 'react';
import { Box } from "@mui/system";
import support from "../../resources/images/support/support.jpg";


const style = { color: "#FFFFFF",
fontFamily: "Ageo",
fontSize: 30,
fontWeight: 800,
letterSpacing: -0.23};


export default function Support(){
    return(<Box style={{minHeight:'100vh',backgroundImage:`url(${support})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',alignItems:'center',}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',}}>
            <div style={{...style,marginBotttom:13}}>Need support?</div>
        <div style={{...style,fontSize:18,marginBottom:32}}>Click below to email us your question</div>
        <div><CustomButton label="support@klickhr.com" col="#00A8ED" onClick={()=>window.open('mailto:support@klickhr.com','_blank')}/></div>
        
        </div>
    </Box>)
}