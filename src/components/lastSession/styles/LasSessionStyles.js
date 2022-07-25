import { Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/styles";

export const GoBackText = styled(Typography)({
  color: "#444271",
  fontSize: "13px !important",
  fontWeight: "800 !important",
});

export const StackTitleLastS = styled(Stack)({
  alignItems: "center",
  flexDirection: "row !important",
  justifyContent: "space-between",

  ["@media (max-width:600px)"]: {
    alignItems: "flex-start",
    flexDirection: "column !important",
    margin: "0 1em",
  },
});

export const PaperResponsive = styled(Paper)({
  borderRadius: "15px !important",
  margin: "0 1em",
  padding: "0.7em",

  "&:nth-of-type(n+2)": {
    marginTop: "0.7em",
  },
});

export const TextPaperResponsive = styled(Typography)({
  fontSize: "12px !important",
  color: "#444271",
});
