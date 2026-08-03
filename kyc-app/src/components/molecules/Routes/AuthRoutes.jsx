//function to handle the routes for authentication pages

import { Route, Routes } from 'react-router-dom';
import AuthPad from '../../organisms/AuthPad/AuthPad';
import HomePage from '../../../pages/HomePage';



function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AuthPad/>} />
            <Route path="/home" element={<HomePage/>} />
           <Route path="*" element={<h1>404 - Page Not Found</h1>} />


        </Routes>
    );
}
export default AuthRoutes;
