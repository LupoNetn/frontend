import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShopContextProvider } from './Context/ShopContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
);
