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

    const navigatetonext = () => {
        navigate('/checkuser');
    };

    const navigatetonextm1 = () => {
        navigate('/checkuserm1');
    };

    const navigatetonextm5 = () => {
        navigate('/checkuserm5');
    };

    const navigatetonextm30 = () => {
        navigate('/checkuserm30');
    };

    const navigatetonextvip = () => {
        navigate('/checkuservip');
    };

    const navigateback = () => {
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
            <div>
                <Button onClick={navigatetonextm1} style={{width:'13.698vw',height:'5.185vh',color:'#292929',backgroundColor:'#FFFFFF',borderRadius:'1vh',margin:'0vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    ตรวจสอบ Signal M4
                </Button>
                <Button onClick={navigatetonextm1} style={{width:'13.698vw',height:'5.185vh',color:'#292929',backgroundColor:'#FFFFFF',borderRadius:'1vh',margin:'0vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    ตรวจสอบ Signal M1
                </Button>
                <Button onClick={navigatetonextm5} style={{width:'13.698vw',height:'5.185vh',color:'#292929',backgroundColor:'#FFFFFF',borderRadius:'1vh',margin:'0vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    ตรวจสอบ Signal M5
                </Button>
                <Button onClick={navigatetonext} style={{width:'13.698vw',height:'5.185vh',color:'#FFFFFF',backgroundColor:'#292929',borderRadius:'1vh',margin:'0vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    ตรวจสอบ Signal M30
                </Button>
                <Button onClick={navigatetonextvip} style={{width:'13.698vw',height:'5.185vh',color:'#292929',backgroundColor:'#FFFFFF',borderRadius:'1vh',margin:'0vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    ตรวจสอบ Signal VIP
                </Button>
            </div>

            <div style={{display:'flex'}}>
                <Button onClick={() => navigate(-1)} style={{width:'4.948vw',height:'4.351vh',color:'#292929',backgroundColor:'#FFFFFF',borderRadius:'1vh',margin:'3vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    กลับ
                </Button>
                <div style={{fontSize:'1.5rem',margin:'0vh 0.5vw',display:'flex',justifyContent:'center',alignItems:'center'}}>ข้อความที่ได้รับ</div>
                <div style={{fontSize:'1.5rem',margin:'0vh 0vw 0vh 25vw',display:'flex',justifyContent:'center',color:'#51D456',alignItems:'center'}}>5</div>
                <div style={{fontSize:'1rem',margin:'0vh 0.5vw',display:'flex',justifyContent:'center',alignItems:'center'}}>ข้อความ</div>
            </div>
        </div>
    );
};

export default HeaderBody;
