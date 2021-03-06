import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import LogIn from './components/LogIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LogIn />} />
    </Routes>
  </BrowserRouter>

);
