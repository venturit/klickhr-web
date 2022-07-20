import React from "react";
import {
  InputLabel,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import RadioTemplate from "./radioButton";
import CheckboxTemplate from "./checkbox";
import TextTemplate from "./text";
import Recognition from "./recognition";
import SummaryStatus from "./summaryStatus";

const QuestionInput = () => {
  return (
    <div style={{marginBottom:15}}>
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
};

export const QuestionContentType = ({ questionType }) => {
  //For checkbox prop type
  if (questionType === "Checkbox") {
    return (
      <>
        <QuestionInput />
        <CheckboxTemplate />
      </>
    );
    //For radio prop type
  } else if (questionType === "Radio") {
    return (
      <>
        <QuestionInput />
        <RadioTemplate />
      </>
    );
    //For Recognition prop type
  } else if (questionType === "Recognition") {
    return (
      <>
        <QuestionInput/>
        <Recognition />
      </>
    );
    //For Summary Status prop type
  } else if (questionType === "Summary Status") {
    return (
      <>
        <div style={{
          marginBottom: 12,
        }}>
          <span style={{fontSize:15,color:'#444271', fontWeight:600}} >Answers</span>
        </div>
        <SummaryStatus/>
      </>
    )
    //For Text prop type
  } else if (questionType === "Text") {
    return <TextTemplate />;
  }
};
