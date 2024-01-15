import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from '../src/Components/App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"login",
    element:<Login />
  },{
    path:"register",
    element:<Register />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

