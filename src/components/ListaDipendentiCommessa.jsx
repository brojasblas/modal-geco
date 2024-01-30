import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../styles/ListaDipendentiCommessa.scss";

function createData(name, calories, fat, carbs, tariffa, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    price,
    tariffa,
    history: [
      {
        date: "Ottobre",
        hours: "130",
        amount: 4902.5,
        tariffa: 215,
      },
      {
        date: "Novembre",
        hours: "120",
        amount: 2902.5,
        tariffa: 215,
      },
      {
        date: "Dicembre",
        hours: "99",
        amount: 1902.5,
        tariffa: 215,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell scope="row">{row.name}</TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={5}>
                      2019
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Periodo</TableCell>
                    <TableCell>Ore</TableCell>
                    <TableCell align="right">Ip. Fatturato</TableCell>
                    <TableCell align="right">Costo mese</TableCell>
                    <TableCell align="right">Tariffa</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell scope="row">{historyRow.date}</TableCell>
                      <TableCell>{historyRow.hours}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.hours * row.tariffa)}
                      </TableCell>
                      <TableCell align="right">{historyRow.tariffa}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {/* Tabella 2020 */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={5}>
                      2020
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Periodo</TableCell>
                    <TableCell>Ore</TableCell>
                    <TableCell align="right">Ip. Fatturato</TableCell>
                    <TableCell align="right">Costo mese</TableCell>
                    <TableCell align="right">Tariffa</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell scope="row">{historyRow.date}</TableCell>
                      <TableCell>{historyRow.hours}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.hours * row.tariffa)}
                      </TableCell>
                      <TableCell align="right">{historyRow.tariffa}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Andrea Bianchi", 159, 6.0, 24, 4.0),
  createData("Francesco Verdi", 237, 9.0, 37, 4.3),
  createData("Giovanni Blu", 262, 16.0, 24, 6.0),
  createData("Anna Giallo", 305, 3.7, 67, 4.3),
];

export default function CollapsibleTable() {
  return (
    <TableContainer
      sx={{ display: "flex", justifyContent: "center", mb: 3, mt: 2 }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={7}>
              DIPENDENTI
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Nome</TableCell>
            <TableCell align="right">Ore Totali</TableCell>
            <TableCell align="right">Ip. Fatturato Totale</TableCell>
            <TableCell align="right">Costo Totale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
