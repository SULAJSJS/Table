import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchDivision } from '../store/slices/divisionSlice';
import { useDispatch, useSelector } from 'react-redux';

const ChessItems = ({ data }) => {
  const sliceData = {
    item: data?.map((item) => ({
      it: item?.[1].slice(2),
    })),
  };

  const tableRef = React.useRef();

  const dataItems = sliceData.item;
  console.log(dataItems);
  return (
    <div className="chess">
      <div className="dropdown__items">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead id="head">
              <TableRow>
                <TableCell sx={{ height: 80 }}>Участники</TableCell>
                {data.map((item, i) => (
                  <TableCell align="right" key={i} sx={{width: 60, borderLeft: '2px solid rgba(50, 50, 93, 0.25)', position: 'sticky'}}>
                    {item?.[0]}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, i) => (
                <TableRow key={i} sx={{ border: '2px solid rgba(50, 50, 93, 0.25)' }}>
                  <TableCell
                  ref={tableRef}
                    component="th"
                    scope="row"
                    sx={{ position: 'sticky', left: 0, backgroundColor: '#fff', width: 72, height: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px', borderRight: '1px solid rgba(50, 50, 93, 0.25)' }}>
                    {item?.[0]}
                  </TableCell>
                  {dataItems.map((item, i) => (
                    <TableCell key={i} align="right" sx={{ marginLeft: '10px', borderLeft: '2px solid rgba(50, 50, 93, 0.25)' }}>
                      {item.it?.[0, 1]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TableContainer component={Paper} className="container">
          <Table className="table" sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="thead">
              <TableRow className="tr">
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell id="th" align="right">
                  Calories
                </TableCell>
                <TableCell id="th" align="right">
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell><TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell><TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell><TableCell id="th" align="right">
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbody">
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
              </TableRow>
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
              </TableRow>
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
                <TableCell id="td">Something</TableCell>
              </TableRow>
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
              </TableRow>
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
              </TableRow>
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
              </TableRow>
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
              </TableRow>
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
              </TableRow>
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
              </TableRow>
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
              </TableRow>
              <TableRow className="tr" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
                <TableCell className="td">Something</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer> */}
      </div>
    </div>
  );
};

export default ChessItems;
