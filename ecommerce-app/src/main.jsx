import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { AuthProvider } from './contexts/AuthContext.jsx'
// Always display only http://localhost:5173/
//window.history.replaceState({}, "", "/");

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <Provider store={store}>  
    <BrowserRouter initialEntries={['/']}>
      <App />
    </BrowserRouter>
    </Provider>
    </AuthProvider>
  </StrictMode>,
)
