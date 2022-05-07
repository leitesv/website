import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
import App from './App';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Tutorials } from './Tutorials';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/blog/how-to-unstake-your-sxp' element={<Tutorials/>}/>
      </Routes>
      </BrowserRouter>
    </>
);

