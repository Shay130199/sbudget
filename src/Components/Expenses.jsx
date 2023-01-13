import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(name, spent, month, ) {
  return { name, spent, month };
}

const rows = [
  createData('Spotify', '-£9.99', '24th September 2022'),
  createData('EE Phone Bill', '-£23.99','21th September 2022'),
  createData('Wheelans Pub', '-£26.43', '18th September 2022'),
  createData('Rent', '-£350', '14th September 2022'),
  createData('Greggs', '-£1.90', '2nd September 2022'),
];

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Expenses</h3>

    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #80808029'}}
    
    
    >
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Expenses</TableCell>
            <TableCell align="left">Spent</TableCell>
            <TableCell align="left">Day</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.spent}</TableCell>
              <TableCell align="left">{row.month}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
