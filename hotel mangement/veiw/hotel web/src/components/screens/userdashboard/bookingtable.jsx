import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import BASE_URI from '../../../core';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, "5/4/2022","5/4/2022",2),

];



export default function BookingTable(toggleFunc ) {
  console.log(toggleFunc.toggleProps ,toggleFunc.toggleFunc);
   
 

  const [data , setdata] = React.useState([])
  const [toggel , setToggle] = React.useState(false)

React.useEffect(()=>{
  

  axios.get(`${BASE_URI}getbooking`)
  .then((data)=>{
    setdata(data.data)
    
    
  })
  .catch((err)=>{
    console.log(err)
    
  })
  

} ,[toggel])


const cancelbookign = (id)=>{
 toggleFunc.toggleFunc(!toggleFunc.toggleProps)
  setToggle(!toggel)

  axios.delete(`${BASE_URI}deletebooking:${id}`)
  
  .then((data)=>{
    setdata([...data])
    
    
  })
  .catch((err)=>{
    console.log(err)
    
  })
  

}
console.log(data);
return (
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bolder"}}>Name Of Hotel</TableCell>
            <TableCell align="right" style={{fontWeight:"bolder"}}>No Of person </TableCell>
            <TableCell align="right" style={{fontWeight:"bolder"}}>Start date </TableCell>
            <TableCell align="right" style={{fontWeight:"bolder"}}>end date</TableCell>
            <TableCell align="right" style={{fontWeight:"bolder"}}>No of Rooms</TableCell>
            <TableCell align="right" style={{fontWeight:"bolder"}}>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { !data? <TableRow><TableCell align="right">Loading</TableCell></TableRow>: 
          
          data.map((row , index) => (
            // console.log(row)
            <TableRow 
            key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.hotel_name}
              </TableCell>
              
              <TableCell align="right">{row.noOfper}</TableCell>
              <TableCell align="right">{row.startdate}</TableCell>
              <TableCell align="right">{row.endate}</TableCell>
              <TableCell align="right">{row.NoOfroom}</TableCell>
              <TableCell align="right"> <button className='btn btn-danger' onClick={()=>cancelbookign(row._id)}>Cancel</button> </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
