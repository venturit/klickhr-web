import React from "react";

//Components
import { AnnouncementsSection } from "./announcements/AnnouncementsSection";
import { ManagerSection } from "./managers/ManagerSection";
import { OverviewSection } from "./overview/OverviewSection";
import { SessionsSection } from "./sessions/SessionsSection";

//MUI Components
import { Grid, Stack } from "@mui/material";

//Styles
import {
  DividerSx,
  Greeting,
  StackParent,
  StackTitle,
} from "./styles/DashboardStyles";

const Dashboard = () => {
  return (
    <StackParent>
      <StackTitle>
        <Greeting>Welcome Back Isabel</Greeting>
        <DividerSx />
      </StackTitle>

      <Stack>
        <AnnouncementsSection />
      </Stack>

      <Grid container columnSpacing={4} sx={{ marginTop: "2em" }}>
        <Grid item xs={12} md={6}>
          <OverviewSection />
        </Grid>

        {window.innerWidth < 600 && (
          <Stack sx={{ margin: "1em 0", width: "100%" }}>
            <SessionsSection />
          </Stack>
        )}

        <Grid item xs={12} md={6}>
          <ManagerSection />
        </Grid>
      </Grid>

      {window.innerWidth >= 600 && (
        <Stack sx={{ marginTop: "2em" }}>
          <SessionsSection />
        </Stack>
      )}
    </StackParent>
  );
};

export default Dashboard;
