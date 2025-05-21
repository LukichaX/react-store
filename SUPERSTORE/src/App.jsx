import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className='app-container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App
