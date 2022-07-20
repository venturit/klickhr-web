import React, { useState } from "react";

//MUI Components
import { InputBase, Paper, styled } from "@mui/material";
import Search from "@mui/icons-material/SearchRounded";

const SearchStyles = styled(Search)({
  color: "#0063F0",
  padding: "10px",
});

const InputBaseStyles = styled(InputBase)({
  color: "#8280B1",
  flex: 1,
  marginLeft: 8,
});

const PaperStyles = styled(Paper)({
  alignItems: "center",
  border: "1.4px solid #E6E5F8",
  borderRadius: 5,
  display: "flex",
  margin: "0 0 0.7em 0",
  width: "100%",
});

const InputIcon = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <PaperStyles component="form" elevation={0}>
      <InputBaseStyles
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <SearchStyles />
    </PaperStyles>
  );
};

export default InputIcon;
