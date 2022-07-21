import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//Components
import DataTable from "../shared/tables/dataTable/DataTable";
import { CustomButton } from "../shared/buttons/button";
import CardInformation from "../shared/cards/CardInformation";
import CardResponsive from "./CardResponsive";
import InputIcon from "../shared/textfields/InputIcon";

//MUI Components
import { Avatar, Stack } from "@mui/material";
import Arrow from "@mui/icons-material/KeyboardArrowLeftRounded";

//Functions
import { stringAvatar } from "../shared/tables/basicTable/BasicTable";

//Styles
import {
  DividerSx,
  Greeting,
  StackParent,
} from "../dashboard/styles/DashboardStyles";
import { GoBackText, StackTitleLastS } from "./styles/LasSessionStyles";

const columns = [
  {
    cellClassName: "column-cell-styles",
    field: "name",
    flex: 2,
    headerName: "Name",
    sortable: false,
    renderCell: (params) => {
      return (
        <Stack direction="row">
          <Avatar {...stringAvatar(params.value)} />
          <p style={{ marginLeft: "4em" }}>{params.value}</p>
        </Stack>
      );
    },
  },
  {
    cellClassName: "column-cell-styles",
    field: "jobTitle",
    flex: 1,
    headerName: "Job Title",
    sortable: false,
  },
  {
    cellClassName: "column-email-styles",
    field: "form",
    flex: 2,
    headerName: "Form",
    sortable: false,
  },
  {
    cellClassName: "column-cell-styles",
    field: "lastSession",
    flex: 1,
    headerName: "Las Session",
    sortable: false,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 2,
    renderCell: (params) => {
      return <CustomButton name="Start session" />;
    },
  },
];

const rows = [
  {
    id: "1234",
    name: "Georgie Atkins ",
    jobTitle: "OTR",
    form: "Employee Rounding",
    lastSession: "05/16/2021",
  },
  {
    id: "1235",
    name: "Georgie Atkins ",
    jobTitle: "OTR",
    form: "Employee Rounding",
    lastSession: "05/16/2021",
  },
  {
    id: "1236",
    name: "Georgie Atkins ",
    jobTitle: "OTR",
    form: "Employee Rounding",
    lastSession: "05/16/2021",
  },
  {
    id: "1237",
    name: "Georgie Atkins ",
    jobTitle: "OTR",
    form: "Employee Rounding",
    lastSession: "05/16/2021",
  },
  {
    id: "1238",
    name: "Georgie Atkins ",
    jobTitle: "OTR",
    form: "Employee Rounding",
    lastSession: "05/16/2021",
  },
  {
    id: "1239",
    name: "Georgie Atkins ",
    jobTitle: "OTR",
    form: "Employee Rounding",
    lastSession: "05/16/2021",
  },
];

const sessions = [
  {
    title: "-30",
    description: "18 sessions",
    type: "one",
  },
  {
    title: "30 - 60",
    description: "23 sessions",
    type: "two",
  },
  {
    title: "60 - 90",
    description: "8 sessions",
    type: "three",
  },
  {
    title: "+90",
    description: "2 sessions",
    type: "four",
  },
  {
    title: "Drafts",
    description: "5 sessions",
  },
];

const LastSession = () => {
  const navigate = useNavigate();
  const { typeSession } = useSelector((state) => state.typeSession);

  return (
    <StackParent>
      <Stack
        direction="row"
        alignItems="center"
        width="max-content"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      >
        <Arrow sx={{ color: "#0063F0" }} />

        <GoBackText>Go back to dashboard</GoBackText>
      </Stack>

      <StackTitleLastS>
        <Greeting>Overview Since Last Session</Greeting>

        <div style={{ width: window.innerWidth < 600 && "100%" }}>
          <InputIcon />
        </div>
      </StackTitleLastS>

      <DividerSx />

      <Stack direction="row" sx={{ marginTop: "2em", overflowX: "auto" }}>
        {sessions.map((item, i) => (
          <CardInformation
            key={i}
            title={item.title}
            description={item.description}
            type={item.type === typeSession ? typeSession : ""}
            // onClick={handleClick("two")}
          />
        ))}
      </Stack>

      <Stack sx={{ marginTop: "2em" }}>
        {window.innerWidth < 600 ? (
          rows.map((item, i) => (
            <CardResponsive
              key={i}
              name={item.name}
              form={item.form}
              jobTitle={item.jobTitle}
              lastSession={item.lastSession}
            />
          ))
        ) : (
          <DataTable columns={columns} rows={rows} checkbox={false} />
        )}
      </Stack>
    </StackParent>
  );
};

export default LastSession;
