import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import 'primereact/resources/themes/vela-purple/theme.css'  //theme
//import 'primereact/resources/primereact.min.css'
//import 'primeicons/primeicons.css'                            //icons
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
