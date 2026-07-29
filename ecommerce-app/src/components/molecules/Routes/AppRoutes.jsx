import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../../../pages/AuthPage.jsx';
import Home from '../../../pages/HomePage.jsx';

function AppRoutes(){
    
    return (
        <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login Page */}
        <Route path="/login" element={<AuthPage />} />

        {/* Home Page */}
        <Route path="/home" element={<Home />} />

        {/* 404 Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    )
}
export default AppRoutes