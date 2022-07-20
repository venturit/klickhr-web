import React from "react";
import {
    FormControlLabel,
    FormControl,
    FormGroup,
    Checkbox,
  } from "@mui/material";

  // Note : remind to add the emojis for the status button

const SummaryStatus = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 11,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#C2DBFF",
            height: 40,
            width: "100%",
            borderRadius: 10,
            color: "#0063F0",
          }}
        >
          <span>Doing Great</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#FFEEC5",
            height: 40,
            width: "100%",
            borderRadius: 10,
            color: "white",
          }}
        >
          <span>Doing Ok</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#FFCECE",
            height: 40,
            width: "100%",
            borderRadius: 10,
            color: "#FF6969",
          }}
        >
          <span>Needs Help</span>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <FormControl>
          <FormGroup>
            <div style={{ display: "flex" }}>
              <div>
                <FormControlLabel
                  control={<Checkbox sx={{color:'#B7B5E7'}} />}
                  sx={{
                    color: "#B7B5E7",
                    "& .MuiFormControlLabel-label": {
                      color: "#B7B5E7",
                      fontSize: 12,
                    },
                  }}
                  label={<span style={{color:'#B7B5E7'}} >Required</span>}
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox sx={{color:'#B7B5E7'}} />}
                  sx={{
                    color: "#B7B5E7",
                    "& .MuiFormControlLabel-label": {
                      color: "#B7B5E7",
                      fontSize: 12,
                    },
                  }}
                  label={<span style={{color:'#B7B5E7'}} >Comment box</span>}
                />
              </div>
            </div>
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
};

export default SummaryStatus;
