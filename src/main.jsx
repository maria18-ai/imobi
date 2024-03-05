import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Imoveis } from './components/pages/Imoveis.jsx';
import { Login } from './components/pages/Login.jsx';
import { ErrorPage } from './components/errorPage/ErrorPage.jsx';
import {Hero} from './components/hero/Hero.jsx'
import { Planos } from './components/planos/Planos.jsx';
import { Post } from './components/posts-imoveis/Post.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path: 'imoveis',
        element: <Imoveis />
      }, 
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'planos',
        element: <Planos />
      },
    ],
  },
  {
    path: 'posts',
    element: <Post />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
