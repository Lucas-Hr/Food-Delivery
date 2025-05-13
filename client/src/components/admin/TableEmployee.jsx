import React, { useEffect } from 'react'
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


const TableEmployee = ({header,employees,deleteEmployee}) => {
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
          {employees.map((e,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{e.Id}</TableCell>
              <TableCell align="left">{e.Name}</TableCell>
              <TableCell align="left">{e.Job}</TableCell>
              <TableCell>
                {e.SocialMedia?.Facebook && (<FacebookSvg color={"black"} size={20}/>)}
                {e.SocialMedia?.Instagram && (<InstagramSvg color={"black"} size={20}/>)}
                {e.SocialMedia?.LinkedIn && (<LinkedInSvg color={"black"} size={20}/>)}
                {e.SocialMedia?.X && (<TwitterSvg color={"black"} size={20}/>)}
              </TableCell>
              <TableCell align="left">{e.Address}</TableCell>
              <TableCell align="left">{e.Phone}</TableCell>
              <TableCell align="left" className='flex'>
                <img src={EditIcon} alt="" className='w-8 h-8' />
                <img src={TrashIcon} alt="" className='w-4 h-4 ms-2 cursor-pointer'onClick={() => deleteEmployee(e)}/>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


export default TableEmployee;