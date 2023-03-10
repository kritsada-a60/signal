import React, { Component } from "react";

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

export interface IDashboardPageProps {}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = (props) => {
    const MyCountchart = 5;

    const Card = () => (
        <div style={{display:'flex',marginTop:'2vh'}}>
            <div style={{width:"70%",fontSize:'1.5rem'}}>
                Signal - M4
            </div>
            <div style={{width:"10%",fontSize:'1.5rem',color:"#FEC52F",fontWeight:'bold',display:'flex',justifyContent:'flex-end'}}>
                5
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
                2
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
                0
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
                0
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
                0
            </div>
            <div style={{width:"20%",fontSize:'1rem',display:'flex',justifyContent:'flex-end'}}>
                ครั้งสะสม
            </div> 
        </div>
    );

    const Mynumber = Number('500')
    const Mychart = (MN:any) => (
        // <Paper style={{width:'50%',borderRadius:'1vh 1vw',border:'1px solid black',height:'100%',padding: '5vh 2.5vw'}}>
        <div style={{width:'100%'}}>
            <Paper style={{width:'85.5%',borderRadius:'0',height:'92.4%',padding: '5vh 2.5vw'}}>
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
                <Title text="การใช้งาน Signal" />
                <Animation />
                </Chart>
                <Card/>
                <Card2/>
                <Card3/>
                <Card4/>
                <Card5/>
            </Paper>
        </div>
    );
  
    const LS = localStorage;

    const data = [
        { type: 'M4', count: 5 },
        { type: 'M1', count: 2 },
        { type: 'M5', count: 0 },
        { type: 'M3', count: 0 },
        { type: 'VIP', count: 0 },
    ];


    return (
        <div>
            <div style={{backgroundColor:'#D3D3D3', padding:'0vh 0vw 0vh 0vw' ,margin:'0'}}>
              <Header/>
                <div style={{width:'100%',display:'flex'}}>
                    <Mychart/>
                    <Body/>
                </div>
                {/* <div style={{width:'40%',display:'flex'}}>
                    
                </div> */}
            </div>
        </div>
    );
};

export default DashboardPage;
