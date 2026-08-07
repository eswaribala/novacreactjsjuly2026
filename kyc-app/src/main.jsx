import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import 'primereact/resources/themes/vela-purple/theme.css'  //theme
//import 'primereact/resources/primereact.min.css'
//import 'primeicons/primeicons.css'                            //icons
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
