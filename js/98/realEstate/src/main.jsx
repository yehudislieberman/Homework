import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Index from './Index.jsx';
import Sell from './Sell.jsx';
import Buy from './Buy.jsx';
import UserError from './UserError.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/sell',
        element: <Sell />
      },
      {
        path: '/buy',
        element: <Buy />
      },
      {
        path: '*',
        element: <UserError />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);