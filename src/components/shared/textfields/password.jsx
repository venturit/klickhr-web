import React from "react";
import { InputLabel } from "@mui/material";
import { InputAdornment } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

export function Password({label='Password',name="password",warn=false,value,onChange}) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div>
      <InputLabel
        htmlFor="password"
        style={{
          color: "#343365",
          fontFamily: "Baloo Tammudu 2",
          fontSize: 13,
          fontWeight: 500,
          marginBottom: 4,
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
      name={name}
        size="small"
        type={showPassword ? "text" : "password"}
        id="password"
        fullWidth
        value={value}
        onChange={onChange}
        sx={{
          paddingLeft: 1,
          paddingRight: 1,
          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            border:warn?"solid": "none",
            borderWidth:1,
            borderColor: "#FF6969",
            
          },
        
          backgroundColor:'#FFFFFF',
          boxShadow: "0 5px 18px 0 rgba(52,51,101,0.16)",
          color: "#8280B1",
          fontFamily: "Baloo Tammudu 2",
          fontSize: 13,
          letterSpacing: 0
        }}
        startAdornment={
          <InputAdornment position="end">
            <div
              style={{
                fontFamily: "Iconly-Icon",
                fontSize: 20,
                color:warn?"#FF6969": "#2216AC",
                marginRight: 10,
              }}
            >
              
            </div>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <div
              style={{
                fontFamily: "Feather-Icons",
                fontSize: 20,
                color: "#2216AC",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
            { showPassword?'':''}
            </div>
          </InputAdornment>
        }
        
      />
      {warn && <div style={{display:'flex',margin:2,justifyContent:'flex-end',color:'#FF6969',fontFamily: "Baloo Tammudu 2",
  fontSize: 11,
  letterSpacing: 0,}}>Please enter a valid password</div>}
    </div>
  );
}
