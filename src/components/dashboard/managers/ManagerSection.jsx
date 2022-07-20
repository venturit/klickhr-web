import React from "react";

//Components
import BasicTable from "../../shared/tables/basicTable/BasicTable";

//Icons
import Information from "@mui/icons-material/ErrorOutline";

//MUI components
import { Stack, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

//Styles
import {
  CardManagers,
  DashboardTitles,
  DividerSx,
} from "../styles/DashboardStyles";

const styles = makeStyles({
  tooltip: {
    background: "#FFFFFF !important",
    border: "1px solid #E6E5F8",
    color: "#8280B1 !important",
    borderRadius: "6px !important",
    fontSize: "13px !important",
    padding: "1em !important",
    textAlign: "center",
  },

  arrow: {
    "&::before": {
      backgroundColor: "#FFFFFF !important",
    },
  },
});

export const ManagerSection = () => {
  const classes = styles();

  return (
    <CardManagers elevation={0}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <DashboardTitles>Most Timely Managers</DashboardTitles>

        <Tooltip
          title="Sessions completed on or before scheduled frequency"
          arrow
          classes={{
            arrow: classes.arrow,
            tooltip: classes.tooltip,
          }}
        >
          <Information sx={{ color: "#B7B5E7", cursor: "pointer" }} />
        </Tooltip>
      </Stack>

      <DividerSx
        sx={{ marginTop: "0.5em", borderColor: "#B7B5E7 !important" }}
      />

      <div style={{ marginTop: "1.5em" }}>
        <BasicTable />
      </div>
    </CardManagers>
  );
};
