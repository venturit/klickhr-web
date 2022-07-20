import React from "react";

//Components
import ButtonOutlined from "../../shared/buttons/ButtonOutlined";
import CardAnnouncement from "../../shared/cards/CardAnnouncement";

//MUI Components
import { Stack } from "@mui/material";

//Styles
import {
  DashboardTitles,
  StackHeaderAnnouncements,
} from "../styles/DashboardStyles";

export const AnnouncementsSection = () => {
  return (
    <Stack>
      <StackHeaderAnnouncements
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <DashboardTitles>
          Announcements{" "}
          <span style={{ color: "#8280B1", fontSize: "13px" }}>(0/0)</span>
        </DashboardTitles>

        <ButtonOutlined name="Go to announcements" />
      </StackHeaderAnnouncements>

      <Stack direction="row" sx={{ overflowX: "auto" }}>
        <CardAnnouncement
          title="No Announcements!"
          description="Check back soon."
        />

        <CardAnnouncement
          title="No Announcements!"
          description="Check back soon."
        />

        <CardAnnouncement
          title="No Announcements!"
          description="Check back soon."
        />

        <CardAnnouncement
          title="No Announcements!"
          description="Check back soon."
        />

        <CardAnnouncement
          title="No Announcements!"
          description="Check back soon."
        />

        <CardAnnouncement
          title="No Announcements!"
          description="Check back soon."
        />
      </Stack>
    </Stack>
  );
};
