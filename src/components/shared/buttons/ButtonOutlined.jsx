import React from "react";
import { styled } from "@mui/material";

//MUI Components
import Button from "@mui/material/Button";

const ButtonOutline = styled(Button)({
  border: "1.4px solid #0063F0",
  color: "#0063F0",
  fontSize: "14px",
  borderRadius: "10px",
  padding: "3px 5px",

  ["@media (max-width:600px)"]: {
    fontSize: "12px",
  },
});

const ButtonOutlined = ({ name }) => {
  return <ButtonOutline variant="outlined">{name}</ButtonOutline>;
};

export default ButtonOutlined;
