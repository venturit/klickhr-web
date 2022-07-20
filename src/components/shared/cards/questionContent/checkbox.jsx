import React from "react";
import {
  FormControlLabel,
  FormControl,
  FormGroup,
  Checkbox,
} from "@mui/material";
import styled from "styled-components";

const SquareDash = styled("div")`
  box-sizing: border-box;
  height: 19px;
  width: 19px;
  margin-right: 9px;
  border-radius: 3px;
  border: 2px dashed #b7b5e7;
`;

const CheckboxTemplate = ({ QuestionInput }) => {
  const [checkboxGroup, setCheckboxGroup] = React.useState([
    { checkboxTemplate: "" },
  ]);

  const handleChangeCheckbox = (index, event) => {
    const values = [...checkboxGroup];
    values[index]["checkboxTemplate"] = event.target.textContent;
    setCheckboxGroup(values);
  };

  const addNewCheckbox = () => {
    setCheckboxGroup([...checkboxGroup, { checkboxTemplate: "" }]);
    console.log(checkboxGroup);
  };

  const removeCheckbox = (index) => {
    const values = [...checkboxGroup];
    values.splice(index, 1);
    setCheckboxGroup(values);
  };

  console.log(checkboxGroup);

  return (
    <>
      <div>
        <FormControl>
          <FormGroup>
            {checkboxGroup.map((element, index) => (
              <div key={index}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <FormControlLabel
                      control={<Checkbox />}
                      name={"checkboxTemplate"}
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
                    onBlur={(e) => handleChangeCheckbox(index, e)}
                  >
                    {element.checkboxTemplate !== ""
                      ? element.checkboxTemplate
                      : "Add text"}
                  </div>
                  <div
                    style={{ color: "#343365", fontSize: "14.26px" }}
                    onClick={() => removeCheckbox(index)}
                  >
                    x
                  </div>
                </div>
              </div>
            ))}
            <div
              onClick={() => addNewCheckbox()}
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: 9,
              }}
            >
              <SquareDash />
              <div
                style={{
                  color: "#0063F0",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                + Add new
              </div>
            </div>
          </FormGroup>
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

export default CheckboxTemplate;
