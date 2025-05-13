import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FacebookSvg from '../../assets/img/FacebookSvg';
import { Link } from 'react-router-dom';
import InstagramSvg from '../../assets/img/InstagramSvg';
import TwitterSvg from '../../assets/img/TwitterSvg';
import LinkedInSvg from '../../assets/img/LinkedInSvg';
import EditIcon from '../../assets/img/edit.png'
import TrashIcon from '../../assets/img/trash.png'


const TableOrderList = ({header,orders}) => {
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
          {orders.map((o,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>{o.Id}</TableCell>
              <TableCell align='left'>{o.Food}</TableCell>
              <TableCell align='left'>{o.Quantity}</TableCell>
              <TableCell align='left'>{o.Name}</TableCell>
              <TableCell align='left'>{o.Address}</TableCell>
              <TableCell align='left'>{o.Email}</TableCell>
              <TableCell align='left' >
                <div className={o.Status === "Pending" ? 'bg-[#FFFBB9] text-warning text-center py-2 rounded' : o.Status === "Delivered" ? 'bg-[#D2EBDB] text-success text-center py-2 rounded' :  'bg-[#ffcdb1] text-[red] text-center py-2 rounded' }>
                  {o.Status}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableOrderList