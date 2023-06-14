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

export interface ICheckuqrslipPageProps {}


const CheckuqrslipPage: React.FunctionComponent<ICheckuqrslipPageProps> = (props) => {
  
    const LS = localStorage;

    return (
        <div>
            <div style={{backgroundColor:'#D3D3D3', padding:'0vh 0vw 0vh 0vw' ,margin:'0'}}>
              <Header/>
              <Body/>
            </div>
        </div>
    );
};

export default CheckuqrslipPage;
