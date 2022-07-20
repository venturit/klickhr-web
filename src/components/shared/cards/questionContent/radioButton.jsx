import React from "react";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormGroup,
  Checkbox
} from "@mui/material";
import styled from "styled-components";

const RadioDash = styled("div")`
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  margin-right: 9px;
  border-radius: 25px;
  border: 2px dashed #b7b5e7;
`;

const RadioTemplate = ({QuestionInput}) => {
  const [value, setValue] = React.useState("");
  const [radioButtons, setRadioButtons] = React.useState([{ radioButton: "" }]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeRadio = (index, event) => {
    const values = [...radioButtons];
    values[index]["radioButton"] = event.target.textContent;
    setRadioButtons(values);
  };

  const addNewRadioButton = () => {
    setRadioButtons([...radioButtons, { radioButton: "" }]);
  };

  const removeRadioButton = (index) => {
    const values = [...radioButtons];
    values.splice(index, 1);
    setRadioButtons(values);
  };


  return (
    <>
      <div>
        <FormControl>
          <RadioGroup name="radioGroup" value={value} onChange={handleChange}>
            {radioButtons.map((element, index) => (
              <div key={index}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <FormControlLabel
                      name="radioButton"
                      value={element.radioButton}
                      control={<Radio />}
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: -16,
                      marginRight: 8,
                      color: "#343365",
                      padding: 5,
                      fontSize: 12,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleChangeRadio(index, e)}
                  >
                    {element.radioButton !== ""
                      ? element.radioButton
                      : "Add text"}
                  </div>
                  <div
                    style={{ color: "#343365", fontSize: "14.26px" }}
                    onClick={() => removeRadioButton(index)}
                  >
                    x
                  </div>
                </div>
              </div>
            ))}
            <div
              onClick={() => addNewRadioButton()}
              style={{ display: "flex", alignItems: "center", paddingTop: 9 }}
            >
              <RadioDash />
              <div style={{ color: "#0063F0", fontSize: 12, fontWeight: 600 }}>
                Add new
              </div>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
      <div style={{marginTop:30}}>
        <FormControl>
          <FormGroup>
            <div style={{ display: "flex" }}>
              <div>
                <FormControlLabel
                  control={<Checkbox />}
                  sx={{
                    color: "#8280B1",
                    "& .MuiFormControlLabel-label": {
                      color: "#343365",
                      fontSize: 12,
                    },
                  }}
                  label="Required"
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox />}
                  sx={{
                    color: "#8280B1",
                    "& .MuiFormControlLabel-label": {
                      color: "#343365",
                      fontSize: 12,
                    },
                  }}
                  label="Comment box"
                />
              </div>
            </div>
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
};

export default RadioTemplate;
