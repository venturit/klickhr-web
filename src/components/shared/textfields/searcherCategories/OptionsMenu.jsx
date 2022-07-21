import React, { useState } from "react";

//MUI Components
import {
  FormControlLabel,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";

//Styles
import { Category, OptionsContainer } from "./SearchStyles";

const FormControlLabelStyles = styled(FormControlLabel)({
  color: "#8280B1",
  fontSize: "12px !important",
});

const RadioStyles = styled(Radio)({
  color: "#8280B1",

  "&.Mui-checked": {
    color: "#8280B1",
  },
});

const RadioGroupStyles = styled(RadioGroup)({
  flexDirection: "row",
  gap: "2em",
  padding: "0 1.5em",
});

const TypographyStyles = styled(Typography)({
  color: "#8280B1",
  fontSize: 12,
});

const data = {
  department: [
    {
      id: 0,
      value: "Accounting",
    },
    {
      id: 1,
      value: "Central Appointment Office",
    },
    {
      id: 1,
      value: "Finance",
    },
    {
      id: 1,
      value: "Human Resource",
    },
    {
      id: 1,
      value: "General Services",
    },
  ],

  employee: [
    {
      id: 0,
      value: "Amanda Jones",
    },
    {
      id: 1,
      value: "Peter Malone",
    },
    {
      id: 1,
      value: "Mina Peterson",
    },
    {
      id: 1,
      value: "Olivia Rodgers",
    },
    {
      id: 1,
      value: "Ejemplo 7",
    },
  ],
};

const OptionsMenu = ({ inputValue }) => {
  const [selectedCategory, setSelectedCategory] = useState("department");

  return (
    <OptionsContainer>
      <RadioGroupStyles name="radio-buttons-group" defaultValue="department">
        <FormControlLabelStyles
          value="department"
          control={
            <RadioStyles
              size="small"
              name="category"
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
          }
          label={<TypographyStyles>Department</TypographyStyles>}
        />

        <FormControlLabelStyles
          value="employee"
          control={
            <RadioStyles
              size="small"
              name="category"
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
          }
          label={<TypographyStyles>Employee</TypographyStyles>}
        />
      </RadioGroupStyles>

      {data[selectedCategory].map((department, i) => {
        return <Category key={i}>{department.value}</Category>;
      })}
    </OptionsContainer>
  );
};

export default OptionsMenu;
