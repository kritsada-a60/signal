import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import MainPage from './pages/Header';
import DashboardPage from './pages/Dashboard/Dashboard';
import CheckuserPage from './pages/Checkuser/CheckuserM4/Checkuser';
import Checkuqrslip from './pages/Checkqrslip/Checkuqrslip';
import CheckuserM1Page from './pages/Checkuser/CheckuserM1/Checkuser';
import CheckuserM5Page from './pages/Checkuser/CheckuserM5/Checkuser';
import CheckuserM30Page from './pages/Checkuser/CheckuserM30/Checkuser';
import CheckuserVIPPage from './pages/Checkuser/CheckuserVIP/Checkuser';
import ResendPage from './pages/Resends/Resend/Resend';
import ResendM1Page from './pages/Resends/ResendM1/Resend';
import ResendM5Page from './pages/Resends/ResendM5/Resend';
import ResendM30Page from './pages/Resends/ResendM30/Resend';
import ResendVIPPage from './pages/Resends/ResendVIP/Resend';
import ReceivePage from './pages/Received/Received';
import LoginPage from './pages/LoginPage/Login';

import SendPage from './pages/SendMassage/send/send';
import SendM1Page from './pages/SendMassage/sendM1/send';
import SendM5Page from './pages/SendMassage/sendM5/send';
import SendM30Page from './pages/SendMassage/sendM30/send';
import SendVIPPage from './pages/SendMassage/sendVIP/send';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/checkuser" element={<CheckuserPage />} />
                <Route path="/checkqrslip" element={<Checkuqrslip />} />
                <Route path="/checkuserm1" element={<CheckuserM1Page />} />
                <Route path="/checkuserm5" element={<CheckuserM5Page />} />
                <Route path="/checkuserm30" element={<CheckuserM30Page />} />
                <Route path="/checkuservip" element={<CheckuserVIPPage />} />
                <Route path="/resendm4" element={<ResendPage />} />
                <Route path="/resendm1" element={<ResendM1Page />} />
                <Route path="/resendm5" element={<ResendM5Page />} />
                <Route path="/resendm30" element={<ResendM30Page />} />
                <Route path="/resendvip" element={<ResendVIPPage />} />
                <Route path="/receive" element={<ReceivePage />} />
                <Route path="/sendm4" element={<SendPage/>} />
                <Route path="/sendm1" element={<SendM1Page/>} />
                <Route path="/sendm5" element={<SendM5Page/>} />
                <Route path="/sendm30" element={<SendM30Page/>} />
                <Route path="/sendmvip" element={<SendVIPPage/>} />

            </Routes>
        </BrowserRouter>
    );
};

export default Application;
