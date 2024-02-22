import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import {Home, Github, About, User, Contant} from './components/index';
import { githubInfoLoader } from './components/Github';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contant />} />
      <Route path='user/' element={<User />}> 
        <Route path=':userid' element={<User />} />
      </Route>
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);