import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createStyles, makeStyles } from "@mui/styles";
import { Button, IconButton, Pagination, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";

const columns = [
  {
    field: "employeeName",
    headerName: "Employee Name",
    width: 130,
    sortable: false,
  },
  { field: "id", headerName: "ID", width: 70, sortable: false },
  { field: "email", headerName: "Email", width: 130, sortable: false },
  {
    field: "jobTitle",
    headerName: "Job Title",
    width: 90,
    sortable: false,
  },
  {
    field: "role",
    headerName: "Role",
    // description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 130,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "startDate", headerName: "Start Date", width: 100, sortable: false },
  {
    field: "action",
    headerName: "...",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation();
        console.log("Hola");
      };

      return (
        <div>
          <IconButton size="small">
            <EditIcon color="#B7B5E7" />
          </IconButton>
          <IconButton size="small">
            <DeleteIcon color="#B7B5E7" />
          </IconButton>
        </div>
      );
    },
  },
];

const rows = [
  {
    employeeName: "Henrietta Alvarez",
    id: "143671",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Henrietta Alvarez",
    id: "123671",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Henrietta Alvarez",
    id: "143671",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Henrietta Alvarez",
    id: "143671",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Henrietta Alvarez",
    id: "143671",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
];

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .MuiDataGrid-columnHeaders": {
        background: "#0063F0",
        color: "#FFFFFF",
      },

      "& .MuiDataGrid-checkboxInput": {
        color: "#8280B1",

        "&.Mui-checked": {
          color: "#8280B1",
        },
      },

      "& .MuiDataGrid-row": {
        backgroundColor: "#FFFFFF",

        "&:nth-of-type(even)": {
          backgroundColor: "#F6F6FF",
        },
      },

      "& .MuiDataGrid-cell": {
        borderRight: "1px solid #E6E5F8",
        borderBottom: "1px solid transparent !important",
        borderLeft: "1px solid transparent !important",
      },

      "& .MuiDataGrid-columnSeparator": {
        visibility: "hidden",
      },

      "& .MuiDataGrid-rowCount": {
        backgroundColor: "red",
      },

      "& 	.MuiDataGrid-footerContainer": {
        backgroundColor: "pink",
        border: "none",
        width: "max-content",
      },
      // "& .MuiDataGrid-columnHeaderTitleContainer": {
      //   display: "flex",
      //   justifyContent: "center",
      // },

      // "& .MuiDataGrid-columnHeaderCheckbox": {
      //   color: "#FFFFFF !important",
      // },
    },

    pagination: {
      "& .MuiPagination-ul": {
        backgroundColor: "#FFFFFF",
        border: "1px solid #E6E5F8",
        borderRadius: "8px",
        width: "max-content",
        padding: "0.5em",
        color: "#B7B5E7",
      },

      "& .MuiPaginationItem-root": {
        color: "#B7B5E7",
      },

      "& .css-1oj2twp-MuiPagination-root": {
        display: "flex",
        justifyContent: "end",
      },
    },
  })
);

const DataTable = () => {
  const classes = useStyles();
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        className={classes.root}
        // rowCount=
        rows={rows}
        disableColumnMenu={true}
        hideFooter={true}
        hideFooterPagination={true}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{
          boxShadow: "0 1px 10px 0 rgba(130,128,177,0.29)",
          borderRadius: "5px 5px 0 0",
          border: "none",
        }}
      />

      <Stack spacing={2}>
        <Pagination className={classes.pagination} count={10} shape="rounded" />
      </Stack>
    </div>
  );
};

export default DataTable;
