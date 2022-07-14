import React from "react";

//MUI Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled, Typography } from "@mui/material";

//Images
import Background1 from "../../../resources/images/background_1.png";

const TitleCard = styled(Typography)({
  color: "#FFFFFF",
  fontSize: 20,
  fontWeight: 800,
});

const CardDescription = styled(Typography)({
  color: "#FFFFFF",
  fontSize: 13,
});

const MainCard = styled(Card)({
  backgroundImage: `url(${Background1})`,
  borderRadius: "12.5px",
  boxShadow: "none",
  padding: 16,
});

const ContainerInfo = styled(CardContent)({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
});

const CardAnnouncement = ({ title, description }) => {
  return (
    <MainCard>
      <ContainerInfo>
        <TitleCard>{title}</TitleCard>
        <CardDescription>{description}</CardDescription>
      </ContainerInfo>
    </MainCard>
  );
};

export default CardAnnouncement;
