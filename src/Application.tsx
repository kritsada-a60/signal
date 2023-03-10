import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import MainPage from './pages/Header';
import DashboardPage from './pages/Dashboard/Dashboard';
import CheckuserPage from './pages/Checkuser/Checkuser';
import ResendPage from './pages/Resend/Resend';
import LoginPage from './pages/LoginPage/Login';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/checkuser" element={<CheckuserPage />} />
                <Route path="/resend" element={<ResendPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
