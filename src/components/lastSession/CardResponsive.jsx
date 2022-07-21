import React from "react";

//Components
import ButtonOutlined from "../shared/buttons/ButtonOutlined";
import { stringAvatar } from "../shared/tables/basicTable/BasicTable";

//MUI Components
import { Avatar, Grid, Stack } from "@mui/material";

//Styles
import {
  PaperResponsive,
  TextPaperResponsive,
} from "./styles/LasSessionStyles";

const CardResponsive = ({ name, form, jobTitle, lastSession }) => {
  return (
    <PaperResponsive elevation="0">
      <Grid container justifyContent="center">
        <Grid item xs={2}>
          <Avatar {...stringAvatar("Solly Roberts")} />
        </Grid>

        <Grid item xs={4}>
          <Stack>
            <TextPaperResponsive sx={{ color: "#8280B1" }}>
              Name
            </TextPaperResponsive>
            <TextPaperResponsive>{name}</TextPaperResponsive>
          </Stack>

          <Stack mt={"0.5em"}>
            <TextPaperResponsive sx={{ color: "#8280B1" }}>
              Form
            </TextPaperResponsive>
            <TextPaperResponsive>{form}</TextPaperResponsive>
          </Stack>
        </Grid>

        <Grid item xs={3}>
          <Stack>
            <TextPaperResponsive sx={{ color: "#8280B1" }}>
              Job Title
            </TextPaperResponsive>
            <TextPaperResponsive>{jobTitle}</TextPaperResponsive>
          </Stack>

          <Stack mt={"0.5em"}>
            <TextPaperResponsive sx={{ color: "#8280B1" }}>
              Last Session
            </TextPaperResponsive>
            <TextPaperResponsive>{lastSession}</TextPaperResponsive>
          </Stack>
        </Grid>

        <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
          <div>
            <ButtonOutlined name="Resume" />
          </div>
        </Grid>
      </Grid>
    </PaperResponsive>
  );
};

export default CardResponsive;
