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
import axios from 'axios'

export interface IBodyPageProps {}


const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const [count, setcount] = useState('');

    const LS = localStorage;

    const navigatea = () => {
        navigate('/deshboard');
    };

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get('http://localhost:4000/images');
        setData(response.data)
        console.log(response.data);
        } catch (error) {
        console.error(error);
        }
    };
    
    fetchData();
    }, []);

    const filteredData = data.filter(item => item.SignalName === "M4");

    const Testdata2 = data.map((item) => [
        item.UID,
        <img src={`http://localhost:4000/api/image/${item.Image}`} alt="Image" style={{ width: '100px', height: 'auto' }} />,
    ]);

    console.log(Testdata2,'check')



    const Testcolumns2 = [
        'UUID-LINE',
        'Name',
        'Status',
        'แอคชั่น',
    ];

    const Testdata = [
        ['WEKLWJIPWSER', 'Lorem01', 'M4', '20 วัน แถม 5 วัน', '2023/02/03 23:30:45', 'Next day', '2023/02/04 00:00:00', '2023/03/01 23:59:59'],
        ['WOERUIHIVDHI', 'Lorem01', 'M4', '20 วัน แถม 5 วัน', '2023/02/03 17:38:45', 'Next day', '2023/02/04 00:00:00', '2023/03/01 23:59:59'],
        ['UWH499WDA', 'Lorem02', 'M4', '20 วัน แถม 5 วัน', '2023/02/03 23:30:45', 'Next day', '2023/02/03 00:00:00', '2023/02/28 23:59:59'],
        ['UWH49949WWQ', 'Lorem04', 'M4', '15 วัน แถม 5 วัน', '2023/02/03 13:10:18', 'Immediately', '2023/02/02 22:10:12', '2023/2/18 23:59:59']
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
        selectableRowsHideCheckboxes: true,
        rowsPerPageOptions: [1,5],
        page: 0,
        rowsPerPage: 5,
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
        <div style={{ padding: '5vh 2vw' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ width: '110%' }}>
                    <div style={{backgroundColor:'white',padding:'3vh 1vw',display: 'flex',justifyContent: 'center',fontSize:'1.5rem'}}>
                        {/* <div style={{display:'flex',marginTop:'1vh'}}>
                            123
                        </div> */}
                    ตรวจสอบการโอนเงิน
                    </div>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            title={'DeshBoard'}
                            data={Testdata2}
                            columns={Testcolumns2}
                            options={options}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default BodyPage;
