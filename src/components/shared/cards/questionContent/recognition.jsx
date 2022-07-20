import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { CustomSelect } from "../../selects/select";
import DefaulTextfield from "../../textfields/default";

const Recognition = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 26, width:'100%' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#343465" }}>
            Select teammate
          </div>
          <DefaulTextfield placeholder="Type name" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 26 , width:'100%'}}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "#343465", width:'60%' }}>
            Select recognition
          </div>
          <CustomSelect placeholder={"Select"} id={"recognition"} st={{width:'100%'}} />
        </div>
      </div>
      <div>
        <FormControlLabel
          control={<Checkbox />}
          sx={{
            color: "#8280B1",
            marginLeft: "-10px",
            marginTop: "8px",
            "& .MuiFormControlLabel-label": {
              color: "#343365",
              fontSize: 12,
            },
          }}
          label="Required"
        />
      </div>
    </>
  );
};

export default Recognition;
