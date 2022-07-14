import * as React from "react";
import { styled } from "@mui/material/styles";
import "./BasicTableStyles.css";

//Components MUI
import { Avatar, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

//Styles
const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0063F0",
    border: "none",
    color: "#FFFFFF",

    "&:first-of-type": {
      borderRadius: "5px 0 0 0",
    },

    "&:last-child": {
      borderRadius: "0 5px 0 0",
    },

    "&:nth-of-type(n+2)": {
      textAlign: "center",
    },
  },

  [`&.${tableCellClasses.body}`]: {
    borderBottom: "none",
    color: "#444271",
    fontSize: 13,
    padding: "6px 16px",

    "&:nth-of-type(n+2)": {
      textAlign: "center",
    },
  },
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(even)": {
    backgroundColor: "#EAECF8",
  },
});

const BasicTable = () => {
  const headers = ["Name", "Employees"];
  const data = [
    {
      name: "Luisa",
      employees: 12,
    },
    {
      name: "Camilo",
      employees: 9,
    },
    {
      name: "Piyush",
      employees: 23,
    },
  ];
  const rows = ["name", "employees"];

  //Functions
  const stringToColor = (string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  };

  return (
    <TableContainer component={Paper} sx={{ width: "60%" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((name, i) => {
              return <StyledTableCell key={i}>{name}</StyledTableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            return (
              <StyledTableRow key={item.id}>
                {rows.map((rowValue, i) => (
                  <React.Fragment key={i}>
                    {rowValue === "name" ? (
                      <StyledTableCell component="th" scope="row">
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{ alignItems: "center" }}
                        >
                          <Avatar {...stringAvatar(item[rowValue])} />
                          <Typography sx={{ fontSize: 13, color: "#444271" }}>
                            {item[rowValue]}
                          </Typography>
                        </Stack>
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell component="th" scope="row">
                        {item[rowValue]}
                      </StyledTableCell>
                    )}
                  </React.Fragment>
                ))}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
