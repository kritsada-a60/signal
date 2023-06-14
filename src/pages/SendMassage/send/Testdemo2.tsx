import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Action } from '@devexpress/dx-react-core';
import axios, { AxiosResponse } from 'axios';

interface HistoryItem {
  UUIDLINE: string;
  MyName: string;
  Signal: string;
  Package: string;
  MyDate: string;
  FormatStart: string;
  StartDate: string;
  EndDate: string;
  CountSend: string;
}

interface DataItem {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  price: number;
  history: HistoryItem[];
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
): DataItem {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [],
  };
}

function createDataFromAPI() {
  axios.post('https://signal-test.herokuapp.com/noti/list',
          { aaaa: 'aaa' })
    .then((response: AxiosResponse<DataItem>) => {
      const apiData: DataItem = response.data;
      const { name, calories, fat, carbs, protein, price } = apiData;
      const newData: DataItem = createData(name, calories, fat, carbs, protein, price);
      console.log(newData);
    })
    .catch((error: Error) => {
      console.error('Error retrieving API data:', error);
    });
}


function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;

  const [open, setOpen] = React.useState(false);
  const [dataPbig, setdataPbig] = useState<any>([]);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.post(
          'https://signal-test.herokuapp.com/noti/list',
          { aaaa: 'aaa' }
        );
        setdataPbig(response.data.data);
        console.log(response.data.data, 'PBIG');
      } catch (error) {
        console.error(error, 'PBIG');
      }
    };
    fetchData2();
  }, []);

  const updatedRow = {
    ...row,
    history: (row.history as any[]).map((historyRow: any, index: number) => {
      const updatedHistoryRow = {
        ...historyRow,
        ...(dataPbig[index] || {}),
      };
      return updatedHistoryRow;
    }),
  };
  console.log(updatedRow,'w8')
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset', margin: '0vw' } }}>
        <TableCell component="th" scope="row" width={100}>
          {row.name}
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>UUID-LINE</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Signal</TableCell>
                    <TableCell>Package</TableCell>
                    <TableCell>วัน-เวลาที่ชำระ</TableCell>
                    <TableCell>รูปแบบเริ่มใช้งาน</TableCell>
                    <TableCell>วันที่ที่เริ่มใช้งาน</TableCell>
                    <TableCell>วันที่สิ้นสุด</TableCell>
                    <TableCell>ข้อความที่ส่งไป</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {updatedRow.history.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell>{historyRow.c_uid}</TableCell>
                      <TableCell>{historyRow.c_displayname}</TableCell>
                      <TableCell>{historyRow.Signal}</TableCell>
                      <TableCell>{historyRow.Package}</TableCell>
                      <TableCell>{historyRow.MyDate}</TableCell>
                      <TableCell>{historyRow.FormatStart}</TableCell>
                      <TableCell>{historyRow.StartDate}</TableCell>
                      <TableCell>{historyRow.EndDate}</TableCell>
                      <TableCell>{historyRow.CountSend}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];


const rows2 = [
  createData('00:15:00', 159, 6.0, 24, 4.0, 3.99),
  createData('00:30:00', 237, 9.0, 37, 4.3, 4.99),
  createData('00:45:00', 262, 16.0, 24, 6.0, 3.79),
  createData('01:00:00', 305, 3.7, 67, 4.3, 2.5),
  createData('01:15:00', 356, 16.0, 49, 3.9, 1.5),
  createData('01:35:00', 356, 16.0, 49, 3.9, 1.5),
  createData('01:45:00', 356, 16.0, 49, 3.9, 1.5),
  createData('02:00:00', 356, 16.0, 49, 3.9, 1.5),
  createData('02:15:00', 356, 16.0, 49, 3.9, 1.5),
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '80vw',
      '&:focus': {
        width: '80vw',
      },
    },
  },
}));

export default function CollapsibleTable() {

  return (
    <div style={{display:'block '}}>
        <div style={{display:'flex',backgroundColor:'white',justifyContent:'center'}}>
            <Search style={{border:'1px solid #4E4E4E',width:'100%',display:'block',backgroundColor:'white',justifyContent:'center',margin:'1vh 1vw'}}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    
                />
            </Search>
        </div>
        <TableContainer component={Paper} style={{width:'100%',display:'flex'}}>
            <Table aria-label="collapsible table">
            <TableBody>
                {rows2.map((row) => (
                <Row key={row.name} row={row} />
                ))}
            </TableBody>
            </Table>
            <div style={{display:'flex'}}>
                <p style={{display:'block'}}>
                    <div style={{width:'15vw',background:'white',display:'flex',justifyContent:'center'}}>
                        จำนวนข้อความที่ได้รับ
                    </div>
                    <div style={{width:'15vw',background:'white',display:'flex',justifyContent:'center',marginTop:'3vh',fontSize:'1.5rem',fontWeight:'bold',color:'#51D456'}}>
                        5
                    </div>
                </p>
            </div>
        </TableContainer>

    </div>
  );
}
