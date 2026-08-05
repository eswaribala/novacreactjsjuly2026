//function to handle the routes for authentication pages

import { Route, Routes } from 'react-router-dom';
import AuthPad from '../../organisms/AuthPad/AuthPad';
import BeneficiaryPAN from '../../../pages/BeneficiaryPAN';
import HomePage from '../../../pages/HomePage';
import HomeScreen from '../../organisms/HomeScreen/HomeScreen';
import ChangePassword from '../../../pages/ChangePassword';
import MISReport from '../../../pages/MISReport';
import Profile from '../../../pages/Profile';
import ClosedPAN from '../../../pages/ClosedPAN';
import Payout from '../../../pages/Payout';
import EmailUpdate from '../../../pages/EmailUpdate';
import MobileUpdate from '../../../pages/MobileUpdate';
import AdminHome from '../../../pages/AdminHome';



function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AuthPad/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/admin" element={<AdminHome/>} />
            
           <Route path="*" element={<h1>404 - Page Not Found</h1>} />
           {/* Add more for kyc routes as needed */}
           <Route element={<HomeScreen/>}>
            <Route path="/masters/change-password" element={<ChangePassword/>} />
            <Route path="/transactions/beneficiary-pan" element={<BeneficiaryPAN/>} />
            <Route path="/transactions/policy-service/payouts" element={<Payout/>} />
            <Route path="/transactions/policy-service/non-payouts/email-update" element={<EmailUpdate/>} />
            <Route path="/transactions/policy-service/non-payouts/mobile-update" element={<MobileUpdate/>} />
            <Route path="/reports/mis-report" element={<MISReport/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/closed-pan" element={<ClosedPAN/>} />
           </Route>

        </Routes>
    );
}
export default AuthRoutes;
