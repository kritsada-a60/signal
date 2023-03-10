import React, { Component } from "react";
import Background from "../img/LoginBackground.png";
import Logo from "../img/Circle.png";
import ButtonLogin from "../img/BackgroundButtonLogin.png";
import { styled } from '@mui/system';
import zIndex from "@mui/material/styles/zIndex";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';


export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {

    return (
      <div>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" , width: "78.906vw"}} /> */}
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" , width: "78.906vw"}} />
        {/* <img src={Logo} style={{position: 'absolute', zIndex:'2' ,left: '1257px', top: '220px',}}/> */}
        {/* <img src={Background} style={{ height: "99.5vh" , width: "78.906vw"}}/> */}
      </div>

    );
};

export default HomePage;
