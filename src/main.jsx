import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation from './Navigation.jsx'

createRoot(document.getElementById('header')).render(
  <StrictMode>
    <Navigation />
  </StrictMode>
)
