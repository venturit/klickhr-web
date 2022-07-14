import styled from "styled-components";

export const OptionsContainer = styled.div`
  background-color: #ffffff;
  border-radius: 11px;
  border: 1px solid #e6e5f8;
  box-shadow: 0 1px 20px 0 rgba(130, 128, 177, 0.27);
  padding: 1em 0em;
  position: absolute;
  right: 33px;
  top: 84px;
  width: 300px;
  z-index: 1;
`;

export const Category = styled.div`
  color: #8280b1;
  cursor: pointer;
  font-size: 13px;
  padding: 1em 1.5em;
  transition: background 0.25s 0s ease-in-out;

  :hover {
    background-color: rgba(0, 99, 240, 0.2);
    color: #343365;
  }
`;
