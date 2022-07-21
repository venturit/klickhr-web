import { Divider, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/styles";

export const Greeting = styled(Typography)({
  color: "#343365",
  fontSize: "28px !important",

  ["@media (max-width:600px)"]: {
    fontSize: "22px !important",
  },
});

export const DividerSx = styled(Divider)({
  borderColor: "#E6E5F8 !important",

  ["@media (max-width:600px)"]: {
    marginTop: "0.5em !important",
  },
});

export const DashboardTitles = styled(Typography)({
  color: "#343365",
  fontSize: "18px !important",

  ["@media (max-width:600px)"]: {
    fontSize: "13px !important",
  },
});

export const CardOverview = styled(Paper)({
  borderRadius: "14px !important",
  padding: "1em 1.5em 0",

  ["@media (max-width:600px)"]: {
    borderRadius: "0px !important",
  },
});

export const CardManagers = styled(Paper)({
  borderRadius: "14px !important",
  padding: "1em 1.5em",
  backgroundColor: "rgba(130,128,177,0.07) !important",

  ["@media (max-width:600px)"]: {
    borderRadius: "0px !important",
  },
});

export const StackParent = styled(Stack)({
  backgroundColor: "#F5F6FC",
  height: "max-content",
  padding: "1.5em 6em 2em 1.5em",

  ["@media (max-width:600px)"]: {
    padding: "0",
  },
});

export const StackTitle = styled(Stack)({
  ["@media (max-width:600px)"]: {
    margin: "1.5em 1em 0",
  },
});

export const StackHeaderAnnouncements = styled(Stack)({
  margin: "1em 0 0.5em",
  ["@media (max-width:600px)"]: {
    margin: "0.5em 1em",
  },
});
