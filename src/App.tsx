import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainView from './view/MainView';

const App: React.FC = () => 
<>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<MainView/>}/>
    </Routes>
  </BrowserRouter>
</>

export default App;
