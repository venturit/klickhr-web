import React from "react";
import styled from "styled-components";

const TitleCard = styled.p`
  color: #ffffff;
  font-size: 40px;
  font-weight: 800;
  z-index: 2;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const CardDescription = styled.p`
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  z-index: 2;
  margin: 10px 0 0 0;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const MainCard = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.type === "one"
      ? "#00A8ED"
      : props.type === "two"
      ? "#FFC431"
      : props.type === "three"
      ? "#0063F0"
      : props.type === "four"
      ? "#2216AC"
      : props.disabled && "#B7B5E7"};
  border-radius: 17px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: max-content;
  overflow: hidden;
  padding: 1.5em 2em;
  position: relative;
  min-width: 10em;

  :nth-of-type(n + 2) {
    margin-left: 1em;
  }

  @media (max-width: 600px) {
    padding: 0.5em 1em;
    min-width: 7em;
  }
`;

const Triangle = styled.div`
  border-bottom: ${(props) =>
    props.type === "three" ? "60px solid #2216AC" : "60px solid #f5f6fc"};
  border-top: 60px solid transparent;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  bottom: 0;
  height: 0;
  opacity: ${(props) => (props.type === "three" ? "0.32" : "0.16")};
  position: absolute;
  right: 0;
  width: 0;
  z-index: 0;
`;

const Rectangle = styled.div`
  border: 3px solid transparent;
  background: ${(props) =>
    props.type === "one"
      ? "rgba(0, 99, 240, 0.24)"
      : props.type === "four"
      ? "#0063F0"
      : props.disabled && "#343365"};
  border-radius: 8px;
  height: 118px;
  opacity: ${(props) =>
    props.type === "four" ? "0.17" : props.disabled ? "0.08" : "0.42"};
  position: absolute;
  right: ${(props) => (props.right ? props.right : "20px")};
  top: 15px;
  transform: rotate(45deg);
  width: 35px;
  z-index: 0;
`;

//One: for blue card.
//Two: for yellow card.
//Three: for medium blue card.
//Four: for dark blue card.

const CardInformation = ({ title, description, type, disabled, onClick }) => {
  return (
    <MainCard type={type} disabled onClick={type !== "" ? onClick : null}>
      <TitleCard>{title}</TitleCard>

      <CardDescription>{description}</CardDescription>

      {type === "one" ? (
        <Rectangle type={type} />
      ) : type === "two" || type === "three" ? (
        <Triangle type={type} />
      ) : type === "four" ? (
        <>
          <Rectangle type={type} />
          <Rectangle type={type} right="163px" />
        </>
      ) : (
        <Rectangle disabled />
      )}
    </MainCard>
  );
};

export default CardInformation;
