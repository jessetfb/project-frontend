import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes';
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={Routes}/>
  </React.StrictMode>,
)
