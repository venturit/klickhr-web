import * as React from "react";
import "./DataTableStyles.css";

//MUI Components
import {
  DataGrid,
  GridActionsCellItem,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { createStyles, makeStyles } from "@mui/styles";
import { Pagination } from "@mui/material";

//MUI Icons
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";

const columns = [
  {
    cellClassName: "column-name-styles",
    field: "employeeName",
    flex: 3,
    headerName: "Employee Name",
    sortable: false,
  },
  {
    cellClassName: "column-cell-styles",
    field: "id",
    flex: 2,
    headerName: "ID",
    sortable: false,
  },
  {
    cellClassName: "column-email-styles",
    field: "email",
    flex: 3,
    headerName: "Email",
    sortable: false,
  },
  {
    cellClassName: "column-cell-styles",
    field: "jobTitle",
    flex: 2,
    headerName: "Job Title",
    sortable: false,
  },
  {
    cellClassName: "column-cell-styles",
    field: "role",
    flex: 3,
    headerName: "Role",
    sortable: false,
  },
  {
    cellClassName: "column-cell-styles",
    field: "startDate",
    flex: 2,
    headerName: "Start Date",
    sortable: false,
  },
  {
    field: "actions",
    headerName: "...",
    sortable: false,
    type: "actions",
    getActions: () => [
      <GridActionsCellItem
        icon={<EditIcon color="#B7B5E7" />}
        onClick={() => console.log("Edit")}
      />,
      <GridActionsCellItem
        icon={<DeleteIcon color="#B7B5E7" />}
        onClick={() => console.log("Delete")}
      />,
    ],
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
    employeeName: "Eliza Murphy",
    id: "4646546",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Marion Lopez",
    id: "4324343",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Pearl Carter",
    id: "0980890",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Annie Chandler",
    id: "143434234671",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Hannah Davis",
    id: "645654",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Donald Fowler",
    id: "12312",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Wayne Grant",
    id: "8798979",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Georgie Atkins",
    id: "2131232",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
  {
    employeeName: "Helen Day",
    id: "0797887",
    email: "ko@gmh.org",
    jobTitle: "CNA",
    role: "Employee",
    startDate: "03/29/2021",
  },
];

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .column-cell-styles": {
        color: "#8280B1",
        fontSize: "13px",
      },

      "& .column-email-styles": {
        color: "#0063F0",
        fontSize: "13px",
      },

      "& .column-name-styles": {
        color: "#444271",
        fontSize: "15px",
        fontWeight: "600",
      },

      "& MuiDataGrid-main": {
        boxShadow: "0 1px 10px 0 rgba(130,128,177,0.29)",
      },

      "& .MuiDataGrid-columnHeaders": {
        background: "#0063F0",
        color: "#FFFFFF",
      },

      "&  .MuiDataGrid-columnHeaderCheckbox": {
        color: "red !important",
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
        border: "none",
        width: "100%",
      },
    },

    pagination: {
      "& .MuiPagination-ul": {
        backgroundColor: "#FFFFFF",
        border: "1px solid #E6E5F8",
        borderRadius: "8px",
        color: "#B7B5E7",
        padding: "0.5em",
        width: "max-content",
      },

      "& .MuiPaginationItem-root": {
        color: "#B7B5E7",
      },
    },
  })
);

const DataTable = () => {
  const classes = useStyles();

  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
      <Pagination
        boundaryCount={1}
        className={classes.pagination}
        color="primary"
        count={pageCount}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
        page={page + 1}
      />
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        autoHeight
        autoPageSize
        checkboxSelection
        className={classes.root}
        columnBuffer={0}
        columns={columns}
        disableColumnMenu
        pageSize={5}
        pagination
        rows={rows}
        components={{
          Pagination: CustomPagination,
        }}
        sx={{
          border: "none",
        }}
      />
    </div>
  );
};

export default DataTable;
