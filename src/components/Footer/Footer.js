import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


function createData(name, Email, nomer) {
  return { name, Email, nomer};
}

const rows = [
  createData('Contact:', 'Anastas-20-15@yandex.ru', '+7 (910) 593-27-40'),
  createData('Menu', 'Autors', 'Map Syte'),
];

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar component="footer" position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.nomer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}