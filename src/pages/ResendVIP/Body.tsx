import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
// import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import HeaderBody from "./HeaderBody"
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';

export interface IBodyPageProps {}


const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const [count, setcount] = useState('');

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];





    const LS = localStorage;

    const navigatea = () => {
        navigate('/deshboard');
    };


    const Testcolumns = [
        'Signal (7)',
        'Package',
        'วัน-เวลาที่ชำระ',
        'ภาษีหัก ณ ที่จ่าย3%(บาท)',
        'Vat7%(บาท)',
        'จำนวนเงินสุทธิ(บาท)',
    ];

    const Testdata = [
        ['M4','15 วัน แถม 2 วัน', '2023/02/03 23:30:45', '153.00', '346.29', '5,293.00'],
        ['M1','20 วัน แถม 5 วัน', '2023/02/03 17:38:45', '310.00', '702.00', '10,000.00'],
        ['M1','20 วัน แถม 5 วัน', '2023/02/03 13:10:18', '310.00', '702.00', '10,000.00'],
        ['M4','20 วัน แถม 5 วัน', '2023/02/02 22:10:12', '155.25', '351.38', '5,371.00'],
        ['M4','20 วัน แถม 5 วัน', '2023/02/02 12:30:36', '204.00', '461.72', '7,058.00'],
        ['M4','15 วัน แถม 2 วัน', '2023/01/17 18:02:15', '153.00', '346.29', '5,293.00'],
        ['M4','15 วัน แถม 2 วัน', '2023/01/01 07:50:18', '153.00', '346.29', '5,293.00']
    ];



    const options = {
        // caseSensitive: true,
        confirmFilters: false,
        sort: false,
        viewColumns: false,
        searchOpen: true,
        download: false,
        print: false,
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true
    };

    const getMuiTheme = () =>
        createTheme({
            components: {
                MuiTableCell: {
                    styleOverrides: {
                        root: {
                            // padding: '16px 1.5vw'
                            padding: '16px 1.5vw'
                        }
                    }
                }
            }
        });

    return (
        <div style={{ padding: '5vh 2.5vw' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ width: '100%' }}>
                    <HeaderBody/>
                    <StyledEngineProvider injectFirst>
                        <Demo />
                    </StyledEngineProvider>
                </div>
            </div>
        </div>
    );
};

export default BodyPage;
