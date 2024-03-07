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
import { Hero } from './components/hero/Hero.jsx';
import { Planos } from './components/planos/Planos.jsx';
import { Post } from './components/posts-imoveis/Post.jsx';
import { About } from './components/sobre/About.jsx';
import { Profile } from './components/profile/Profile.jsx';
import  Details  from './components/pages/ImoveisDetails.jsx';


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
        element: <Imoveis />,
        children: [
          {
            path:'details/:id',
            element: <Details />
          },
        ]
      }, 
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'planos',
        element: <Planos />
      },
      {
        path: 'sobre',
        element: <About />
      }, 
      {
        path:'perfil',
        element: <Profile />
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
