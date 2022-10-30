import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainView from '@/view/MainView';

const App: React.FC = () => 
<>
  <HashRouter>
    <Routes>
      <Route path='/' element={<MainView/>}/>
    </Routes>
  </HashRouter>
</>

export default App;
