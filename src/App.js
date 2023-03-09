import React from 'react';
import Home from './pages/Home';
import Music from './pages/Music'
import TopNav from './layouts/TopNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <TopNav />
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/music' element={<Music/>}/>
        </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;