import React from "react";

//MUI Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled, Typography } from "@mui/material";

//Images
import Background1 from "../../../resources/images/background_1.png";
import Background2 from "../../../resources/images/background_2.png";
import Background3 from "../../../resources/images/background_3.png";
import Background4 from "../../../resources/images/background_4.png";
import Background5 from "../../../resources/images/background_5.png";

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
  minWidth: "25em",
  overflow: "visible",
  padding: 16,
  "&:nth-of-type(n+2)": {
    marginLeft: "2.5em",

    ["@media (max-width:600px)"]: {
      marginLeft: "0.5em",
    },
  },

  "&:nth-of-type(2n)": {
    backgroundImage: `url(${Background2})`,
  },

  "&:nth-of-type(3n)": {
    backgroundImage: `url(${Background3})`,
  },

  "&:nth-of-type(4n)": {
    backgroundImage: `url(${Background4})`,
  },

  "&:nth-of-type(5n)": {
    backgroundImage: `url(${Background5})`,
  },
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
