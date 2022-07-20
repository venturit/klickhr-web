import React, { useState } from "react";

//Components
import OptionsMenu from "./OptionsMenu";

//MUI Components
import { InputBase, Paper, styled } from "@mui/material";
import Search from "@mui/icons-material/SearchRounded";
import Close from "@mui/icons-material/Close";

const SearchStyles = styled(Search)({
  color: "#0063F0",
  padding: "10px",
});

const CloseStyles = styled(Close)({
  color: "#0063F0",
  cursor: "pointer",
  padding: "10px",
});

const InputBaseStyles = styled(InputBase)({
  color: "#8280B1",
  flex: 1,
  marginLeft: 8,

  "&:focused": {
    border: "1px solid red",
  },
});

const PaperStyles = styled(Paper)({
  alignItems: "center",
  border: "1.4px solid #E6E5F8",
  borderRadius: 5,
  display: "flex",
  margin: "0.5em 0 0.5em 0",
  width: 300,
});

const InputSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <PaperStyles
        component="form"
        elevation={0}
        sx={{ border: inputFocus && "1.5px solid #0063F0" }}
      >
        <InputBaseStyles
          placeholder="Search"
          value={inputValue}
          onFocus={() => setInputFocus(true)}
          // onBlur={() => setInputFocus(false)}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {inputFocus ? (
          <CloseStyles onClick={() => setInputFocus(false)} />
        ) : (
          <SearchStyles />
        )}
      </PaperStyles>

      {inputFocus && <OptionsMenu inputValue={inputValue} />}
    </div>
  );
};

export default InputSearch;
