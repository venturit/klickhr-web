import React, { useState } from "react";
import styled from "styled-components";
import { createStyles, makeStyles } from "@mui/styles";

//MUI Components
import Autocomplete from "@mui/material/Autocomplete";
import { Box, InputLabel, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const data = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },

      "& .MuiAutocomplete-input": {
        color: "#8280B1",
      },
    },
  })
);

const InputLabelStyles = styled(InputLabel)({
  fontSize: "14px !important",
  color: "#343365 !important",
});

const AutocompleteInput = ({ label }) => {
  const classes = useStyles();
  const [focus, setFocus] = useState(false);

  return (
    <div>
      <InputLabelStyles shrink sx={{ color: focus && "#0063F0 !important" }}>
        {label}
      </InputLabelStyles>
      <Autocomplete
        className={classes.root}
        popupIcon={<KeyboardArrowDownIcon sx={{ fill: "#0063F0" }} />}
        size="small"
        disablePortal
        id="combo-box-demo"
        options={data}
        sx={{
          width: 300,
          backgroundColor: "#FFFFFF",
          borderRadius: "5px",
          border: focus ? "2px solid #0063F0" : "2px solid transparent",
          boxShadow: "0 5px 13px 0 rgba(52,51,101,0.09)",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        )}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{
              color: "#8280B1",
              fontSize: 14,

              "&:hover": {
                color: " #343365",
                backgroundColor: "red",
              },
            }}
            {...props}
          >
            {option.label}
          </Box>
        )}
      />
    </div>
  );
};

export default AutocompleteInput;
