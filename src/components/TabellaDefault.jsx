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
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../styles/Totale.scss";

function createData(anno, ore, giorni, fatturatoAtteso, costoMese, dettagli) {
  return {
    anno,
    ore,
    giorni,
    fatturatoAtteso,
    costoMese,
    dettagli
  };
}

function Row(props) {
    const { row, isNotFirst } = props;
    const [open, setOpen] = React.useState(false);

    const className = isNotFirst ? "rigaConBorderTop" : "";
  
    return (
      <React.Fragment>
        <TableRow className={className} sx={{ "& > *": { borderBottom: "unset" } }}>

          <TableCell>{row.anno}</TableCell>
          <TableCell align="right">{row.ore}</TableCell>
          <TableCell align="right">{row.giorni}</TableCell>
          <TableCell align="right">{row.fatturatoAtteso}</TableCell>
          <TableCell align="right">{row.costoMese}</TableCell>
          <TableCell>
            <IconButton
              aria-label="espandi riga"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1, paddingBottom: '20px' }}>
                {/* Qui inserisci i dettagli per ogni anno */}
                <Typography variant="h6" gutterBottom component="div">
                Dettaglio Mensile Lavorazione {row.anno}
                </Typography>
                <Table size="small" aria-label="dettagli">
                    <TableHead>
                    <TableRow>
                        <TableCell>Periodo</TableCell>
                        <TableCell>Ore</TableCell>
                        <TableCell>Giorni</TableCell>
                        <TableCell>Fatturato Atteso</TableCell>
                        <TableCell>Costo Mese</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {row.dettagli.map((dettaglio) => (
                        <TableRow key={dettaglio.mese}>
                        <TableCell>{dettaglio.mese}</TableCell>
                        <TableCell>{dettaglio.ore}</TableCell>
                        <TableCell>{dettaglio.giorni}</TableCell>
                        <TableCell>{dettaglio.fatturatoAtteso}</TableCell>
                        <TableCell>{dettaglio.costoMese}</TableCell>
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
      anno: PropTypes.string.isRequired,
      ore: PropTypes.number.isRequired,
      giorni: PropTypes.number.isRequired,
      fatturatoAtteso: PropTypes.number.isRequired,
      costoMese: PropTypes.number.isRequired,
      dettagli: PropTypes.array.isRequired, // Aggiorna secondo i tuoi dettagli
    }).isRequired,
  };

  export default function TabellaDefault() {
    const rows = [
    //              ANNO, ORE, GIORNI, F.ATTESO, COSTO MESE 
        createData("2019", 1480, 185, 38+`K €€€`, 999+`K €€€` , 
        [
            {mese: "2019/10", ore: 368, giorni: 46, fatturatoAtteso: 9.390, costoMese: 7.074},
            {mese: "2019/11", ore: 495, giorni: 61, fatturatoAtteso: 12.615, costoMese: 7.074},
            {mese: "2019/12", ore: 580, giorni: 72, fatturatoAtteso: 14.775, costoMese: 7.074}
        ]),
        createData("2020", 1443, 180, 36+`K €€€`, 999+`K €€€`, 
        [
            {mese: "2020/01", ore: 390, giorni: 48, fatturatoAtteso: 10.131, costoMese: 7.074},
            {mese: "2020/02", ore: 505, giorni: 72, fatturatoAtteso: 13.162, costoMese: 7.074},
            {mese: "2020/03", ore: 390, giorni: 48, fatturatoAtteso: 15.093, costoMese: 7.074}
            // Altri mesi del 2020...
        ]),
        createData("2021", 1443, 180, 36+`K €€€`, 999+`K €€€`, 
        [
            {mese: "2021/01", ore: 390, giorni: 48, fatturatoAtteso: 10.131, costoMese: 7.074},
            {mese: "2021/02", ore: 505, giorni: 72, fatturatoAtteso: 13.162, costoMese: 7.074},
            {mese: "2021/03", ore: 390, giorni: 48, fatturatoAtteso: 15.093, costoMese: 7.074}
            // Altri mesi del 2020...
        ]),

      // Altri dati...
    ];
  
    return (
      
        <TableContainer sx={{ display: 'flex', justifyContent: 'center', mb:3, mt:2}}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={6}>
                    Totale
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Anno</TableCell>
                <TableCell align="right">Ore</TableCell>
                <TableCell align="right">Giorni</TableCell>
                <TableCell align="right">Fatturato Atteso</TableCell>
                <TableCell align="right">Costo Mese</TableCell>
                <TableCell>Dettaglio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index) => (
                <Row key={row.anno} row={row} isNotFirst={index !== 0} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
  }
  