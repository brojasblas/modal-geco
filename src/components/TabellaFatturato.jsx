import React from "react";
import '../styles/TabellaFatturato.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

  
function TabellaFatturato() {
    return (
            <TableContainer sx={{ display: 'flex', justifyContent: 'center', mb:3, mt:2}}>
                <Table aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={7}>
                                FATTURATO
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Società</TableCell>
                            <TableCell align="center">Cliente</TableCell>
                            <TableCell align="center">Periodo</TableCell>
                            <TableCell align="center">Ore Fatturate</TableCell>
                            <TableCell align="center">Importo</TableCell>
                            <TableCell align="center">Spese</TableCell>
                            <TableCell align="center">Nr. Documento</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">T&G</TableCell>
                            <TableCell align="center">Westpole</TableCell>
                            <TableCell align="center">2019/10</TableCell>
                            <TableCell align="center">368</TableCell>
                            <TableCell align="center">9.390,00 €</TableCell>
                            <TableCell align="center">no</TableCell>
                            <TableCell align="center">Fatt. 08455</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">T&G</TableCell>
                            <TableCell align="center">Westpole</TableCell>
                            <TableCell align="center">2019/12</TableCell>
                            <TableCell align="center">1075</TableCell>
                            <TableCell align="center">27.390,00 €</TableCell>
                            <TableCell align="center">no</TableCell>
                            <TableCell align="center">Fatt. 08465</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='blue-row' align="center" colSpan={3}>2019</TableCell>
                            <TableCell className='blue-row' align="center">1443</TableCell>
                            <TableCell className='blue-row' align="center">36.780,00 €</TableCell>
                            <TableCell colSpan={2} ></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">T&G</TableCell>
                            <TableCell align="center">Westpole</TableCell>
                            <TableCell align="center">2019/10</TableCell>
                            <TableCell align="center">368</TableCell>
                            <TableCell align="center">9.390,00 €</TableCell>
                            <TableCell align="center">no</TableCell>
                            <TableCell align="center">Fatt. 08455</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">T&G</TableCell>
                            <TableCell align="center">Westpole</TableCell>
                            <TableCell align="center">2019/12</TableCell>
                            <TableCell align="center">1075</TableCell>
                            <TableCell align="center">27.390,00 €</TableCell>
                            <TableCell align="center">no</TableCell>
                            <TableCell align="center">Fatt. 08465</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">T&G</TableCell>
                            <TableCell align="center">Westpole</TableCell>
                            <TableCell align="center">2019/12</TableCell>
                            <TableCell align="center">1075</TableCell>
                            <TableCell align="center">27.390,00 €</TableCell>
                            <TableCell align="center">no</TableCell>
                            <TableCell align="center">Fatt. 08465</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='blue-row' align="center" colSpan={3}>2020</TableCell>
                            <TableCell className='blue-row' align="center">1443</TableCell>
                            <TableCell className='blue-row' align="center">36.780,00 €</TableCell>
                            <TableCell colSpan={2} ></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    );
  }

  export default TabellaFatturato;