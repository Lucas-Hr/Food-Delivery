import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TableAdmin = ({header,rows}) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((h,index) => {
                return (
                    <TableCell align='left' key={index}>
                        {h}
                    </TableCell>
                )
            }
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {header.map((h,index) => (
                <TableCell key={index} align='left'>
                  {h === "Social Media"  ? (
                  <ul>
                    {Object.entries(row[h]).map(([platform, link]) => (
                      <li key={platform}>
                        <strong>{platform}:</strong> {link}
                      </li>
                    ))}
                  </ul>
                ) : (
                  row[h]
                )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableAdmin