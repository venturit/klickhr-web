import React from "react";
import { OutlinedInput } from "@mui/material";

export default function DefaulTextfield({placeholder='?', id, st}) {
  return (
    <div style={st}>
      <OutlinedInput
        size="small"
        type="text"
        id={id}
        placeholder={placeholder}
        sx={{
          paddingLeft: 1,
          paddingRight: 1,
          height: 40,
          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderColor: "#FF6969",
          },
          fontSize: 13,
          color: '#8280B1',
          boxShadow: '0 5px 13px 0 rgba(52,51,101,0.09)',
        }}
      />
    </div>
  );
}
