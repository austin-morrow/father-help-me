import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Music from './components/Music';
import Shows from './components/Shows';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/shows" element={<Shows/>}/>
            <Route path="/subscribe" element={<Subscribe/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;