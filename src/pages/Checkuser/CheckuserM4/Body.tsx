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
import '../Css/BodyPage.css';
import moment, { Moment } from 'moment';

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
        const response = await axios.get('http://localhost:4000/userdata');
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

    const filteredData = data.filter(item => item.SignalName === "M4");

    const Testdata2 = filteredData.map((item) => [
        item.UID,
        item.Name,
        item.SignalName,
        item.Package,
        item.PaymentDateTime,
        item.TypeStart,
        item.StartDate,
        item.EndDate,
        item.Status,
        item.Action,
    ]);

    const filteredData2 = apiData.filter(item => item.sc_name === "M5 (M4)");


    const Testdata3 = filteredData2.map((item) => [
        item.c_uid.slice(0, 10),
        item.c_displayname,
        item.p_name,
        item.pd_title,
        moment(item.pm_trx_qr_datetime).format('D/M/YYYY HH:mm:ss [GMT]'),
        item.p_name,
        moment(item.pm_sdate).format('D/M/YYYY HH:mm:ss [GMT]'),
        moment(item.pm_edate).format('D/M/YYYY HH:mm:ss [GMT]'),
        item.pms_name,
        // item.Action,
    ]);

    console.log(Testdata2,'check')
    console.log(Testdata3,'checkPbig')

    const activeCount = apiData.reduce((count, item) => {
        if (item.pd_day >= 1 && item.sc_name === "M5 (M4)") {
            return count + 1;
        }
        return count;
    }, 0);

    const unactiveCount = apiData.reduce((count, item) => {
        if (item.pd_day === 0 && item.sc_name === "M5 (M4)") {
            return count + 1;
        }
        return count;
    }, 0);

    const massageCountTotal = filteredData.reduce((total, item) => total + item.MassageCount, 0);
    const messageReceivedTotal = filteredData.reduce((total, item) => total + parseInt(item.MessageReceived), 0);
    const messageMissedTotal = filteredData.reduce((total, item) => total + parseInt(item.MessageMissed), 0);
    
    console.log(massageCountTotal,"M4")
    const Testcolumns = [
        'UUID-LINE',
        'Name',
        'Signal',
        'Package',
        'วัน-เวลาที่ชำระ',
        'รูปแบบเริ่มใช้งาน',
        'วันที่ที่เริ่มใช้งาน',
        'วันที่สิ้นสุด',
        // 'Status',
        {
            name: 'Status',
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex: any, rowIndex: any) => {
                    const isActive = filteredData2[dataIndex].pd_day >= 1;
                    const isBlock = filteredData2[dataIndex].pd_day === 0;

                    let backgroundColor = '';
                    if (isActive) {
                        backgroundColor = '#8CABD8';
                    } else if (isBlock) {
                        backgroundColor = '#D3D3D3';
                    } else {
                        backgroundColor = '#838383';
                    }
                    return (
                        <div style={{backgroundColor: backgroundColor,color:'white',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'center',padding:'0.6vh 0.5vw'}}>
                            {filteredData2[dataIndex].pd_day + " วัน"}
                        </div>
                    );
                }
            }
        },
        {
            name: 'แอคชั่น',
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex: any, rowIndex: any) => {
                    const isBlock = filteredData2[dataIndex].pd_day === 0;
                    return (
                        <div style={{ display: 'flex' , gap: '0vw 0.5vw'}}>
                            <Button
                                style={{
                                    backgroundColor: isBlock ? 'black' : 'white',
                                    color: isBlock ? 'white' : 'black',
                                    borderRadius: '1vh',
                                    textAlign: 'center',
                                    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
                                    padding: '0.6vh 0.5vw'
                                }}
                            >
                                {isBlock ? 'UnBlock' : 'Block'}
                            </Button>
                            <Button
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '1vh',
                                    textAlign: 'center',
                                    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',
                                    padding: '0.6vh 0.5vw'
                                }}
                            >
                                เพิ่มวัน
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
                            padding: '1.5vh 1.5vw'
                        }
                    }
                }
            }
        });

    return (
        <div style={{ padding: '5vh 2vw' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ width: '110%' }}>
                    <HeaderBody activeCount={activeCount} unactiveCount={unactiveCount} massageCountTotal={massageCountTotal} messageReceivedTotal={messageReceivedTotal} messageMissedTotal={messageMissedTotal} />
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            title={'DeshBoard'}
                            data={Testdata3}
                            columns={Testcolumns}
                            options={options}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default BodyPage;
