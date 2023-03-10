import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import MainPage from './pages/Header';
import DashboardPage from './pages/Dashboard/Dashboard';
import CheckuserPage from './pages/Checkuser/Checkuser';
import CheckuserM1Page from './pages/Checkuser/CheckuserM1/Checkuser';
import CheckuserM5Page from './pages/Checkuser/CheckuserM5/Checkuser';
import CheckuserM30Page from './pages/Checkuser/CheckuserM30/Checkuser';
import CheckuserVIPPage from './pages/Checkuser/CheckuserVIP/Checkuser';
import ResendPage from './pages/Resend/Resend';
import ResendM1Page from './pages/ResendM1/Resend';
import ResendM5Page from './pages/ResendM5/Resend';
import ResendM30Page from './pages/ResendM30/Resend';
import ResendVIPPage from './pages/ResendVIP/Resend';
import LoginPage from './pages/LoginPage/Login';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/checkuser" element={<CheckuserPage />} />
                <Route path="/checkuserm1" element={<CheckuserM1Page />} />
                <Route path="/checkuserm5" element={<CheckuserM5Page />} />
                <Route path="/checkuserm30" element={<CheckuserM30Page />} />
                <Route path="/checkuservip" element={<CheckuserVIPPage />} />
                <Route path="/resendm4" element={<ResendPage />} />
                <Route path="/resendm1" element={<ResendM1Page />} />
                <Route path="/resendm5" element={<ResendM5Page />} />
                <Route path="/resendm30" element={<ResendM30Page />} />
                <Route path="/resendvip" element={<ResendVIPPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
