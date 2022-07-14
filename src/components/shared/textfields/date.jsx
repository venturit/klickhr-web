import React from "react";
import { TextField, InputLabel } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { pickersDayClasses } from "@mui/x-date-pickers";
import { PickersDay } from "@mui/x-date-pickers";

const renderWeekPickerDay = (
  date,
  selectedDates,
  pickersDayProps
) => {

  return (
    <PickersDay
      {...pickersDayProps}
      sx={{
        [`&&.${pickersDayClasses.selected}`]: {
          backgroundColor: "#2216AC"
        }
      }}
    />
  );
};

export default function Date(props) {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <InputLabel
        htmlFor="email"
        style={{
          color: "#343365",
          fontFamily: "Baloo Tammudu 2",
          fontSize: 13,
          fontWeight: 500,
          marginBottom: 4,
        }}
      >
        Date
      </InputLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          renderDay={renderWeekPickerDay}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField sx={{
            paddingLeft: 1,
            paddingRight: 1,
            paddingTop: "8.5px",
            paddingBottom: "8.5px",
            borderRadius: 1,
            // Icon styles
            "& .css-i4bv87-MuiSvgIcon-root": {
              fontSize: 20,
            },
            "& .css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root": {
              color: '#2216AC',
            },
            // Text field styles
            "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
              padding: '0px',
            },
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "none",
              borderColor: "#FF6969",
            },
            border: "none",
            boxShadow: "0 5px 18px 0 rgba(52,51,101,0.16)",
          }} {...params} />}
        />
      </LocalizationProvider>
    </div>
  )
}