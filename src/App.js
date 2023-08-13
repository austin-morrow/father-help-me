import React from "react";
import Header from "./Layout/Header";
import Home from "./pages/Home";
import Music from "./pages/Music";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
