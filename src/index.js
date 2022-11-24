import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import All from './pages/all/All';
import Images from './pages/images/Images';
import Layout from './pages/layout/Layout';
import Videos from './pages/videos/Videos';
import CounterPage from './pages/counter/CounterPage';
import NewPage from './pages/NewPage';
import Log from './pages/sign/Log';
import Tabela from './pages/Tabela';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="new-page" element={<NewPage />} />
          <Route path="sign" element={<Log />} />
          <Route path="tabela" element={<Tabela />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

