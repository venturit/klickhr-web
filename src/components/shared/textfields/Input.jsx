import React from "react";

//MUI Components
import { FormControl, InputBase, InputLabel, styled } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },

  "& .MuiInputBase-input": {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    boxShadow: "0 5px 13px 0 rgba(52,51,101,0.09)",
    color: "#8280B1",
    fontSize: 14,
    padding: "10px 12px",
    position: "relative",
    width: "auto",

    "&:focus": {
      border: "2px solid #0063F0",
    },
  },
}));

const InputLabelStyles = styled(InputLabel)({
  color: "#343365",
  fontSize: 14,
  fontWeight: 500,
});

const Input = ({ label }) => {
  return (
    <FormControl variant="standard">
      <InputLabelStyles shrink htmlFor="bootstrap-input">
        {label}
      </InputLabelStyles>
      <BootstrapInput id="bootstrap-input" />
    </FormControl>
  );
};

export default Input;
