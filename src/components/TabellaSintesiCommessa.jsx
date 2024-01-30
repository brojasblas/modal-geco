import React from "react";
import "../styles/TabellaSintesiCommessa.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function TabellaSintesiCommessa() {
  return (
    <TableContainer
    sx={{ display: 'flex', justifyContent: 'center', mt:2}}
    >
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={9}>
              SINTESI{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            <TableCell align="center">Preventivo</TableCell>
            <TableCell align="center">Ordinato</TableCell>
            <TableCell align="center">Fatturato</TableCell>
            <TableCell align="center">%</TableCell>
            <TableCell align="center">Maturato</TableCell>
            <TableCell align="center">%</TableCell>
            <TableCell align="center">Residuo a finire</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">Ore</TableCell>
            <TableCell></TableCell>
            <TableCell align="center">6200</TableCell>
            <TableCell align="center">6160</TableCell>
            <TableCell align="center">2818</TableCell>
            <TableCell align="center">46%</TableCell>
            <TableCell align="center">2923</TableCell>
            <TableCell align="center">47%</TableCell>
            <TableCell align="center">3237</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={9}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Ricavi</TableCell>
            <TableCell align="center">Prestazioni</TableCell>
            <TableCell></TableCell>
            <TableCell align="center">6160</TableCell>
            <TableCell align="center">2818</TableCell>
            <TableCell align="center">46%</TableCell>
            <TableCell align="center">2923</TableCell>
            <TableCell align="center">47%</TableCell>
            <TableCell align="center">3237</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Spese</TableCell>
            <TableCell></TableCell>
            <TableCell align="center">6160</TableCell>
            <TableCell align="center">2818</TableCell>
            <TableCell align="center">46%</TableCell>
            <TableCell align="center">2923</TableCell>
            <TableCell align="center">47%</TableCell>
            <TableCell align="center">3237</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}></TableCell>
            <TableCell align="center"> 170.000,00 €</TableCell>
            <TableCell align="center">84.483747</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"> 87.168,13 €</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">82.548.54</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
