import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CookiesProvider defaultSetCookies={{path:'/'}}>
    <App />
    </CookiesProvider>
  </BrowserRouter>,
)
