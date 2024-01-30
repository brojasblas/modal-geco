import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function TabellaOrdinato() {
    return (
            <TableContainer sx={{ display: "flex", justifyContent: "center", mb: 3, mt: 2 }}>
                <Table aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={11}>
                                ORDINATO
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Ordine N.</TableCell>
                            <TableCell align="center">Pos</TableCell>
                            <TableCell align="center">Data Inizio</TableCell>
                            <TableCell align="center">Data Fine</TableCell>
                            <TableCell align="center">Descrizione</TableCell>
                            <TableCell align="center">Spese</TableCell>
                            <TableCell align="center">Qta</TableCell>
                            <TableCell align="center">UM</TableCell>
                            <TableCell align="center">Ordinato</TableCell>
                            <TableCell align="center">Fatturato</TableCell>
                            <TableCell align="center">Residuo</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell align="center">123456789</TableCell>
                            <TableCell align="center">01</TableCell>
                            <TableCell align="center">01/01/2020</TableCell>
                            <TableCell align="center">31/12/2020</TableCell>
                            <TableCell align="center">Consulenza Genova</TableCell>
                            <TableCell align="center">no</TableCell>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">Eu</TableCell>
                            <TableCell align="center">€€€</TableCell>
                            <TableCell align="center">€€€</TableCell>
                            <TableCell align="center">€€€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">987654321</TableCell>
                            <TableCell align="center">02</TableCell>
                            <TableCell align="center">01/01/2020</TableCell>
                            <TableCell align="center">31/12/2020</TableCell>
                            <TableCell align="center">Consulenza Genova</TableCell>
                            <TableCell align="center">no</TableCell>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">Eu</TableCell>
                            <TableCell align="center">€€€</TableCell>
                            <TableCell align="center">€€€</TableCell>
                            <TableCell align="center">€€€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={7}/>
                            <TableCell align="center">Totale</TableCell>
                            <TableCell align="center">€€€</TableCell>
                            <TableCell align="center">€€€</TableCell>
                            <TableCell align="center">€€€</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    );
  }

  export default TabellaOrdinato;