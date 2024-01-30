import React from "react";
import '../styles/TabellaFatturatoAtteso.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

  
function TabellaFatturatoAtteso() {
    return (
            <TableContainer sx={{ display: 'flex', justifyContent: 'center', mb:3, mt:2}}>
                <Table aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                FATTURATO ATTESO
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Periodo</TableCell>
                            <TableCell align="center">Ore</TableCell>
                            <TableCell align="center">Fatt. Atteso</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">2019/10</TableCell>
                            <TableCell align="center">368</TableCell>
                            <TableCell align="center">€€€€€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">2019/11</TableCell>
                            <TableCell align="center">495</TableCell>
                            <TableCell align="center">€€€€€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">2019/12</TableCell>
                            <TableCell align="center">580</TableCell>
                            <TableCell align="center">€€€€€</TableCell>
                        </TableRow>
                        <TableRow className='blue-row'>
                            <TableCell className='blue-row' align="center">Totale 2019</TableCell>
                            <TableCell className='blue-row'align="center">1443</TableCell>
                            <TableCell className='blue-row' align="center">€€€€€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">2020/01</TableCell>
                            <TableCell align="center">390</TableCell>
                            <TableCell align="center">€€€€€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">2020/02</TableCell>
                            <TableCell align="center">505</TableCell>
                            <TableCell align="center">€€€€€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">2020/03</TableCell>
                            <TableCell align="center">585</TableCell>
                            <TableCell align="center">€€€€€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='blue-row' align="center">Totale 2020</TableCell>
                            <TableCell className='blue-row' align="center">1480</TableCell>
                            <TableCell className='blue-row' align="center">€€€€€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='blue-row' align="center">Totale</TableCell>
                            <TableCell className='blue-row' align="center">2923</TableCell>
                            <TableCell className='blue-row' align="center">€€€€€</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    );
  }

  export default TabellaFatturatoAtteso;