
import Header from './components/molecules/Header/Header.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import Home from './pages/HomePage.jsx';
import AppRoutes from './components/molecules/Routes/AppRoutes.jsx';
function App() {
  
  

  return (
    <>
    <div className="ml-10 mt-2 mr-10">
    <Header />
    <AppRoutes/>
    </div>
    
    </>
  )
}

export default App
