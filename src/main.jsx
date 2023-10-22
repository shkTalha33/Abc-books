import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './context/AuthContext.jsx'
import CategoryContextProvider from './context/CategoryContext.jsx'
import CartContextProvider from './context/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthContextProvider>
      <CategoryContextProvider>
        <CartContextProvider>
         <App />
        </CartContextProvider>
      </CategoryContextProvider>
     </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
