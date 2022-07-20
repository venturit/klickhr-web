import * as React from "react";
import "./DataTableStyles.css";

//MUI Components
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { createStyles, makeStyles } from "@mui/styles";
import { Pagination } from "@mui/material";

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
        padding: "0.5em 0",

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

      "& .MuiDataGrid-cell--textLeft": {
        justifyContent: "center !important",
      },

      "& .MuiDataGrid-columnHeaderTitleContainer ": {
        justifyContent: "center !important",
      },
    },

    pagination: {
      "& .MuiPagination-ul": {
        backgroundColor: "#FFFFFF",
        border: "1px solid #E6E5F8",
        borderRadius: "8px",
        color: "#B7B5E7",
        marginTop: "1em",
        padding: "0.5em",
        width: "max-content",
      },

      "& .MuiPaginationItem-root": {
        color: "#B7B5E7",
      },
    },
  })
);

const DataTable = ({ columns, rows, checkbox }) => {
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
        checkboxSelection={checkbox}
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
