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


    const [apiData, setApiData] = useState<any[]>([]);


    useEffect(() => {
        const fetchData2 = async () => {
            try {
            const response = await axios.post('https://signal-test.herokuapp.com/payments/list',{
                sdate:"2023-06-01",
                edate:"2023-09-31"
            });
            setApiData(response.data.data)
            console.log(response.data.data,'PBIG');
            } catch (error) {
            console.error(error,'PBIG');
            }
        };
        fetchData2();
    }, []);


    const Testdata2 = apiData.map((item) => [
        // item.UID,
        // <img src={`http://localhost:4000/api/image/${item.Image}`} alt="Image" style={{ width: '100px', height: 'auto' }} />,
        item.c_uid,
        item.c_displayname,
        item.pms_name,
        
    ]);

    const Testdata3 = apiData.map((item) => {
        const newData = [
            item.c_uid,
            item.c_displayname,
            item.pms_name,
        ];

        // if (item.pms_name === "รอชำระ") {
        //     newData.push(item.c_uid);
        // }
        

        return newData;
    });

    console.log(Testdata2,'check')



    const Testcolumns2 = [
        'UUID-LINE',
        'Name',
        'Status',
        'รูป',
        {
            name: 'แอคชั่น',
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex: any, rowIndex: any) => {
                    const isBlock = apiData[dataIndex].pms_name === 'ชำระแล้ว';
                    return (
                        <div style={{ display: 'flex' , gap: '0vw 0.5vw'}}>
                            <Button
                                disabled={isBlock}
                                style={{
                                    backgroundColor: isBlock ? 'gray' : 'black',
                                    color: 'white',
                                    borderRadius: '1vh',
                                    textAlign: 'center',
                                    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
                                    padding: '0.6vh 0.5vw'
                                }}
                            >
                                {isBlock ? 'ปกติ' : 'ส่ง'}
                            </Button>
                        </div>
                    );
                }
            }
        },
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
                            data={Testdata3}
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
