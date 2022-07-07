import React from "react";

//MUI Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled, Typography } from "@mui/material";

const TitleCard = styled(Typography)({
  fontSize: 20,
  fontWeight: 800,
  color: "#FFFFFF",
});

const CardDescription = styled(Typography)({
  fontSize: 13,
  color: "#FFFFFF",
});

const MainCard = styled(Card)({
  borderRadius: "12.5px",
  background:
    "linear-gradient(270deg, #00A8ED 0%, #2216AC 34.52%, #2216AC 100%)",
  //   opacity: "16",
  boxShadow: "none",
  padding: 16,
});

const ContainerInfo = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
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
