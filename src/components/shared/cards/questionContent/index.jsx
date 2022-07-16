import React from "react";
import { FormControlLabel, InputLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";

export const QuestionContentType = ({ questionType }) => {
  if (questionType === "Checkbox") {
    return (
      <div>
        <InputLabel
          htmlFor="question"
          style={{
            color: "#343365",
            fontSize: 13,
            fontWeight: 500,
            marginBottom: 4,
          }}
        >
          Question
        </InputLabel>
        <OutlinedInput
          size="small"
          type="text"
          id="question"
          fullWidth
          placeholder="Type a question here"
          sx={{
            paddingLeft: 1,
            paddingRight: 1,
            fontSize: 13,
            color: "#8280B1",
            background: "#F5F6FC",
            fontFamily: "Baloo Tammudu 2",
            borderRadius: "4px",
            height: 40,
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "none",
              borderColor: "#FF6969",
            },
            border: "none",
          }}
        />
      </div>
    );
  } else if (questionType === "Radio") {
    return <div>{questionType}</div>;
  } else if (questionType === "Recognition") {
    return <div>{questionType}</div>;
  } else if (questionType === "Summary Status") {
    return <div>{questionType}</div>;
  } else if (questionType === "Text") {
    return (
      <>
        <div>
          <InputLabel
            htmlFor="question"
            style={{
              color: "#343365",
              fontSize: 13,
              fontWeight: 500,
              marginBottom: 4,
            }}
          >
            Question
          </InputLabel>
          <OutlinedInput
            size="small"
            type="text"
            id="question"
            fullWidth
            placeholder="Type a question here"
            sx={{
              paddingLeft: 1,
              paddingRight: 1,
              fontSize: 13,
              color: "#8280B1",
              background: "#F5F6FC",
              fontFamily: "Baloo Tammudu 2",
              borderRadius: "4px",
              height: 40,
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "none",
                borderColor: "#FF6969",
              },
              border: "none",
            }}
          />
        </div>
        <div style={{ marginTop: "24px" }}>
          <OutlinedInput
            size="small"
            type="text"
            id="question"
            fullWidth
            multiline
            minRows={4.4}
            placeholder="Enter comments"
            sx={{
              fontSize: 13,
              minHeight: 83,
              paddingLeft: 3,
              color: "#8280B1",
              background: "#F5F6FC",
              fontFamily: "Baloo Tammudu 2",
              borderRadius: "4px",
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "none",
                borderColor: "#FF6969",
              },
              border: "none",
            }}
          />
        </div>
        
        <div>
          <FormControlLabel control={<Checkbox/>} 
            sx={{ 
                color: "#8280B1", marginLeft:'-10px',marginTop:'8px',
                '& .MuiFormControlLabel-label':{
                    color:'#343365',
                    fontSize:12,
                }
            }}
            label="Required" />
        </div>
      </>
    );
  }
};
