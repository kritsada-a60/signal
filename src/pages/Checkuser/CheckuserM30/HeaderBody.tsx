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

    const navigatetoresend = () => {
        navigate('/resendm30');
    };

    const navigatetosend = () => {
        navigate('/sendm30');
    };
    const Card = () => (
        <div>
            <div style={{backgroundColor:'#8CABD8',color:'white',width:'17.708vw',height:'14.537vh',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'left',lineHeight:'0.1vh',margin:'1.5vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                <p style={{margin:'3vh 0 0 2vw',fontSize:'1.5rem'}}>Active</p>
                <p style={{margin:'4vh 0 0 2vw',fontSize:'1rem'}}>Package : User</p>
                <p style={{margin:'4vh 0 0 2vw',fontWeight:'bold',fontSize:'1.75rem'}}>2</p>
            </div>
        </div>
    );

    const Card2 = () => (
        <div>
            <div style={{backgroundColor:'#4E4E4E',color:'white',width:'17.708vw',height:'14.537vh',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'left',lineHeight:'0.1vh',margin:'1.5vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                <p style={{margin:'3vh 0 0 2vw',fontSize:'1.5rem'}}>Inactive</p>
                <p style={{margin:'4vh 0 0 2vw',fontSize:'1rem'}}>Package : User</p>
                <p style={{margin:'4vh 0 0 2vw',fontWeight:'bold',fontSize:'1.75rem'}}>5</p>
            </div>
        </div>
    );

    const Card3 = () => (
        <div>
            <div style={{backgroundColor:'white',color:'#292929',width:'17.708vw',height:'14.537vh',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'left',lineHeight:'0.1vh',margin:'1.5vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                <p style={{margin:'3vh 0 0 2vw',fontSize:'1.5rem'}}>ส่งข้อความ M30</p>
                <p style={{margin:'4vh 0 0 2vw',fontSize:'1rem'}}>ข้อความ ใน 1 วัน</p>
                <p style={{margin:'4vh 0 0 2vw',fontWeight:'bold',fontSize:'1.75rem'}}>2</p>
            </div>
        </div>
    );

    const Card4 = () => (
        <div>
            <div onClick={navigatetosend} style={{backgroundColor:'#51D456',color:'white',width:'17.708vw',height:'14.537vh',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'left',lineHeight:'0.1vh',margin:'1.5vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',cursor:'pointer'}}>
                <p style={{margin:'3vh 0 0 2vw',fontSize:'1.5rem'}}>ข้อความที่ได้รับ</p>
                <p style={{margin:'4vh 0 0 2vw',fontSize:'1rem'}}>จำนวนข้อความ</p>
                <p style={{margin:'4vh 0 0 2vw',fontWeight:'bold',fontSize:'1.75rem'}}>10</p>
            </div>  
        </div>
    );

    const Card5 = () => (
        <div>
            <div onClick={navigatetoresend} style={{backgroundColor:'#D21E1E',color:'white',width:'17.708vw',height:'14.537vh',borderRadius:'1vh',display:'flex',flexDirection:'column',textAlign:'left',lineHeight:'0.1vh',margin:'1.5vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',cursor:'pointer'}}>
                <p style={{margin:'3vh 0 0 2vw',fontSize:'1.5rem'}}>ข้อความที่ไม่ได้รับ</p>
                <p style={{margin:'4vh 0 0 2vw',fontSize:'1rem'}}>จำนวนข้อความ</p>
                <p style={{margin:'4vh 0 0 2vw',fontWeight:'bold',fontSize:'1.75rem'}}>5</p>
            </div>
        </div>
    );

    return (
        <div style={{backgroundColor:'white',padding:'3vh 1vw'}}>
            <div>
                <Button onClick={navigatetonext} style={{width:'13.698vw',height:'5.185vh',color:'#292929',backgroundColor:'#292FFFFFF929',borderRadius:'1vh',margin:'0vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    ตรวจสอบ Signal M4
                </Button>
                <Button onClick={navigatetonextm1} style={{width:'13.698vw',height:'5.185vh',color:'#292929',backgroundColor:'#FFFFFF',borderRadius:'1vh',margin:'0vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    ตรวจสอบ Signal M1
                </Button>
                <Button onClick={navigatetonextm5} style={{width:'13.698vw',height:'5.185vh',color:'#292929',backgroundColor:'#FFFFFF',borderRadius:'1vh',margin:'0vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    ตรวจสอบ Signal M5
                </Button>
                <Button onClick={navigatetonextm30} style={{width:'13.698vw',height:'5.185vh',color:'#FFFFFF',backgroundColor:'#292929',borderRadius:'1vh',margin:'0vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    ตรวจสอบ Signal M30
                </Button>
                <Button onClick={navigatetonextvip} style={{width:'13.698vw',height:'5.185vh',color:'#292929',backgroundColor:'#FFFFFF',borderRadius:'1vh',margin:'0vh 0.5vw',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)'}}>
                    ตรวจสอบ Signal VIP
                </Button>
            </div>
            <div style={{display:'flex',marginTop:'1vh'}}>
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
