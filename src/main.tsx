import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import StoreR from './Components/CartProduct/Store/StoreR.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={StoreR}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)

