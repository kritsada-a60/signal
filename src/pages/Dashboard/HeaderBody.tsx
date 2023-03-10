import React, { Component } from "react";


import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';

export interface IHeaderBodyProps {}


const HeaderBody: React.FunctionComponent<IHeaderBodyProps> = (props) => {
  
    const LS = localStorage;

    const navigate = useNavigate();

    const navigateeditdata = () => {
        navigate('/resend');
    };

    const Card = () => (
        <div>
            <div style={{backgroundColor:'#FFFFFF',color:'#292929',width:'11.667vw',height:'16.666vh',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'left',lineHeight:'0.1vh',margin:'1.5vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',border:'1px solid #4E4E4E'}}>
                <p style={{margin:'3vh 0 0 2vw',fontSize:'1.5rem'}}>Signal - M1</p>
                <p style={{margin:'4vh 0 0 2vw',fontSize:'1rem'}}>จำนวนเงินสุทธิ(บาท)</p>
                <p style={{margin:'4vh 0 0 2vw',fontWeight:'bold',fontSize:'1.75rem'}}>20,000</p>
            </div>
        </div>
    );

    const Card2 = () => (
        <div>
            <div style={{backgroundColor:'#FFFFFF',color:'#292929',width:'11.667vw',height:'16.666vh',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'left',lineHeight:'0.1vh',margin:'1.5vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',border:'1px solid #4E4E4E'}}>
                <p style={{margin:'3vh 0 0 2vw',fontSize:'1.5rem'}}>Signal - M5</p>
                <p style={{margin:'4vh 0 0 2vw',fontSize:'1rem'}}>จำนวนเงินสุทธิ(บาท)</p>
                <p style={{margin:'4vh 0 0 2vw',fontWeight:'bold',fontSize:'1.75rem'}}>0</p>
            </div>
        </div>
    );

    const Card3= () => (
        <div>
            <div style={{backgroundColor:'#FFFFFF',color:'#292929',width:'11.667vw',height:'16.666vh',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'left',lineHeight:'0.1vh',margin:'1.5vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',border:'1px solid #4E4E4E'}}>
                <p style={{margin:'3vh 0 0 2vw',fontSize:'1.5rem'}}>Signal - M4</p>
                <p style={{margin:'4vh 0 0 2vw',fontSize:'1rem'}}>จำนวนเงินสุทธิ(บาท)</p>
                <p style={{margin:'4vh 0 0 2vw',fontWeight:'bold',fontSize:'1.75rem'}}>23,015</p>
            </div>
        </div>
    );

    const Card4 = () => (
        <div>
            <div style={{backgroundColor:'#FFFFFF',color:'#292929',width:'11.667vw',height:'16.666vh',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'left',lineHeight:'0.1vh',margin:'1.5vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',border:'1px solid #4E4E4E'}}>
                <p style={{margin:'3vh 0 0 2vw',fontSize:'1.5rem'}}>Signal - M30</p>
                <p style={{margin:'4vh 0 0 2vw',fontSize:'1rem'}}>จำนวนเงินสุทธิ(บาท)</p>
                <p style={{margin:'4vh 0 0 2vw',fontWeight:'bold',fontSize:'1.75rem'}}>0</p>
            </div>
        </div>
    );

    const Card5 = () => (
        <div>
            <div style={{backgroundColor:'#FFFFFF',color:'#292929',width:'11.667vw',height:'16.666vh',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'left',lineHeight:'0.1vh',margin:'1.5vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',border:'1px solid #4E4E4E'}}>
                <p style={{margin:'3vh 0 0 2vw',fontSize:'1.5rem'}}>Signal - VIP</p>
                <p style={{margin:'4vh 0 0 2vw',fontSize:'1rem'}}>จำนวนเงินสุทธิ(บาท)</p>
                <p style={{margin:'4vh 0 0 2vw',fontWeight:'bold',fontSize:'1.75rem'}}>0</p>
            </div>
        </div>
    );


    return (
        <div style={{backgroundColor:'white',padding:'3vh 1vw'}}>
            <div style={{display:'flex',width:'100%'}}>
                <div style={{justifyContent:'flex-start',width:'50%',margin:'1vh 0.5vw'}}>
                    <div style={{fontSize:'1.5rem'}}>Signal Package ที่มีการชำระเงิน</div>
                </div>
                <div style={{justifyContent:'flex-end',width:'50%',display:'flex',margin:'1vh 0.5vw'}}>
                    <div style={{fontSize:'1.5rem',width:'35%'}}>จำนวนเงินสุทธิรวม</div>
                    <div style={{fontSize:'1.5rem',width:'10%',color:'#51D456',fontWeight:'bold',marginRight:'1vw',marginLeft:'1vw'}}>28,308</div>
                    <div style={{fontSize:'1.5rem',width:'10%'}}>บาท</div>
                    
                </div>
            </div>
            <div style={{display:'flex'}}>
                <Card/>
                <Card2/>
                <Card3/>
                <Card4/>
                <Card5/>
            </div>
        </div>
    );
};

export default HeaderBody;
