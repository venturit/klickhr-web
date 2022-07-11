import React from "react";
import { InputLabel } from "@mui/material";
import { InputAdornment } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { GetToday } from "../../../utils/getToday";

export default function Date(props){
    console.log(GetToday())

    return(
        <div>
        <InputLabel
          htmlFor="date"
          style={{
            color: "#343365",
            fontFamily: "Baloo Tammudu 2",
            fontSize: 13,
            fontWeight: 500,
            marginBottom: 4,
          }}
        >
            {'Date'}
        </InputLabel>
        <OutlinedInput
          size="small"
          type="text"
          id="date"
          placeholder={GetToday()}
          sx={{
            paddingLeft: 1,
            paddingRight: 1,
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "none",
              borderColor: "#FF6969",
            },
            border: "none",
            boxShadow: "0 5px 18px 0 rgba(52,51,101,0.16)",
          }}
          endAdornment={
            <InputAdornment position="start">
              <div
                onClick={()=>console.log('Hello')}
                style={{
                  fontFamily: "Iconly-Icon",
                  fontSize: 20,
                  cursor:"pointer",
                  color: "#2216AC",
                  marginRight: 10,
                }}
              >
                
              </div>
            </InputAdornment>
          }
        />
      </div>
    )
}