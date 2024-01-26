import React from "react";
import "../styles/TabellaSintesiCommessa.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

export default function TabellaCostiSintesiCommessa() {
  return (
    <TableContainer
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Table sx={{ width: "100%"}} aria-label="spanning table">
        <TableBody>
          <TableRow>
            <TableCell align="center">Costi</TableCell>
            <TableCell align="center">52.4324.33</TableCell>
            <TableCell align="center" colSpan={2}>
              Margine Reale
            </TableCell>
            <TableCell align="center">37%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Trasferta</TableCell>
            <TableCell align="center">52.4324.33</TableCell>
            <TableCell align="center" colSpan={2}>
              Margine Matt.
            </TableCell>
            <TableCell align="center">37%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Personale Esterno</TableCell>
            <TableCell align="center">52.4324.33</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Servizi</TableCell>
            <TableCell align="center">52.4324.33</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Forniture</TableCell>
            <TableCell align="center">52.4324.33</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
