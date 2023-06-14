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
import './BodyPage.css';

export interface IBodyPageProps {}


const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const [count, setcount] = useState('');

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const [data, setData] = useState<any[]>([]);

    const [dataPbig, setdataPbig] = useState<any[]>([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get('http://localhost:4000/data');
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


    const LS = localStorage;

    const navigatea = () => {
        navigate('/deshboard');
    };
    const Testdata2 = data.map((item) => [
        item.SignalName,
        item.Package,
        item.PaymentDateTime,
        item.Tax.toFixed(2),
        item.Vax.toFixed(2),
        item.Price.toFixed(2),
    ]);

    const dataPBIG = apiData.map((item) => [
        item.sc_name,
        item.pd_title,
        item.pm_trx_qr_datetime,
        item.pm_rate.toFixed(2),
        item.pd_price.toFixed(2),
        item.pm_bath.toFixed(2),
    ]);

    const Testdata3 = data
    .filter(item => item.SignalName === "M1")
    .map(item => [
        item.SignalName,
        item.Package,
        item.PaymentDateTime,
        item.Tax.toFixed(2),
        item.Vax.toFixed(2),
        item.Price.toFixed(2),
    ]);
    
    console.log(Testdata2,"test")
    const signalCount = data.length;

    const MembersignalCountM1 = data.filter(item => item.SignalName === "M1").length;
    const MembersignalCountM4 = data.filter(item => item.SignalName === "M4").length;
    const MembersignalCountM5 = data.filter(item => item.SignalName === "M5").length;
    const MembersignalCountM30 = data.filter(item => item.SignalName === "M30").length;
    const MembersignalCountVIP = data.filter(item => item.SignalName === "VIP").length;
    const totalAmount = data
        .filter(item => item.SignalName === "M1")
        .reduce((sum, item) => sum + item.Price, 0);
    const totalAmountM4 = data
        .filter(item => item.SignalName === "M4")
        .reduce((sum, item) => sum + item.Price, 0);
    const totalAmountM5 = data
        .filter(item => item.SignalName === "M5")
        .reduce((sum, item) => sum + item.Price, 0);
    const totalAmountM30 = data
        .filter(item => item.SignalName === "M30")
        .reduce((sum, item) => sum + item.Price, 0);
    const totalAmountVIP = data
        .filter(item => item.SignalName === "VIP")
        .reduce((sum, item) => sum + item.Price, 0);

    const totalAmountM4Pbig = apiData
        .filter(item => item.sc_name === "M5 (M4)")
        .reduce((sum, item) => sum + item.pm_bath, 0);

    const Testcolumns = [
        `Signal (${signalCount})`,
        'Package',
        'วัน-เวลาที่ชำระ',
        'ภาษีหัก ณ ที่จ่าย3%(บาท)',
        'Vat7%(บาท)',
        `จำนวนเงินสุทธิ(${totalAmount.toFixed(2)})`,
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
        selectableRowsHideCheckboxes: true,
        // responsive: undefined,
        pagination: true,
        rowsPerPageOptions: [7],
        page: 0,
        rowsPerPage: 7,
    };

    const getMuiTheme = () =>
        createTheme({
            components: {
                MuiTableCell: {
                    styleOverrides: {
                        root: {
                            // padding: '16px 1.5vw'
                            padding: '16px 1.5vw',
                        }
                    }
                }
            }
        });

        const getMuiTheme2 = () =>
        createTheme({
            components: {
            MuiTableCell: {
                styleOverrides: {
                root: {
                    padding: '16px 1.5vw',
                    borderRadius: '0vh 0vw',
                },
                },
            },
            MuiToolbar: {
                styleOverrides: {
                regular: {
                    minHeight: '8px',
                    borderRadius: '0vh 0vw',
                },
                },
            },
            MuiPaper: {
                styleOverrides: {
                root: {
                    borderRadius: '0vh 0vw',
                    boxShadow: 'none',
                },
                },
            },
            },
        });



    return (
        // <div style={{ padding: '5vh 2.5vw' }}>
        <div style={{borderRadius:'0'}}>
            <div style={{ display: 'flex', justifyContent: 'flex-start' ,borderRadius:'0'}}>
                <div style={{ width: '100%' ,borderRadius:'0'}}>
                    <HeaderBody totalAmount={totalAmount} totalAmountM4={totalAmountM4} totalAmountM5={totalAmountM5} totalAmountM30={totalAmountM30} totalAmountVIP={totalAmountVIP} totalAmountM4Pbig={totalAmountM4Pbig}/>
                    <div className="custom-responsive-table">
                        <ThemeProvider theme={getMuiTheme2()}>
                        <MUIDataTable
                            title={'DeshBoard'}
                            data={dataPBIG}
                            columns={Testcolumns}
                            options={options}
                        />
                        </ThemeProvider>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BodyPage;
