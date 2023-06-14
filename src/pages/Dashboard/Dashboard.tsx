import React, { useEffect, useState } from 'react';

import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Header from "../Header"
import Body from "./Body"
import HeaderBody from "./HeaderBody"
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import axios from "axios";

export interface IDashboardPageProps {}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = (props) => {
    const MyCountchart = 5;

    const [data2, setData] = useState<any[]>([]);
    const [dataPbig, setdataPbig] = useState<any[]>([]);
    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get('http://localhost:4000/data');
        setData(response.data)
        console.log(response.data,"Dash");
        } catch (error) {
        console.error(error);
        }
    };

    fetchData();
    }, []);

    useEffect(() => {
        const fetchData2 = async () => {
            try {
            const response = await axios.post('https://signal-test.herokuapp.com/payments/list',{
                sdate:"2023-06-01",
                edate:"2023-09-31"
            });
            setdataPbig(response.data.data)
            console.log(response.data.data,'PBIG');
            } catch (error) {
            console.error(error,'PBIG');
            }
        };
        fetchData2();
    }, []);

    

    

    const signalCount = data2.length;

    const MembersignalCountM1 = data2.filter(item => item.SignalName === "M1").length;
    const MembersignalCountM4 = data2.filter(item => item.SignalName === "M4").length;
    const MembersignalCountM5 = data2.filter(item => item.SignalName === "M5").length;
    const MembersignalCountM30 = data2.filter(item => item.SignalName === "M30").length;
    const MembersignalCountVIP = data2.filter(item => item.SignalName === "VIP").length;

    const MembersignalCountM4Pbig = dataPbig.filter(item => item.sc_name === "M5 (M4)").length;

    const Card = () => (
        <div style={{display:'flex',marginTop:'2vh'}}>
            <div style={{width:"70%",fontSize:'1.5rem'}}>
                Signal - M4
            </div>
            <div style={{width:"10%",fontSize:'1.5rem',color:"#FEC52F",fontWeight:'bold',display:'flex',justifyContent:'flex-end'}}>
                {MembersignalCountM4Pbig}
            </div>
            <div style={{width:"20%",fontSize:'1rem',display:'flex',justifyContent:'flex-end'}}>
                ครั้งสะสม
            </div> 
        </div>
    );
    const Card2 = () => (
        <div style={{display:'flex',marginTop:'2vh'}}>
            <div style={{width:"70%",fontSize:'1.5rem'}}>
                Signal - M1
            </div>
            <div style={{width:"10%",fontSize:'1.5rem',color:"#FEC52F",fontWeight:'bold',display:'flex',justifyContent:'flex-end'}}>
                {MembersignalCountM1}
            </div>
            <div style={{width:"20%",fontSize:'1rem',display:'flex',justifyContent:'flex-end'}}>
                ครั้งสะสม
            </div> 
        </div>
    );
    const Card3 = () => (
        <div style={{display:'flex',marginTop:'2vh'}}>
            <div style={{width:"70%",fontSize:'1.5rem'}}>
                Signal - M5
            </div>
            <div style={{width:"10%",fontSize:'1.5rem',color:"#FEC52F",fontWeight:'bold',display:'flex',justifyContent:'flex-end'}}>
                {MembersignalCountM5}
            </div>
            <div style={{width:"20%",fontSize:'1rem',display:'flex',justifyContent:'flex-end'}}>
                ครั้งสะสม
            </div> 
        </div>
    );
    const Card4 = () => (
        <div style={{display:'flex',marginTop:'2vh'}}>
            <div style={{width:"70%",fontSize:'1.5rem'}}>
                Signal - M30
            </div>
            <div style={{width:"10%",fontSize:'1.5rem',color:"#FEC52F",fontWeight:'bold',display:'flex',justifyContent:'flex-end'}}>
                {MembersignalCountM30}
            </div>
            <div style={{width:"20%",fontSize:'1rem',display:'flex',justifyContent:'flex-end'}}>
                ครั้งสะสม
            </div> 
        </div>
    );
    const Card5 = () => (
        <div style={{display:'flex',marginTop:'2vh'}}>
            <div style={{width:"70%",fontSize:'1.5rem',justifyContent:'flex-end'}}>
                Signal - VIP
            </div>
            <div style={{width:"10%",fontSize:'1.5rem',color:"#FEC52F",fontWeight:'bold',display:'flex',justifyContent:'flex-end'}}>
                {MembersignalCountVIP}
            </div>
            <div style={{width:"20%",fontSize:'1rem',display:'flex',justifyContent:'flex-end'}}>
                ครั้งสะสม
            </div> 
        </div>
    );

    const Mynumber = Number('500')
    const Mychart = (MN:any) => (
        // <Paper style={{width:'50%',borderRadius:'1vh 1vw',border:'1px solid black',height:'100%',padding: '5vh 2.5vw'}}>
        <div style={{width:'100%',height:'92.5vh'}}>
            <Paper style={{width:'85.5%',borderRadius:'0',height:'89.3%',padding: '5vh 2.5vw'}}>
                <Chart
                data={data}
                // height={Mynumber}
                >
                <ArgumentAxis />
                <BarSeries
                    valueField="count"
                    argumentField="type"
                    color="#FEC52F"
                />
                <ValueAxis/>
                <div style={{display: 'flex',justifyContent:'space-between',alignItems:'center',fontSize:'1vw'}}>
                    {/* <Title text="การใช้งาน Signal" /> */}
                    <span>การใช้งาน Signal</span>
                    {/* <span>จำนวนครั้งสะสมรวม <span style={{color:'#FEC52F',fontSize:'1vw'}}>{MembersignalCountM1+MembersignalCountM4+MembersignalCountM5+MembersignalCountM30+MembersignalCountVIP}</span> ครั้ง</span> */}
                    <span>จำนวนครั้งสะสมรวม <span style={{color:'#FEC52F',fontSize:'1vw'}}>{MembersignalCountM4Pbig}</span> ครั้ง</span>
                </div>
                <Animation />
                </Chart>
                <Card/>
                {/* <Card2/>
                <Card3/>
                <Card4/>
                <Card5/> */}
            </Paper>
        </div>
    );
  
    const LS = localStorage;

    const data = [
        { type: 'M1', count: 0 },
        { type: 'M4', count: MembersignalCountM4Pbig },
        { type: 'M5', count: 0 },
        { type: 'M30', count: 0 },
        { type: 'VIP', count: 0 },
    ];


    return (
        <div>
            <div style={{backgroundColor:'#D3D3D3', padding:'0vh 0vw 0vh 0vw' ,margin:'0'}}>
              <Header/>
                <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '35%', overflow: 'hidden' }}>
                        <Mychart />
                    </div>
                    <div style={{ width: '65%', overflow: 'hidden' }}>
                        <Body />
                    </div>
                </div>
                {/* <div style={{width:'40%',display:'flex'}}>
                    
                </div> */}
            </div>
        </div>
    );
};

export default DashboardPage;
