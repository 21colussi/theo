import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Temp from './temp/Temp.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Temp />
  </StrictMode>,
)
