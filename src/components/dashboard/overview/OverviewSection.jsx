import React from "react";

//Components
import DoughnutChart from "../../shared/charts/Doughnut";

//Styles
import {
  CardOverview,
  DashboardTitles,
  DividerSx,
} from "../styles/DashboardStyles";

export const OverviewSection = () => {
  return (
    <CardOverview elevation={0}>
      <DashboardTitles sx={{ textAlign: { xs: "center", sm: "left" } }}>
        Overview:{" "}
        <span style={{ color: "#8280B1" }}>Days Since Last Session</span>
      </DashboardTitles>

      <DividerSx sx={{ marginTop: "0.5em" }} />

      <div
        style={{
          maxWidth: "26em",
          margin: "auto",
        }}
      >
        <DoughnutChart
          labels={["One", "Two", "Three", "Four", "Five", "Six"]}
          values={[96, 7, 28, 30, 45, 15]}
        />
      </div>
    </CardOverview>
  );
};
