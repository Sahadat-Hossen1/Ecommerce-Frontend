import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextApi from './Components/ContextApi/ContextApi';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   < ContextApi>
   
    <App />
   </ContextApi>
  </StrictMode>,
)
